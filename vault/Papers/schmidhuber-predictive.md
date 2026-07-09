---
title: "Making the World Differentiable: On Using Self-Supervised Fully Recurrent Neural Networks for Dynamic Reinforcement Learning and Planning in Non-Stationary Environments"
type: paper
paradigm: "foundations-theory"
year: 1990
authors: ["Schmidhuber"]
venue: "Tech Report FKI-126-90, TU Munich"
tags: ["seminal", "rl", "recurrent", "predictive", "curiosity"]
importance: 4
---

# Making the World Differentiable: On Using Self-Supervised Fully Recurrent Neural Networks for Dynamic Reinforcement Learning and Planning in Non-Stationary Environments

> The original recurrent 'world model + controller' system, where a predictive network learns environment dynamics and a controller backpropagates through it to plan.

Describes a controller network coupled to a separate recurrent 'model network' trained self-supervised to predict future inputs (including reward) from actions. Because the model is differentiable, the controller obtains gradients for goal-directed behavior by backpropagating through the learned dynamics, and the same model drives curiosity by rewarding states where its predictions are wrong. This is the direct intellectual ancestor of Ha & Schmidhuber's World Models.


## Lineage
- **Paradigm:** Foundations & Theory
- **Extended by:** [[world-models]], [[schmidhuber-fun-theory]]
- **Related:** [[world-models]], [[schmidhuber-fun-theory]]
- **Referenced in:** [[curiosity-as-compression]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
