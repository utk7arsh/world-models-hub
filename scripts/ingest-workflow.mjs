#!/usr/bin/env node
/**
 * Pull the verified dataset out of the engram-ingest workflow journal and write
 * it into content/graph.json (the app's canonical store).
 *
 *   node scripts/ingest-workflow.mjs <path-to-journal.jsonl>
 *
 * Picks the LAST journal result shaped like a full dataset (paradigms + papers +
 * home) — i.e. the output of the adversarial Verify pass.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const journalPath = process.argv[2];
if (!journalPath) {
  console.error("usage: node scripts/ingest-workflow.mjs <journal.jsonl>");
  process.exit(1);
}

const lines = readFileSync(journalPath, "utf8").split("\n").filter(Boolean);
let dataset = null;
for (const line of lines) {
  let obj;
  try {
    obj = JSON.parse(line);
  } catch {
    continue;
  }
  const r = obj?.result;
  if (r && Array.isArray(r.paradigms) && Array.isArray(r.papers) && r.home) {
    dataset = r; // keep last → the verified dataset
  }
}
if (!dataset) {
  console.error("No dataset-shaped result found in journal.");
  process.exit(1);
}

const arr = (x) => (Array.isArray(x) ? x : []);
const clean = (s) => (typeof s === "string" ? s : "");

const papers = arr(dataset.papers).map((p) => ({
  id: p.id,
  title: clean(p.title),
  authors: arr(p.authors),
  year: Number(p.year) || 0,
  ...(p.venue ? { venue: clean(p.venue) } : {}),
  paradigm: clean(p.paradigm),
  tags: arr(p.tags),
  tldr: clean(p.tldr),
  contribution: clean(p.contribution),
  ...(arr(p.benchmarks).length ? { benchmarks: arr(p.benchmarks) } : {}),
  ...(p.metrics ? { metrics: clean(p.metrics) } : {}),
  ...(p.links && typeof p.links === "object" ? { links: p.links } : {}),
  buildsOn: arr(p.buildsOn),
  related: arr(p.related),
  ...(p.importance != null ? { importance: Number(p.importance) } : {}),
}));

const note = (n, kind) => ({
  id: n.id,
  kind,
  title: clean(n.title),
  tags: arr(n.tags),
  body: clean(n.body),
  links: arr(n.links),
});

const graph = {
  meta: {
    name: "Engram",
    tagline: "A second brain for world models",
    sources: [],
    generated: new Date().toISOString().slice(0, 10),
  },
  paradigms: arr(dataset.paradigms).map((p) => ({
    id: p.id,
    name: clean(p.name),
    blurb: clean(p.blurb),
  })),
  papers,
  concepts: arr(dataset.concepts).map((c) => note(c, "concept")),
  questions: arr(dataset.questions).map((q) => note(q, "question")),
  home: { ...note(dataset.home, "home") },
};

writeFileSync(
  join(root, "content/graph.json"),
  JSON.stringify(graph, null, 2) + "\n",
  "utf8"
);
console.log(
  `✓ Wrote content/graph.json — ${graph.papers.length} papers, ${graph.concepts.length} concepts, ${graph.questions.length} questions, ${graph.paradigms.length} paradigms`
);
