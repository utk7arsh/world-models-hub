---
title: "Mastering Diverse Domains through World Models (DreamerV3)"
type: paper
paradigm: "latent-imagination"
year: 2023
authors: ["Hafner", "Pasukonis", "Ba", "Lillicrap"]
venue: "Nature 2025"
tags: ["latent", "rl", "general", "robust", "rssm"]
arxiv: "https://arxiv.org/abs/2301.04104"
code: "https://github.com/danijar/dreamerv3"
project: "https://danijar.com/project/dreamerv3/"
importance: 5
---

# Mastering Diverse Domains through World Models (DreamerV3)

> A single set of hyperparameters makes the Dreamer recipe work robustly across 150+ tasks, including collecting diamonds in Minecraft from scratch.

Introduces robustness techniques, most notably symlog prediction of rewards and values plus twohot discretized regression, so the same network handles wildly different reward and observation scales without per-task tuning. It further stabilizes learning with free-bits KL balancing, normalized returns, and careful architecture scaling. This turned latent-imagination RL into a general, out-of-the-box method and was the first to obtain diamonds in Minecraft without human data or curricula.

**Benchmarks:** Atari 100k, DMControl, Crafter, Minecraft (Diamond), DMLab
**Headline result:** First to mine diamonds in Minecraft from scratch; strong results across 150+ tasks with fixed hyperparameters.

## Lineage
- **Paradigm:** Latent Imagination (RSSM)
- **Builds on:** [[dreamerv2]]
- **Extended by:** [[r2i]], [[diamond]], [[pwm]]
- **Related:** [[daydreamer]]
- **Referenced in:** [[learning-in-imagination]], [[sample-efficiency-frontier]], [[q-explicit-vs-emergent]], [[q-sequence-backbone]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
