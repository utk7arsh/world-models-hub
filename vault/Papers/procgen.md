---
title: "Leveraging Procedural Generation to Benchmark Reinforcement Learning (Procgen)"
type: paper
paradigm: "benchmarks-eval"
year: 2020
authors: ["Cobbe", "Hesse", "Hilton", "Schulman"]
venue: "ICML 2020"
tags: ["generalization", "procedural", "benchmark", "rl", "evaluation"]
arxiv: "https://arxiv.org/abs/1912.01588"
code: "https://github.com/openai/procgen"
importance: 4
---

# Leveraging Procedural Generation to Benchmark Reinforcement Learning (Procgen)

> A suite of 16 procedurally generated arcade-style games designed to measure generalization by training and testing agents on distinct level distributions.

Procgen generates a fresh distribution of levels for each of its 16 games, so agents cannot succeed by memorizing specific layouts and must generalize across procedurally varied instances. It cleanly separates a train-on-N-levels / test-on-unseen-levels protocol, exposing the large generalization gap that plagued deep RL agents evaluated only on their training environments. Its fast, GPU-friendly implementation and controllable difficulty made it a widely used benchmark for studying generalization, an axis largely absent from fixed Atari and DMControl tasks.

**Benchmarks:** Procgen
**Headline result:** Train vs. test level generalization gap across 16 games.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Builds on:** [[ale]]
- **Extended by:** [[crafter]]
- **Related:** [[crafter]], [[craftax]], [[dmcontrol]]
- **Referenced in:** [[q-benchmarks-overfit]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
