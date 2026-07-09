---
title: "Temporal Difference Learning for Model Predictive Control (TD-MPC)"
type: paper
paradigm: "planning-mcts"
year: 2022
authors: ["Hansen", "Wang", "Su"]
venue: "ICML 2022"
tags: ["mpc", "latent", "continuous-control", "value-equivalence", "rl"]
arxiv: "https://arxiv.org/abs/2203.04955"
code: "https://github.com/nicklashansen/tdmpc"
project: "https://www.nicklashansen.com/td-mpc/"
importance: 4
---

# Temporal Difference Learning for Model Predictive Control (TD-MPC)

> Combines short-horizon planning in a task-oriented latent model with a learned terminal value function, getting planning's sample efficiency and model-free's asymptotic reach.

Learns a latent dynamics model trained purely to predict rewards and values (a value-equivalent, task-oriented latent model) and plans at test time using sampling-based Model Predictive Control (MPPI) over short horizons. Crucially the trajectory optimizer bootstraps beyond its planning horizon with a jointly learned TD value function, so it does not need long, accurate rollouts. This yields strong sample efficiency and wall-clock performance on continuous control without ever reconstructing observations.

**Benchmarks:** DeepMind Control Suite, Meta-World

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[value-equivalence]], [[muzero]]
- **Extended by:** [[tdmpc2]]
- **Related:** [[tdmpc2]], [[sampled-muzero]], [[dreamerv2]]
- **Referenced in:** [[value-equivalence-principle]], [[planning-vs-learned-policy]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
