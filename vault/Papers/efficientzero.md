---
title: "Mastering Atari Games with Limited Data (EfficientZero)"
type: paper
paradigm: "planning-mcts"
year: 2021
authors: ["Ye", "Liu", "Kurutach", "Abbeel", "Gao"]
venue: "NeurIPS 2021"
tags: ["sample-efficiency", "mcts", "rl", "atari-100k"]
arxiv: "https://arxiv.org/abs/2111.00210"
code: "https://github.com/YeWR/EfficientZero"
importance: 5
---

# Mastering Atari Games with Limited Data (EfficientZero)

> Makes MuZero dramatically more sample-efficient, becoming the first method to exceed median human performance on Atari with only two hours of gameplay.

Adds three components to MuZero: a self-supervised consistency loss (SimSiam-style) that forces the learned dynamics to match the representation of the actually observed next state, an end-to-end prediction of the value prefix to handle aliasing in the reward horizon, and an off-policy correction that adjusts stale reanalyzed targets. Together these let the learned model train reliably from tiny amounts of data, setting a new bar for data-efficient RL on Atari 100k.

**Benchmarks:** Atari 100k, DeepMind Control (state)
**Headline result:** 194% median human-normalized score on Atari 100k, first to surpass median human with ~2 hours of data.

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[muzero]]
- **Extended by:** [[efficientzero-v2]]
- **Related:** [[efficientzero-v2]], [[dreamerv2]], [[sampled-muzero]]
- **Referenced in:** [[sample-efficiency-frontier]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
