import rawData from "@/content/graph.json";
import {
  paradigmColor,
  CONCEPT_COLOR,
  QUESTION_COLOR,
  PARADIGM_META,
} from "@/lib/paradigms";
import type {
  RawGraph,
  Paper,
  Note,
  Paradigm,
  GraphNode,
  GraphEdge,
  HealthReport,
} from "@/lib/types";

const raw = rawData as unknown as RawGraph;

// ── Paradigms (merge palette in) ──────────────────────────────────────────────
export const paradigms: Paradigm[] = raw.paradigms.map((p) => ({
  ...p,
  color: paradigmColor(p.id),
}));

export const papers: Paper[] = raw.papers;
export const concepts: Note[] = raw.concepts;
export const questions: Note[] = raw.questions;
export const home: Note = raw.home;
export const meta = raw.meta;

// Paradigms are addressable as synthetic notes so the home map-of-content and
// any [[paradigm-id]] wikilink resolves to a "paradigm view" (blurb + members).
export const paradigmNotes: Note[] = paradigms.map((p) => ({
  id: p.id,
  kind: "paradigm",
  title: p.name,
  tags: ["#paradigm"],
  body: p.blurb,
  links: raw.papers.filter((x) => x.paradigm === p.id).map((x) => x.id),
}));

export const paradigmIds = new Set(paradigms.map((p) => p.id));

// ── Node table (papers + concepts + questions; home is not a graph node) ──────
function paperSize(p: Paper): number {
  return 11 + (p.importance ?? 3) * 2.6;
}

export const nodes: GraphNode[] = [
  ...papers.map<GraphNode>((p) => ({
    id: p.id,
    kind: "paper",
    title: p.title,
    paradigm: p.paradigm,
    color: paradigmColor(p.paradigm),
    size: paperSize(p),
    year: p.year,
    paper: p,
  })),
  ...concepts.map<GraphNode>((c) => ({
    id: c.id,
    kind: "concept",
    title: c.title,
    color: CONCEPT_COLOR,
    size: 15,
    note: c,
  })),
  ...questions.map<GraphNode>((q) => ({
    id: q.id,
    kind: "question",
    title: q.title,
    color: QUESTION_COLOR,
    size: 11,
    note: q,
  })),
];

export const nodeById = new Map<string, GraphNode>(nodes.map((n) => [n.id, n]));

/** Any addressable note, including home, for the detail panel. */
export const noteById = new Map<string, Paper | Note>([
  ...papers.map((p) => [p.id, p] as [string, Paper]),
  ...concepts.map((c) => [c.id, c] as [string, Note]),
  ...questions.map((q) => [q.id, q] as [string, Note]),
  ...paradigmNotes.map((p) => [p.id, p] as [string, Note]),
  [home.id, home] as [string, Note],
]);

export function titleOf(id: string): string {
  return noteById.get(id)?.title ?? id;
}

// ── Edges ─────────────────────────────────────────────────────────────────────
function key(a: string, b: string) {
  return a < b ? `${a}|${b}` : `${b}|${a}`;
}

function buildEdges(): GraphEdge[] {
  const out: GraphEdge[] = [];
  const seen = new Set<string>();
  const add = (source: string, target: string, type: GraphEdge["type"]) => {
    if (source === target) return;
    if (!nodeById.has(source) || !nodeById.has(target)) return;
    const k = `${type}:${key(source, target)}`;
    if (seen.has(k)) return;
    seen.add(k);
    out.push({ id: `${type}-${source}-${target}`, source, target, type });
  };

  // lineage: predecessor → paper
  for (const p of papers) {
    for (const b of p.buildsOn) add(b, p.id, "builds-on");
  }
  // concept / question wikilinks → target
  for (const n of [...concepts, ...questions]) {
    for (const l of n.links) add(n.id, l, "concept");
  }
  // derived (off by default in the UI): shared authors & shared benchmarks
  for (let i = 0; i < papers.length; i++) {
    for (let j = i + 1; j < papers.length; j++) {
      const a = papers[i];
      const b = papers[j];
      if (a.authors.some((x) => x !== "et al." && b.authors.includes(x)))
        add(a.id, b.id, "shares-author");
      const ba = a.benchmarks ?? [];
      const bb = b.benchmarks ?? [];
      if (ba.some((x) => bb.includes(x))) add(a.id, b.id, "same-benchmark");
    }
  }
  return out;
}

export const edges: GraphEdge[] = buildEdges();

// ── Adjacency + backlinks ─────────────────────────────────────────────────────
export interface Adjacency {
  out: Set<string>;
  in: Set<string>;
}

export const adjacency = new Map<string, Adjacency>();
for (const n of nodes) adjacency.set(n.id, { out: new Set(), in: new Set() });
for (const e of edges) {
  if (e.type === "shares-author" || e.type === "same-benchmark") continue; // structural only
  adjacency.get(e.source)?.out.add(e.target);
  adjacency.get(e.target)?.in.add(e.source);
}

/** Direct neighbors (in + out, structural edges only) plus the node itself. */
export function neighborhood(id: string): Set<string> {
  const set = new Set<string>([id]);
  const adj = adjacency.get(id);
  if (adj) {
    adj.out.forEach((x) => set.add(x));
    adj.in.forEach((x) => set.add(x));
  }
  return set;
}

export function outgoing(id: string): string[] {
  return [...(adjacency.get(id)?.out ?? [])];
}
export function incoming(id: string): string[] {
  return [...(adjacency.get(id)?.in ?? [])];
}

// ── Health report (the "linting" layer) ───────────────────────────────────────
export function healthReport(): HealthReport {
  const degree = (id: string) => {
    const a = adjacency.get(id);
    return a ? a.in.size + a.out.size : 0;
  };
  const orphans = nodes.filter((n) => degree(n.id) === 0).map((n) => n.id);
  const perParadigm = PARADIGM_META.map((p) => ({
    id: p.id,
    count: papers.filter((x) => x.paradigm === p.id).length,
  }));
  const years = papers.map((p) => p.year);
  const topHubs = [...nodes]
    .map((n) => ({ id: n.id, title: n.title, degree: degree(n.id) }))
    .sort((a, b) => b.degree - a.degree)
    .slice(0, 6);
  const untagged = nodes.filter(
    (n) => (n.paper?.tags ?? n.note?.tags ?? []).length === 0
  ).length;
  return {
    papers: papers.length,
    concepts: concepts.length,
    questions: questions.length,
    links: edges.filter(
      (e) => e.type === "builds-on" || e.type === "concept"
    ).length,
    orphans,
    perParadigm,
    yearSpan: [Math.min(...years), Math.max(...years)],
    topHubs,
    untagged,
  };
}
