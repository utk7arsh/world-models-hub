---
title: "Mastering Memory Tasks with World Models (Recall to Imagine)"
type: paper
paradigm: "autoregressive-wm"
year: 2024
authors: ["Samsami", "Zholus", "Rajendran", "Chandar"]
venue: "ICLR 2024"
tags: ["memory", "latent", "rl", "state-space", "long-horizon"]
arxiv: "https://arxiv.org/abs/2403.04253"
importance: 3
---

# Mastering Memory Tasks with World Models (Recall to Imagine)

> Augments DreamerV3's world model with structured state-space sequence models to master long-term memory and credit-assignment tasks.

Recall to Imagine (R2I) integrates S4-style structured state-space models into a DreamerV3 backbone, replacing the purely recurrent dynamics core with a sequence model capable of capturing very long temporal dependencies. This lets the agent remember distant observations during imagined rollouts, dramatically improving performance on memory-intensive benchmarks while keeping training fast and stable. It demonstrates that the choice of sequence model in the world model core is central to long-horizon reasoning.

**Benchmarks:** BSuite, POPGym, Memory Maze, Atari, DMControl

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[dreamerv3]]
- **Related:** [[iris]], [[twm]]
- **Referenced in:** [[rssm-latent-state]], [[q-sequence-backbone]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
