// ── Engram data model ────────────────────────────────────────────────────────
// The canonical vault lives in content/graph.json. These types describe it.
// A "node" in the graph is either a Paper (source note), a Concept (evergreen
// note / hub), or an open Question. Paradigms are the "lobes" of the brain.

export type ParadigmId =
  | "foundations-theory"
  | "latent-imagination"
  | "planning-mcts"
  | "autoregressive-wm"
  | "video-diffusion-wm"
  | "jepa"
  | "embodied-agents"
  | "benchmarks-eval";

export interface Paradigm {
  id: string;
  name: string;
  blurb: string;
  /** injected at load from the design palette */
  color: string;
}

export interface PaperLinks {
  arxiv?: string;
  code?: string;
  project?: string;
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue?: string;
  paradigm: string;
  tags: string[];
  /** one-line "why it matters" */
  tldr: string;
  /** 2–4 sentence key contribution, in plain words */
  contribution: string;
  benchmarks?: string[];
  metrics?: string;
  links?: PaperLinks;
  /** ids of direct predecessor papers (lineage) */
  buildsOn: string[];
  /** ids of closely related papers */
  related: string[];
  /** 1–5, drives node size */
  importance?: number;
}

export type NoteKind = "concept" | "question" | "home" | "paradigm";

export interface Note {
  id: string;
  kind: NoteKind;
  title: string;
  tags: string[];
  /** markdown body containing [[wikilinks]] */
  body: string;
  /** outgoing wikilink target ids */
  links: string[];
}

export interface RawGraph {
  meta: { name: string; tagline: string; sources: string[]; generated?: string };
  paradigms: { id: string; name: string; blurb: string }[];
  papers: Paper[];
  concepts: Note[];
  questions: Note[];
  home: Note;
}

// ── Derived (runtime) shapes ──────────────────────────────────────────────────

export type NodeKind = "paper" | "concept" | "question";
export type EdgeType = "builds-on" | "concept" | "shares-author" | "same-benchmark";

export interface GraphNode {
  id: string;
  kind: NodeKind;
  title: string;
  paradigm?: string;
  color: string;
  size: number;
  year?: number;
  paper?: Paper;
  note?: Note;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
}

export interface HealthReport {
  papers: number;
  concepts: number;
  questions: number;
  links: number;
  orphans: string[];
  perParadigm: { id: string; count: number }[];
  yearSpan: [number, number];
  topHubs: { id: string; title: string; degree: number }[];
  untagged: number;
}
