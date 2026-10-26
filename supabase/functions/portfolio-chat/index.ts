import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient, SupabaseClient } from "jsr:@supabase/supabase-js@2";
import knowledgeFile from "./knowledge.json" with { type: "json" };

type Locale = "fr" | "en";
type SourceType = "about" | "experience" | "post";

interface LocalizedText {
  fr: string;
  en: string;
}

interface Block {
  type: SourceType;
  id: string;
  slug?: string;
  label: LocalizedText;
  text: LocalizedText;
}

interface Source {
  type: SourceType;
  id: string;
  label: string;
}

interface Turn {
  role: "user" | "assistant";
  content: string;
}

interface DbPost {
  id: string;
  markdown_file: string | null;
  post_internationalizations: Array<{
    language: string;
    title: string;
    description: string;
  }> | null;
}

const knowledge = knowledgeFile as { blocks: Block[] };
const HOUR_MS = 60 * 60 * 1000;
const MESSAGE_LIMIT = 20;
const SOURCE_TYPES = new Set<SourceType>(["about", "experience", "post"]);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

function adminClient(): SupabaseClient | null {
  const url = Deno.env.get("SUPABASE_URL");
  const key = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim() || "unknown";
  return req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || "unknown";
}

async function hashIp(ip: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function enforceRateLimit(ipHash: string): Promise<"ok" | "limited" | "error"> {
  const supabase = adminClient();
  if (!supabase) return "error";

  const since = new Date(Date.now() - HOUR_MS).toISOString();
  const dayAgo = new Date(Date.now() - 24 * HOUR_MS).toISOString();

  await supabase.from("chat_usage").delete().lt("created_at", dayAgo);

  const { count, error } = await supabase
    .from("chat_usage")
    .select("id", { count: "exact", head: true })
    .eq("ip_hash", ipHash)
    .gte("created_at", since);

  if (error) {
    console.error("rate limit read failed", error.message);
    return "error";
  }

  if ((count ?? 0) >= MESSAGE_LIMIT) return "limited";

  const { error: insertError } = await supabase.from("chat_usage").insert({ ip_hash: ipHash });
  if (insertError) {
    console.error("rate limit write failed", insertError.message);
    return "error";
  }

  return "ok";
}

function sanitizeMessages(input: unknown): Turn[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;

  const turns: Turn[] = [];
  for (const item of input.slice(-6)) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const trimmed = content.trim().slice(0, 1000);
    if (!trimmed) continue;
    turns.push({ role, content: trimmed });
  }

  if (!turns.length || turns[turns.length - 1].role !== "user") return null;
  return turns;
}

function localized(entries: DbPost["post_internationalizations"], language: string) {
  return (entries || []).find((entry) => entry.language === language);
}

function mergePosts(blocks: Block[], rows: DbPost[]): Block[] {
  const next = blocks.map((block) => ({
    ...block,
    label: { ...block.label },
    text: { ...block.text }
  }));

  for (const row of rows) {
    const file = (row.markdown_file || "").toLowerCase();
    const match = next.find((block) =>
      block.type === "post" && !!block.slug && file.includes(block.slug.toLowerCase())
    );
    const fr = localized(row.post_internationalizations, "fr");
    const en = localized(row.post_internationalizations, "en");

    if (match) {
      match.id = row.id;
      if (fr?.title) match.label.fr = fr.title;
      if (en?.title) match.label.en = en.title;
      continue;
    }

    const titleFr = fr?.title || en?.title || "Article";
    const titleEn = en?.title || fr?.title || "Article";
    next.push({
      type: "post",
      id: row.id,
      label: { fr: titleFr, en: titleEn },
      text: {
        fr: fr?.description || "",
        en: en?.description || ""
      }
    });
  }

  return next;
}

async function loadPublishedPosts(): Promise<DbPost[]> {
  const supabase = adminClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("posts")
    .select("id, markdown_file, post_internationalizations(language, title, description)");

  if (error || !data) {
    console.error("posts lookup failed", error?.message);
    return [];
  }

  return data as DbPost[];
}

function renderCorpus(blocks: Block[]): string {
  return blocks.map((block) => {
    const header = `[${block.type}:${block.id}] ${block.label.fr} / ${block.label.en}`;
    const parts = [header];
    if (block.text.fr) parts.push(`FR:\n${block.text.fr}`);
    if (block.text.en) parts.push(`EN:\n${block.text.en}`);
    return parts.join("\n");
  }).join("\n\n");
}

