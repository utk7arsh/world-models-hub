---
title: "Behaviour Suite for Reinforcement Learning (bsuite)"
type: paper
paradigm: "benchmarks-eval"
year: 2020
authors: ["Osband", "Doron", "Hessel", "Aslanides", "Sezener", "et al."]
venue: "ICLR 2020"
tags: ["evaluation", "methodology", "diagnostics", "rl", "benchmark"]
arxiv: "https://arxiv.org/abs/1908.03568"
code: "https://github.com/google-deepmind/bsuite"
importance: 3
---

# Behaviour Suite for Reinforcement Learning (bsuite)

> A curated collection of targeted diagnostic experiments that isolate specific RL capabilities such as memory, exploration, and credit assignment rather than reporting one aggregate score.

bsuite is a set of small, carefully designed environments where each experiment probes one core RL challenge (e.g. deep exploration, long-term memory, robustness to noise or reward scale) in isolation. It defines automated scoring and standardized reports so agents can be characterized along interpretable capability axes rather than a single headline number. By emphasizing controlled, reproducible diagnosis over leaderboard chasing, it shaped how the field thinks about what benchmarks should actually measure in world-model and RL agents.

**Benchmarks:** bsuite
**Headline result:** Per-capability radar scores across memory, exploration, credit-assignment, scale, noise.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Related:** [[revisiting-ale]], [[crafter]]
- **Referenced in:** [[benchmarks-shape-progress]], [[q-benchmarks-overfit]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
