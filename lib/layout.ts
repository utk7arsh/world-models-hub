import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCollide,
  forceX,
  forceY,
  type SimulationNodeDatum,
} from "d3-force";
import { PARADIGM_ORDER, paradigmShort, paradigmColor } from "@/lib/paradigms";
import type { GraphNode, GraphEdge } from "@/lib/types";

export type PosMap = Record<string, { x: number; y: number }>;

// Fixed virtual canvas — ReactFlow's fitView scales it to any viewport, so
// positions are viewport-independent and computed exactly once.
export const CANVAS_W = 2260;
export const CANVAS_H = 1320;

const PAD_X = 210;
const PAD_TOP = 118;
const PAD_BOT = 118;
const V_GAP = 60;

// Ordinal year scale: each distinct year gets an evenly-spaced column, so a few
// early outliers (1990, 1999) don't crush all the modern work into the far right.
function yearScale(nodes: GraphNode[]) {
  const years = [
    ...new Set(
      nodes
        .filter((n) => n.kind === "paper" && n.year != null)
        .map((n) => n.year as number)
    ),
  ].sort((a, b) => a - b);
  const idx = new Map(years.map((y, i) => [y, i]));
  const n = years.length;
  const xOf = (y: number) =>
    PAD_X + ((idx.get(y) ?? 0) / Math.max(1, n - 1)) * (CANVAS_W - 2 * PAD_X);
  return { years, xOf };
}

// ── Structured: timeline (x = year) × paradigm swim-lanes (y) ─────────────────
export function structuredLayout(
  nodes: GraphNode[],
  _edges: GraphEdge[]
): PosMap {
  const pos: PosMap = {};
  const papers = nodes.filter((n) => n.kind === "paper" && n.year != null);
  const { xOf } = yearScale(nodes);

  const laneCount = PARADIGM_ORDER.length;
  const laneH = (CANVAS_H - PAD_TOP - PAD_BOT) / laneCount;
  const laneCenter = (i: number) => PAD_TOP + i * laneH + laneH / 2;

  PARADIGM_ORDER.forEach((pid, li) => {
    const inLane = papers
      .filter((n) => n.paradigm === pid)
      .sort((a, b) => (a.year as number) - (b.year as number));
    // bucket by year to stack same-year papers vertically
    const buckets = new Map<number, GraphNode[]>();
    for (const n of inLane) {
      const arr = buckets.get(n.year as number) ?? [];
      arr.push(n);
      buckets.set(n.year as number, arr);
    }
    for (const [yr, arr] of buckets) {
      arr.forEach((n, k) => {
        pos[n.id] = {
          x: xOf(yr),
          y: laneCenter(li) + (k - (arr.length - 1) / 2) * V_GAP,
        };
      });
    }
  });

  // concepts & questions sit at the centroid of what they link to
  const notes = nodes.filter((n) => n.kind !== "paper");
  for (const n of notes) {
    const links = (n.note?.links ?? []).filter((l) => pos[l]);
    if (links.length) {
      const cx = links.reduce((s, l) => s + pos[l].x, 0) / links.length;
      const cy = links.reduce((s, l) => s + pos[l].y, 0) / links.length;
      pos[n.id] = { x: cx, y: cy };
    } else {
      pos[n.id] = { x: CANVAS_W / 2, y: CANVAS_H / 2 };
    }
  }
  // gentle de-overlap for notes landing on identical centroids
  const placed: { id: string; x: number; y: number }[] = [];
  for (const n of notes) {
    let p = pos[n.id];
    let guard = 0;
    while (
      placed.some((q) => Math.hypot(q.x - p.x, q.y - p.y) < 34) &&
      guard++ < 40
    ) {
      p = { x: p.x + 26, y: p.y + 20 };
    }
    pos[n.id] = p;
    placed.push({ id: n.id, ...p });
  }
  return pos;
}

// ── Neuron: force-directed lobes around a connected core ──────────────────────
interface SimNode extends SimulationNodeDatum {
  id: string;
  kind: string;
  paradigm?: string;
  size: number;
}