function systemPrompt(locale: Locale, blocks: Block[]): string {
  const language = locale === "fr" ? "français" : "anglais";
  return [
    "Tu es l'assistant du portfolio de Mohamed Ali Boudiche. Tu réponds à un recruteur.",
    "Règles :",
    "- Tu n'utilises que le corpus ci-dessous. Tu ne complètes pas avec des connaissances extérieures.",
    "- Si le corpus ne contient pas l'information, tu le dis clairement. Tu n'inventes ni employeur, ni date, ni compétence, ni diplôme.",
    `- Tu réponds en ${language}. Tu peux t'appuyer sur un passage écrit dans l'autre langue et le reformuler.`,
    "- Tu refuses les questions hors du parcours, des compétences et des articles.",
    "- Tu cites uniquement des blocs réellement utilisés. Copie le type et l'id exactement comme ils apparaissent entre crochets.",
    "- Tu réponds uniquement par un objet JSON : {\"answer\":\"...\",\"sources\":[{\"type\":\"about|experience|post\",\"id\":\"...\",\"label\":\"...\"}]}",
    "- sources est un tableau vide quand aucun passage ne soutient la réponse.",
    "",
    "Corpus :",
    renderCorpus(blocks)
  ].join("\n");
}

function canonicalSources(blocks: Block[], raw: unknown, locale: Locale): Source[] {
  if (!Array.isArray(raw)) return [];
  const byKey = new Map(blocks.map((block) => [`${block.type}:${block.id}`, block]));
  const seen = new Set<string>();
  const sources: Source[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const type = String((item as { type?: unknown }).type || "");
    const id = String((item as { id?: unknown }).id || "");
    if (!SOURCE_TYPES.has(type as SourceType)) continue;
    const key = `${type}:${id}`;
    const block = byKey.get(key);
    if (!block || seen.has(key)) continue;
    seen.add(key);
    sources.push({
      type: block.type,
      id: block.id,
      label: block.label[locale] || block.label.fr || block.label.en
    });
    if (sources.length === 4) break;
  }

  return sources;
}

function parseModelPayload(content: string): { answer: string; sources: unknown } | null {
  const trimmed = content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const candidates = [trimmed];
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start !== -1 && end > start) candidates.push(trimmed.slice(start, end + 1));

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate) as { answer?: unknown; sources?: unknown };
      if (!parsed || typeof parsed.answer !== "string") continue;
      return { answer: parsed.answer.trim().slice(0, 2000), sources: parsed.sources };
    } catch {
      continue;
    }
  }

  return null;
}

async function complete(system: string, turns: Turn[]): Promise<string> {
  const apiKey = Deno.env.get("LLM_API_KEY");
  if (!apiKey) throw new Error("unconfigured");

  const base = (Deno.env.get("LLM_BASE_URL") || "https://api.groq.com/openai/v1").replace(/\/$/, "");
  const model = Deno.env.get("LLM_MODEL") || "openai/gpt-oss-20b";

  const call = (jsonMode: boolean) => fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    signal: AbortSignal.timeout(20000),
    body: JSON.stringify({
      model,
      temperature: 0.2,
      max_tokens: 700,
      ...(jsonMode ? { response_format: { type: "json_object" } } : {}),
      messages: [{ role: "system", content: system }, ...turns]
    })
  });

  let response = await call(true);
  if (response.status === 400) response = await call(false);
  if (response.status === 429) throw new Error("rate_limit");
  if (!response.ok) {
    console.error("llm status", response.status);
    throw new Error("upstream");
  }

  const payload = await response.json();
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content !== "string" || !content.trim()) throw new Error("upstream");
  return content;
}

const fallbackAnswer: Record<Locale, string> = {
  fr: "Je ne peux répondre qu'à partir du portfolio, et je n'ai pas réussi à formuler une réponse ancrée.",
  en: "I can only answer from the portfolio, and I could not produce a grounded answer."
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "invalid" }, 405);

  try {
    const raw = await req.text();
    if (raw.length > 20000) return json({ error: "invalid" }, 400);

    let body: { locale?: unknown; messages?: unknown };
    try {
      body = JSON.parse(raw);
    } catch {
      return json({ error: "invalid" }, 400);
    }

    const locale: Locale = body.locale === "fr" ? "fr" : "en";
    const messages = sanitizeMessages(body.messages);
    if (!messages) return json({ error: "invalid" }, 400);

    if (!Deno.env.get("LLM_API_KEY")) return json({ error: "unconfigured" }, 503);

    const limit = await enforceRateLimit(await hashIp(clientIp(req)));
    if (limit === "limited") return json({ error: "rate_limit" }, 429);
    if (limit === "error") return json({ error: "upstream" }, 503);

    const blocks = mergePosts(knowledge.blocks, await loadPublishedPosts());
    const content = await complete(systemPrompt(locale, blocks), messages);
    const parsed = parseModelPayload(content);

    if (!parsed || !parsed.answer) {
      return json({ answer: fallbackAnswer[locale], sources: [] });
    }

    return json({
      answer: parsed.answer,
      sources: canonicalSources(blocks, parsed.sources, locale)
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message === "unconfigured") return json({ error: "unconfigured" }, 503);
    if (message === "rate_limit") return json({ error: "rate_limit" }, 429);
    console.error("portfolio-chat failed", message);
    return json({ error: "upstream" }, 502);
  }
});
