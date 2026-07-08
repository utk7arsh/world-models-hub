# Engram — Maintenance Schema

> This file is **Layer 3** of the system (see the README). It is the contract an
> LLM follows when it maintains the graph. Karpathy's insight: a schema is what
> turns a chatbot into an operator. Without it the model improvises; with it, it
> behaves like a junior researcher who knows the house style and filing system.

## The three layers

| Layer | What | Where | Who edits |
|-------|------|-------|-----------|
| **1 · Raw** | Papers, abstracts, PDFs | external / `raw/` | humans (immutable) |
| **2 · Wiki** | The compiled knowledge graph | `content/graph.json` → `vault/` | the LLM |
| **3 · Schema** | These rules + the prompt pack | `SCHEMA.md`, `prompts/` | humans |

The human curates sources and asks questions. The LLM does the clerical work:
summarize, link, revise, cite, lint. **You (the human) do the editorial work of
meaning; the model does the clerical work of knowledge.**

## The store

`content/graph.json` is the source of truth for the app. `vault/` is a generated
Obsidian mirror (`npm run export:vault`). Prefer editing `graph.json`; regenerate
the vault after.

## Node types

- **paper** (`papers[]`) — one published work. A *source note*.
- **concept** (`concepts[]`) — an evergreen idea that recurs across papers. The
  **hubs** of the graph. Title is a full-sentence claim.
- **question** (`questions[]`) — an unsettled research tension. Connects the
  papers/concepts on each side.
- **home** — the single map-of-content entry point.

## Rules

1. **Ids** are short, stable, kebab-case (`dreamerv3`, `v-jepa2`, `value-equivalence`).
   Never reuse or silently rename an id — other notes link to it.
2. **Own words only.** Never paste an abstract. If you can't restate it, you don't
   understand it yet.
3. **No orphans.** Every paper must connect via `buildsOn` (incoming or outgoing)
   or be referenced by ≥1 concept before it's considered filed.
4. **Titles are claims.** Concept titles assert something (`"MuZero shows you can
   plan without being given the rules"`), not label a topic (`"MuZero"`).
5. **Link before you file.** Every `[[wikilink]]` in a body must also appear in
   that note's `links` array, and must resolve to a real id.
6. **Never invent links.** Omit an arXiv/code URL rather than guess it.
7. **New concept vs. update:** if an idea already has a concept note, *extend* it
   and add a backlink — don't create a near-duplicate.
8. **Contradictions are logged, not buried.** When two papers disagree, create or
   update a `question` note that names both sides.
9. **Paradigm is primary.** A paper may touch several lobes; give it the single
   best `paradigm` and express the rest via `related`/concept links.

## Rituals

- **Ingest** a source → `prompts/01-ingest-paper.md`.
- **Distill** a recurring idea → `prompts/02-concept-note.md`.
- **Grow edges** between two notes → `prompts/03-connection-finder.md`.
- **Lint** the whole graph on a schedule → `prompts/04-health-check.md`.

Run the health check regularly. A knowledge base you don't trust is just another
archive; one that can inspect itself and propose its own repairs is infrastructure.
