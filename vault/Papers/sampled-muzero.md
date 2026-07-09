---
title: "Learning and Planning in Complex Action Spaces (Sampled MuZero)"
type: paper
paradigm: "planning-mcts"
year: 2021
authors: ["Hubert", "Schrittwieser", "Antonoglou", "Barekatain", "Schmitt", "Silver"]
venue: "ICML 2021"
tags: ["mcts", "continuous-control", "rl", "planning"]
arxiv: "https://arxiv.org/abs/2104.06303"
importance: 4
---

# Learning and Planning in Complex Action Spaces (Sampled MuZero)

> Extends MuZero to large and continuous action spaces by planning and learning over a sampled subset of actions instead of enumerating them all.

Introduces a framework in which policy improvement and MCTS are computed using only a small sample of actions drawn from a proposal distribution, with importance-weighting to keep estimates unbiased. This makes tree search tractable in high-dimensional discrete or continuous action spaces where full enumeration is impossible, yielding a single MuZero variant that scales from Atari to continuous control and complex combinatorial actions.

**Benchmarks:** Atari, DeepMind Control Suite, Go

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[muzero]]
- **Extended by:** [[efficientzero-v2]]
- **Related:** [[stochastic-muzero]], [[efficientzero-v2]], [[tdmpc]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
