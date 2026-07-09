---
title: "Model-Based Reinforcement Learning for Atari (SimPLe)"
type: paper
paradigm: "benchmarks-eval"
year: 2020
authors: ["Kaiser", "Babaeizadeh", "Miłoś", "Osiński", "Campbell", "Czechowski", "et al."]
venue: "ICLR 2020"
tags: ["atari100k", "model-based", "sample-efficiency", "video-prediction", "benchmark"]
arxiv: "https://arxiv.org/abs/1903.00374"
code: "https://github.com/google-research/simulated-policy-learning"
importance: 5
---

# Model-Based Reinforcement Learning for Atari (SimPLe)

> Introduced the Atari 100k benchmark by training a video-prediction world model to enable Atari agents that learn from only ~2 hours of play.

SimPLe learns an action-conditioned pixel-level video-prediction model of an Atari game and uses simulated rollouts inside this learned model to train a policy, drastically cutting real environment interaction. To make the setting meaningful it restricts agents to 100k environment steps (roughly two hours of gameplay), a regime where model-free methods were far from human performance. This 100k-interaction cap became the de facto Atari 100k sample-efficiency benchmark that virtually every subsequent world-model and data-efficient RL paper reports on.

**Benchmarks:** Atari 100k
**Headline result:** Established the 100k-step (26-game) sample-efficiency protocol on Atari.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Builds on:** [[ale]], [[world-models]]
- **Related:** [[ale]], [[revisiting-ale]], [[dmcontrol]]
- **Referenced in:** [[learning-in-imagination]], [[sample-efficiency-frontier]], [[benchmarks-shape-progress]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
