---
title: "Benchmarking the Spectrum of Agent Capabilities (Crafter)"
type: paper
paradigm: "benchmarks-eval"
year: 2022
authors: ["Hafner"]
venue: "ICLR 2022"
tags: ["open-ended", "benchmark", "exploration", "sample-efficiency", "evaluation"]
arxiv: "https://arxiv.org/abs/2109.06780"
code: "https://github.com/danijar/crafter"
project: "https://danijar.com/project/crafter/"
importance: 4
---

# Benchmarking the Spectrum of Agent Capabilities (Crafter)

> A fast, open-ended Minecraft-like survival game that scores agents on a spectrum of 22 achievements rather than a single reward, probing broad capabilities under tight sample budgets.

Crafter is a lightweight 2D survival environment with procedurally generated worlds where progress requires exploration, tool crafting, resource gathering, and combat over long horizons. Instead of one scalar return it defines 22 semantically distinct achievements and reports a geometric-mean success score, so an agent must demonstrate many competencies rather than exploit a single reward loop. It is deliberately fast and evaluated under a small interaction budget, making it a compact stress test for the deep exploration and world-modeling abilities that Atari and DMControl do not isolate.

**Benchmarks:** Crafter
**Headline result:** Crafter score = geometric mean of 22 achievement success rates within a 1M-step budget.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Builds on:** [[procgen]]
- **Extended by:** [[craftax]]
- **Related:** [[craftax]], [[procgen]], [[dreamerv2]]
- **Referenced in:** [[benchmarks-shape-progress]], [[q-benchmarks-overfit]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
