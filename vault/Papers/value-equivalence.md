---
title: "The Value Equivalence Principle for Model-Based Reinforcement Learning"
type: paper
paradigm: "planning-mcts"
year: 2020
authors: ["Grimm", "Barreto", "Singh", "Silver"]
venue: "NeurIPS 2020"
tags: ["theory", "value-equivalence", "rl", "planning"]
arxiv: "https://arxiv.org/abs/2011.03506"
importance: 4
---

# The Value Equivalence Principle for Model-Based Reinforcement Learning

> Formalizes why a learned model should only need to predict the values of policies rather than reconstruct the environment, grounding MuZero-style agents.

Defines two models as value-equivalent if they induce the same Bellman updates over a chosen set of policies and value functions, arguing that model learning should target this equivalence class rather than faithful next-state prediction. It shows that restricting to a smaller set of policies and functions yields simpler, more useful models for a fixed capacity, and that this objective implicitly drives methods like the Predictron and MuZero. It reframes model-based RL around task-relevant abstraction instead of generative accuracy.


## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[value-prediction-network]]
- **Extended by:** [[tdmpc]]
- **Related:** [[muzero]]
- **Referenced in:** [[value-equivalence-principle]], [[q-fidelity-worth-it]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
