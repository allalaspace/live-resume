import { Injectable } from "@angular/core";
import { SupabaseClientService } from "../services/supabase-client.service";

export interface AssistantSource {
  type: "about" | "experience" | "post";
  id: string;
  label: string;
}

export interface ChatTurn {
  role: "user" | "assistant";
  content: string;
  sources?: AssistantSource[];
}

export interface AssistantReply {
  answer: string;
  sources: AssistantSource[];
  error: "rate_limit" | "unconfigured" | "upstream" | "invalid" | null;
}

@Injectable({
  providedIn: "root"
})
export class AssistantService {
  constructor(private supabaseClientService: SupabaseClientService) {}

  async ask(locale: string, messages: Array<{ role: string; content: string }>): Promise<AssistantReply> {
    const { data, error } = await this.supabaseClientService.client.functions.invoke("portfolio-chat", {
      body: { locale, messages }
    });

    if (error) {
      return { answer: "", sources: [], error: await this.readErrorCode(error) };
    }

    return {
      answer: typeof data?.answer === "string" ? data.answer.trim() : "",
      sources: this.normalizeSources(data?.sources),
      error: null
    };
  }

  private async readErrorCode(error: unknown): Promise<AssistantReply["error"]> {
    const context = (error as { context?: { json?: () => Promise<unknown> } }).context;
    if (context && typeof context.json === "function") {
      try {
        const body = await context.json() as { error?: string };
        if (body?.error === "rate_limit" || body?.error === "unconfigured" || body?.error === "invalid") {
          return body.error;
        }
      } catch {
        return "upstream";
      }
    }
    return "upstream";
  }

  private normalizeSources(raw: unknown): AssistantSource[] {
    if (!Array.isArray(raw)) return [];
    const sources: AssistantSource[] = [];

    for (const item of raw) {
      if (!item || typeof item !== "object") continue;
      const type = (item as { type?: unknown }).type;
      const id = (item as { id?: unknown }).id;
      const label = (item as { label?: unknown }).label;
      if (type !== "about" && type !== "experience" && type !== "post") continue;
      if (typeof id !== "string" || typeof label !== "string" || !id || !label) continue;
      sources.push({ type, id, label });
    }

    return sources.slice(0, 4);
  }
}