export function neuronLayout(nodes: GraphNode[], edges: GraphEdge[]): PosMap {
  const cx = CANVAS_W / 2;
  const cy = CANVAS_H / 2;
  const R = Math.min(CANVAS_W, CANVAS_H) * 0.4;

  const anchorOf = (pid?: string): { x: number; y: number } => {
    if (!pid) return { x: cx, y: cy };
    const i = PARADIGM_ORDER.indexOf(pid);
    if (i < 0) return { x: cx, y: cy };
    const theta = (i / PARADIGM_ORDER.length) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + R * Math.cos(theta), y: cy + R * Math.sin(theta) };
  };

  const simNodes: SimNode[] = nodes.map((n) => {
    const a = anchorOf(n.paradigm);
    // seed near the paradigm anchor so lobes form deterministically-ish
    return {
      id: n.id,
      kind: n.kind,
      paradigm: n.paradigm,
      size: n.size,
      x: a.x + (hash(n.id) % 120) - 60,
      y: a.y + (hash(n.id + "y") % 120) - 60,
    };
  });
  const byId = new Map(simNodes.map((n) => [n.id, n]));

  const simLinks = edges
    .filter((e) => e.type === "builds-on" || e.type === "concept")
    .filter((e) => byId.has(e.source) && byId.has(e.target))
    .map((e) => ({ source: e.source, target: e.target }));

  const sim = forceSimulation<SimNode>(simNodes)
    .force("charge", forceManyBody<SimNode>().strength(-280))
    .force(
      "link",
      forceLink<SimNode, { source: string; target: string }>(simLinks)
        .id((d) => d.id)
        .distance(104)
        .strength(0.14)
    )
    .force(
      "collide",
      forceCollide<SimNode>().radius((d) => d.size + 20)
    )
    .force(
      "x",
      forceX<SimNode>((d) => anchorOf(d.paradigm).x).strength((d) =>
        d.kind === "paper" ? 0.09 : 0.02
      )
    )
    .force(
      "y",
      forceY<SimNode>((d) => anchorOf(d.paradigm).y).strength((d) =>
        d.kind === "paper" ? 0.09 : 0.02
      )
    )
    .stop();

  const ticks = 420;
  for (let i = 0; i < ticks; i++) sim.tick();

  const pos: PosMap = {};
  for (const n of simNodes) pos[n.id] = { x: n.x ?? cx, y: n.y ?? cy };
  return pos;
}

// deterministic small hash so seeds don't rely on Math.random ordering
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** Paradigm anchor positions (for drawing lobe labels in neuron mode). */
export function paradigmAnchors(): Record<string, { x: number; y: number }> {
  const cx = CANVAS_W / 2;
  const cy = CANVAS_H / 2;
  const R = Math.min(CANVAS_W, CANVAS_H) * 0.36;
  const out: Record<string, { x: number; y: number }> = {};
  PARADIGM_ORDER.forEach((pid, i) => {
    const theta = (i / PARADIGM_ORDER.length) * Math.PI * 2 - Math.PI / 2;
    out[pid] = { x: cx + R * Math.cos(theta), y: cy + R * Math.sin(theta) };
  });
  return out;
}

// ── Annotations (year axis + lane / lobe labels, rendered as inert nodes) ─────
export interface Annotation {
  id: string;
  x: number;
  y: number;
  kind: "year" | "lane" | "lobe";
  text: string;
  color?: string;
}

export function structuredAnnotations(nodes: GraphNode[]): Annotation[] {
  const papers = nodes.filter((n) => n.kind === "paper" && n.year != null);
  if (papers.length === 0) return [];
  const { years, xOf } = yearScale(nodes);
  const laneH = (CANVAS_H - PAD_TOP - PAD_BOT) / PARADIGM_ORDER.length;

  const out: Annotation[] = [];
  for (const y of years) {
    out.push({ id: `year-${y}`, x: xOf(y), y: CANVAS_H - 52, kind: "year", text: String(y) });
  }
  PARADIGM_ORDER.forEach((pid, i) => {
    out.push({
      id: `lane-${pid}`,
      x: PAD_X - 92,
      y: PAD_TOP + i * laneH + laneH / 2,
      kind: "lane",
      text: paradigmShort(pid),
      color: paradigmColor(pid),
    });
  });
  return out;
}

export function neuronAnnotations(): Annotation[] {
  const cx = CANVAS_W / 2;
  const cy = CANVAS_H / 2;
  const anchors = paradigmAnchors();
  return PARADIGM_ORDER.map((pid) => {
    const a = anchors[pid];
    // push label outward from center so it sits beyond the lobe
    return {
      id: `lobe-${pid}`,
      x: cx + (a.x - cx) * 1.32,
      y: cy + (a.y - cy) * 1.34,
      kind: "lobe" as const,
      text: paradigmShort(pid),
      color: paradigmColor(pid),
    };
  });
}
