// The 8 research "lobes". Colors are a harmonious categorical wheel tuned to
// glow on a near-black canvas (each ≥3:1 against the background).

export interface ParadigmMeta {
  id: string;
  short: string;
  color: string;
  glow: string;
}

// A muted, scholarly categorical palette — desaturated jewel/earth tones that
// stay legible on tinted ink without the neon "AI dark-mode" look. Glow is used
// sparingly (hover/selection only), so it's kept subtle.
export const PARADIGM_META: ParadigmMeta[] = [
  { id: "foundations-theory", short: "Foundations", color: "#8AA6CE", glow: "rgba(138,166,206,0.35)" },
  { id: "latent-imagination", short: "Latent Imagination", color: "#5FA8A2", glow: "rgba(95,168,162,0.35)" },
  { id: "planning-mcts", short: "Planning", color: "#C6A15B", glow: "rgba(198,161,91,0.32)" },
  { id: "autoregressive-wm", short: "Autoregressive", color: "#9E94CB", glow: "rgba(158,148,203,0.35)" },
  { id: "video-diffusion-wm", short: "Video / Generative", color: "#C58AA8", glow: "rgba(197,138,168,0.35)" },
  { id: "jepa", short: "JEPA", color: "#84B08C", glow: "rgba(132,176,140,0.32)" },
  { id: "embodied-agents", short: "Embodied", color: "#C98D6C", glow: "rgba(201,141,108,0.32)" },
  { id: "benchmarks-eval", short: "Benchmarks", color: "#AEA96C", glow: "rgba(174,169,108,0.3)" },
];

// Vertical order used for the structured timeline swim-lanes.
export const PARADIGM_ORDER: string[] = PARADIGM_META.map((p) => p.id);

const byId = new Map(PARADIGM_META.map((p) => [p.id, p]));

export const CONCEPT_COLOR = "#C7CDD6"; // soft slate — ideas / hubs
export const QUESTION_COLOR = "#D89A6A"; // muted amber — open / unresolved

export function paradigmColor(id?: string): string {
  if (!id) return CONCEPT_COLOR;
  return byId.get(id)?.color ?? CONCEPT_COLOR;
}

export function paradigmGlow(id?: string): string {
  if (!id) return "rgba(203,213,225,0.4)";
  return byId.get(id)?.glow ?? "rgba(203,213,225,0.4)";
}

export function paradigmShort(id?: string): string {
  if (!id) return "";
  return byId.get(id)?.short ?? id;
}
