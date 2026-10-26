import { mkdirSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(root, relativePath), "utf8"));
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function textByLanguage(entries, language) {
  return entries.find((entry) => entry.language === language) || null;
}

function experienceText(experience, language) {
  const localized = textByLanguage(experience.internationalizations || [], language);
  const lines = [
    localized?.role || "",
    [localized?.city, localized?.country].filter(Boolean).join(", "),
    stripHtml(localized?.description || "")
  ].filter(Boolean);

  return lines.join("\n");
}

const about = readJson("src/assets/data/about.json");
const experiences = readJson("src/assets/data/experiences.json");

const hobbyNames = (about.hobbies || []).map((hobby) => hobby.title).filter(Boolean);
const links = (about.medias || [])
  .filter((media) => media.title && media.http)
  .map((media) => `${media.title}: ${media.http}`);

const aboutFr = textByLanguage(about.internationalizations || [], "fr");
const aboutEn = textByLanguage(about.internationalizations || [], "en");

function aboutText(localized, language) {
  const hobbies = hobbyNames.length
    ? (language === "en"
      ? `Interests: ${hobbyNames.join(", ")}`
      : `Centres d'intérêt : ${hobbyNames.join(", ")}`)
    : "";
  const linkLine = links.length
    ? (language === "en"
      ? `Links: ${links.join("; ")}`
      : `Liens : ${links.join(" ; ")}`)
    : "";

  return [stripHtml(localized?.description || ""), hobbies, linkLine].filter(Boolean).join("\n\n");
}

const blocks = [
  {
    type: "about",
    id: "about",
    label: {
      fr: "À propos",
      en: "About"
    },
    text: {
      fr: aboutText(aboutFr, "fr"),
      en: aboutText(aboutEn, "en")
    }
  }
];

for (const experience of experiences) {
  const fr = textByLanguage(experience.internationalizations || [], "fr");
  const en = textByLanguage(experience.internationalizations || [], "en");
  const periodFr = experience.endAt
    ? `${experience.startAt} → ${experience.endAt}`
    : `${experience.startAt} → en cours`;
  const periodEn = experience.endAt
    ? `${experience.startAt} → ${experience.endAt}`
    : `${experience.startAt} → present`;
  const technologies = (experience.technologies || []).join(", ");
  const sharedFr = [
    `Période : ${periodFr}`,
    technologies ? `Technologies : ${technologies}` : ""
  ].filter(Boolean).join("\n");
  const sharedEn = [
    `Period: ${periodEn}`,
    technologies ? `Technologies: ${technologies}` : ""
  ].filter(Boolean).join("\n");

  blocks.push({
    type: "experience",
    id: String(experience.id),
    label: {
      fr: `${experience.companyName} — ${fr?.role || "Expérience"}`,
      en: `${experience.companyName} — ${en?.role || "Experience"}`
    },
    text: {
      fr: [sharedFr, experienceText(experience, "fr")].filter(Boolean).join("\n"),
      en: [sharedEn, experienceText(experience, "en")].filter(Boolean).join("\n")
    }
  });
}

const postsDir = join(root, "posts");
const postFiles = readdirSync(postsDir)
  .filter((name) => name.endsWith(".md"))
  .sort();

for (const fileName of postFiles) {
  const slug = basename(fileName, ".md");
  const markdown = readFileSync(join(postsDir, fileName), "utf8").trim();
  const heading = markdown.match(/^#\s+(.+)$/m);
  const title = heading ? heading[1].trim() : slug;

  blocks.push({
    type: "post",
    id: slug,
    slug,
    label: {
      fr: title,
      en: title
    },
    text: {
      fr: markdown,
      en: ""
    }
  });
}

if (!blocks.some((block) => block.type === "experience")) {
  throw new Error("Aucune expérience dans le corpus.");
}

const output = {
  generatedFrom: [
    "src/assets/data/about.json",
    "src/assets/data/experiences.json",
    "posts/*.md"
  ],
  blocks
};

const destination = join(root, "supabase/functions/portfolio-chat/knowledge.json");
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Corpus écrit : ${blocks.length} blocs → ${destination}`);
