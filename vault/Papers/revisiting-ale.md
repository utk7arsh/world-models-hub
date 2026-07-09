---
title: "Revisiting the Arcade Learning Environment: Evaluation Protocols and Open Problems for General Agents"
type: paper
paradigm: "benchmarks-eval"
year: 2018
authors: ["Machado", "Bellemare", "Talvitie", "Veness", "Hausknecht", "Bowling"]
venue: "JAIR"
tags: ["atari", "evaluation", "methodology", "rl", "reproducibility"]
arxiv: "https://arxiv.org/abs/1709.06009"
code: "https://github.com/Farama-Foundation/Arcade-Learning-Environment"
importance: 4
---

# Revisiting the Arcade Learning Environment: Evaluation Protocols and Open Problems for General Agents

> Diagnosed how inconsistent evaluation choices made Atari results incomparable and proposed a standardized protocol (sticky actions, no game-specific tuning) still used today.

Shows that seemingly minor experimental choices, such as how episodes terminate, whether the agent sees flickering frames, and how determinism is handled, silently changed reported Atari scores and made cross-paper comparison unreliable. It introduces sticky actions as a simple, principled source of stochasticity so agents cannot exploit the emulator's determinism by memorizing open-loop action sequences. It formalizes reporting practices and highlights open challenges like hard exploration, establishing the evaluation methodology later sample-efficiency benchmarks inherit.

**Benchmarks:** Atari (ALE)
**Headline result:** Standardized sticky-action protocol with 25% action-repeat probability.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Builds on:** [[ale]]
- **Related:** [[ale]], [[simple-atari100k]], [[bsuite]]
- **Referenced in:** [[benchmarks-shape-progress]], [[q-benchmarks-overfit]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
