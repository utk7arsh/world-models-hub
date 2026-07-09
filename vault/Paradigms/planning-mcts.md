---
title: "Planning & Value-Equivalence"
type: paradigm
---

# Planning & Value-Equivalence

> The MuZero tradition that learns value-equivalent latent models tuned for decision-making and searches or plans within them without ever reconstructing a pixel.

## Papers
- [[value-prediction-network]] — *2017* — An early model-based agent that plans in an abstract state space trained to predict values and rewards rather than pixels, directly foreshadowing MuZero.
- [[muzero]] — *2020* — Shows you can plan with Monte Carlo Tree Search inside a learned latent model that never reconstructs observations, matching AlphaZero while conquering Atari.
- [[value-equivalence]] — *2020* — Formalizes why a learned model should only need to predict the values of policies rather than reconstruct the environment, grounding MuZero-style agents.
- [[sampled-muzero]] — *2021* — Extends MuZero to large and continuous action spaces by planning and learning over a sampled subset of actions instead of enumerating them all.
- [[efficientzero]] — *2021* — Makes MuZero dramatically more sample-efficient, becoming the first method to exceed median human performance on Atari with only two hours of gameplay.
- [[stochastic-muzero]] — *2022* — Generalizes MuZero to genuinely stochastic environments by learning a model with discrete chance nodes so MCTS can reason over environment randomness.
- [[tdmpc]] — *2022* — Combines short-horizon planning in a task-oriented latent model with a learned terminal value function, getting planning's sample efficiency and model-free's asymptotic reach.
- [[efficientzero-v2]] — *2024* — A unified, sample-efficient successor to EfficientZero that masters both discrete and continuous control from limited data with a single algorithm.
- [[tdmpc2]] — *2024* — Scales TD-MPC into a robust, hyperparameter-stable recipe that trains a single large world model as a generalist agent across 80+ diverse continuous-control tasks.


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
