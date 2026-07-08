# Engram

**A navigable knowledge graph for world-models research.**

Engram is a small web app plus a version-controlled graph of papers, concepts, and open questions. The graph lives in `content/graph.json`; the UI renders it as something you can explore by time, paradigm, and lineage — not scroll through as a flat list.

The name comes from *engram*: a memory stored in connections, not isolated facts. Here, the links (`builds-on`, concept hubs, open questions) carry most of the meaning.

## The problem it solves

World-models research has real structure that reading lists hide:

- **Lineage** — PlaNet → Dreamer → DreamerV3; MuZero → EfficientZero
- **Parallel bets** — latent RSSM models, token autoregression, JEPA, video diffusion
- **Unsettled tensions** — pixels vs representations, planning vs amortized policy

A PDF folder or markdown list does not show any of that. Engram makes the structure the interface.

## What's in the graph

| | Count |
|---|---|
| Papers | 57 |
| Research paradigms | 8 |
| Concept hubs | 12 |
| Open questions | 7 |

Paradigms include latent imagination (Dreamer family), planning & value-equivalence (MuZero), autoregressive/token models, JEPA, video diffusion, embodied agents, foundations, and benchmarks.

## Two layouts

**Timeline** — Papers on a year axis, grouped into paradigm swim-lanes. `builds-on` edges show lineage left to right. Good for seeing when ideas appeared and what they descended from.

**Neuron** — Force-directed layout with paradigms as clusters. Good for browsing neighborhoods and following concept links.

Both views read the same `graph.json`. Switching morphs node positions; selection, search, and the note panel stay in sync.

## How the repo is organized

```
content/graph.json     ← source of truth (papers, concepts, questions)
vault/                 ← generated Obsidian mirror (npm run export:vault)
prompts/ + SCHEMA.md   ← rules + prompt pack for growing the graph with an LLM
app/                   ← Next.js UI
```

**Layer 1 — Sources.** Papers you care about (PDFs, arXiv links). Human-curated, treated as immutable evidence.

**Layer 2 — Graph.** `content/graph.json`: summaries in your own words, typed links, paradigm tags. This is what the app renders.

**Layer 3 — Schema.** `SCHEMA.md` and `prompts/` define how an LLM should ingest papers, write concept notes, find connections, and lint the graph. The maintenance is *assisted*, not automatic — you still edit and review.

Inspired by Obsidian-style wikilinks and [Karpathy's idea of an LLM-maintained wiki](https://x.com/karpathy/status/1907503313849118813), but the contract is explicit so the model does not improvise structure.

## UI

- Note panel with markdown, `[[wikilinks]]`, backlinks, arXiv/code links
- Search with highlighting; filters by paradigm, note type, edge type
- Focus mode on hover/select
- Health panel: orphans, link coverage, per-paradigm stats
- Dark-first, responsive, respects `prefers-reduced-motion`

## Getting started

```bash
git clone <your-repo-url>
cd world-models-brain
npm install
npm run dev    # http://localhost:3000
```

After editing `content/graph.json`, regenerate the Obsidian vault:

```bash
npm run export:vault
```

## Growing the graph

1. **Ingest a paper** — `prompts/01-ingest-paper.md` → add to `papers[]`
2. **Write a concept hub** — `prompts/02-concept-note.md`
3. **Connect two notes** — `prompts/03-connection-finder.md`
4. **Lint** — `prompts/04-health-check.md`

See [SCHEMA.md](./SCHEMA.md) for ids, linking rules, and editorial conventions.

## Stack

Next.js (App Router) · React 19 · [@xyflow/react](https://reactflow.dev) · d3-force · react-markdown · plain CSS.

No backend. The graph is a static JSON file you can diff, review, and version like any other source file.
