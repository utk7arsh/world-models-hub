---
title: "TD-MPC2: Scalable, Robust World Models for Continuous Control"
type: paper
paradigm: "planning-mcts"
year: 2024
authors: ["Hansen", "Su", "Wang"]
venue: "ICLR 2024"
tags: ["mpc", "latent", "continuous-control", "scaling", "multitask"]
arxiv: "https://arxiv.org/abs/2310.16828"
code: "https://github.com/nicklashansen/tdmpc2"
project: "https://www.tdmpc2.com/"
importance: 5
---

# TD-MPC2: Scalable, Robust World Models for Continuous Control

> Scales TD-MPC into a robust, hyperparameter-stable recipe that trains a single large world model as a generalist agent across 80+ diverse continuous-control tasks.

Rearchitects TD-MPC for scale and robustness, normalizing losses across reward and value scales, using an ensemble of value functions, SimNorm latent representations, and a design that works with fixed hyperparameters across domains. It shows a single agent, even a single set of weights, can be trained on many embodiments and tasks, with performance improving smoothly with model and data size. This positions learned latent world models plus MPC as a scalable, generalist alternative for continuous control.

**Benchmarks:** DeepMind Control Suite, Meta-World, ManiSkill2, MyoSuite
**Headline result:** Single agent solving 104 online-RL tasks across 4 domains; a 317M-parameter model trained on 80 tasks.

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[tdmpc]]
- **Extended by:** [[pwm]]
- **Related:** [[efficientzero-v2]], [[dreamerv3]], [[sampled-muzero]]
- **Referenced in:** [[sample-efficiency-frontier]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
