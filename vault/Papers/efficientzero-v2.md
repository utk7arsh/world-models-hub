---
title: "EfficientZero V2: Mastering Discrete and Continuous Control with Limited Data"
type: paper
paradigm: "planning-mcts"
year: 2024
authors: ["Wang", "Ye", "Liu", "Gao", "et al."]
venue: "ICML 2024"
tags: ["sample-efficiency", "mcts", "continuous-control", "rl"]
arxiv: "https://arxiv.org/abs/2403.00564"
code: "https://github.com/Shengjiewang-Jason/EfficientZeroV2"
importance: 4
---

# EfficientZero V2: Mastering Discrete and Continuous Control with Limited Data

> A unified, sample-efficient successor to EfficientZero that masters both discrete and continuous control from limited data with a single algorithm.

Combines EfficientZero's sample-efficiency tricks with sampled-action search so the same agent handles discrete and continuous action spaces. It introduces search-based value estimation with Gumbel-style action sampling and a mixed value target that blends search results with learned value estimates for stability under scarce data. It outperforms prior data-efficient methods, including DreamerV3 and the original EfficientZero, across a broad suite of low-data benchmarks.

**Benchmarks:** Atari 100k, DeepMind Control (Proprio & Vision), DMControl
**Headline result:** State-of-the-art on the majority of 66 tasks under limited-data settings, surpassing DreamerV3.

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[efficientzero]], [[sampled-muzero]]
- **Related:** [[tdmpc2]], [[dreamerv3]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
