#!/usr/bin/env node
/**
 * Compile content/graph.json → an Obsidian-openable markdown vault under vault/.
 *
 * This mirrors Karpathy's "compile raw sources into a .md wiki" idea: graph.json
 * is the structured store the web app reads; vault/ is the portable, human- and
 * LLM-editable mirror you can open directly in Obsidian (backlinks + graph view
 * work out of the box because every note links others with [[id]]).
 *
 *   npm run export:vault
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(root, "content/graph.json"), "utf8"));

const VAULT = join(root, "vault");
rmSync(VAULT, { recursive: true, force: true });
for (const d of ["Papers", "Concepts", "Questions", "Paradigms"]) {
  mkdirSync(join(VAULT, d), { recursive: true });
}

const paradigmName = new Map(data.paradigms.map((p) => [p.id, p.name]));

// ── helpers ───────────────────────────────────────────────────────────────────
const yamlStr = (s) => JSON.stringify(String(s ?? ""));
const yamlList = (a) => `[${(a ?? []).map((x) => JSON.stringify(String(x))).join(", ")}]`;
const wl = (ids) => (ids ?? []).map((id) => `[[${id}]]`).join(", ");
const footer = "\n\n---\n*[[Home]] · maintained by an LLM per [[SCHEMA]]*\n";

function write(sub, id, body) {
  writeFileSync(join(VAULT, sub, `${id}.md`), body, "utf8");
}

// ── papers ──────────────────────────────────────────────────────────────────
const extendedBy = (id) => data.papers.filter((p) => (p.buildsOn ?? []).includes(id)).map((p) => p.id);
const backlinks = (id) =>
  [...data.concepts, ...data.questions, data.home]
    .filter((n) => (n.links ?? []).includes(id))
    .map((n) => n.id);

for (const p of data.papers) {
  const fm = [
    "---",
    `title: ${yamlStr(p.title)}`,
    "type: paper",
    `paradigm: ${yamlStr(p.paradigm)}`,
    `year: ${p.year}`,
    `authors: ${yamlList(p.authors)}`,
    p.venue ? `venue: ${yamlStr(p.venue)}` : null,
    `tags: ${yamlList((p.tags ?? []).map((t) => t.replace(/^#/, "")))}`,
    p.links?.arxiv ? `arxiv: ${yamlStr(p.links.arxiv)}` : null,
    p.links?.code ? `code: ${yamlStr(p.links.code)}` : null,
    p.links?.project ? `project: ${yamlStr(p.links.project)}` : null,
    p.importance != null ? `importance: ${p.importance}` : null,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  const body = [
    fm,
    "",
    `# ${p.title}`,
    "",
    `> ${p.tldr}`,
    "",
    p.contribution,
    "",
    p.benchmarks?.length ? `**Benchmarks:** ${p.benchmarks.join(", ")}` : null,
    p.metrics ? `**Headline result:** ${p.metrics}` : null,
    "",
    "## Lineage",
    `- **Paradigm:** ${paradigmName.get(p.paradigm) ?? p.paradigm}`,
    p.buildsOn?.length ? `- **Builds on:** ${wl(p.buildsOn)}` : null,
    extendedBy(p.id).length ? `- **Extended by:** ${wl(extendedBy(p.id))}` : null,
    p.related?.length ? `- **Related:** ${wl(p.related)}` : null,
    backlinks(p.id).length ? `- **Referenced in:** ${wl(backlinks(p.id))}` : null,
    footer,
  ]
    .filter((x) => x !== null)
    .join("\n");

  write("Papers", p.id, body);
}

// ── concepts & questions ──────────────────────────────────────────────────────
function noteFile(sub, n, typeLabel) {
  const fm = [
    "---",
    `title: ${yamlStr(n.title)}`,
    `type: ${typeLabel}`,
    `tags: ${yamlList((n.tags ?? []).map((t) => t.replace(/^#/, "")))}`,
    "---",
  ].join("\n");
  const back = backlinks(n.id);
  const body = [
    fm,
    "",
    `# ${n.title}`,
    "",
    n.body,
    "",
    back.length ? `## Backlinks\n${back.map((b) => `- [[${b}]]`).join("\n")}` : null,
    footer,
  ]
    .filter((x) => x !== null)
    .join("\n");
  write(sub, n.id, body);
}

for (const c of data.concepts) noteFile("Concepts", c, "concept");
for (const q of data.questions) noteFile("Questions", q, "question");

// ── paradigm maps of content ──────────────────────────────────────────────────
for (const par of data.paradigms) {
  const list = data.papers
    .filter((p) => p.paradigm === par.id)
    .sort((a, b) => a.year - b.year);
  if (list.length === 0) continue;
  const body = [
    "---",
    `title: ${yamlStr(par.name)}`,
    "type: paradigm",
    "---",
    "",
    `# ${par.name}`,
    "",
    `> ${par.blurb}`,
    "",
    "## Papers",
    ...list.map((p) => `- [[${p.id}]] — *${p.year}* — ${p.tldr}`),
    footer,
  ].join("\n");
  write("Paradigms", par.id, body);
}

// ── home ──────────────────────────────────────────────────────────────────────
writeFileSync(
  join(VAULT, "Home.md"),
  ["---", `title: ${yamlStr(data.home.title)}`, "type: home", "---", "", `# ${data.home.title}`, "", data.home.body, "", "## Paradigms", ...data.paradigms.map((p) => `- [[${p.id}]]`), footer].join("\n"),
  "utf8"
);

const total =
  data.papers.length + data.concepts.length + data.questions.length + data.paradigms.length + 1;
console.log(`✓ Exported ${total} notes to vault/  (open the folder as an Obsidian vault)`);
