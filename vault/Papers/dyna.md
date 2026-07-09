---
title: "Dyna, an Integrated Architecture for Learning, Planning, and Reacting"
type: paper
paradigm: "foundations-theory"
year: 1991
authors: ["Sutton"]
venue: "ACM SIGART Bulletin"
tags: ["seminal", "rl", "planning", "model-based"]
importance: 5
---

# Dyna, an Integrated Architecture for Learning, Planning, and Reacting

> The foundational blueprint for model-based RL: interleave real experience, learning a predictive model, and planning against that model with the same update rule.

Proposes a unified architecture where an agent simultaneously learns a value function/policy from real transitions, learns an internal model of the environment's dynamics and reward, and uses simulated experience from that model to perform extra value updates. This showed planning and reinforcement learning are the same computation applied to real vs. hypothetical data, a principle that underpins essentially all later world-model RL.

**Benchmarks:** gridworld navigation

## Lineage
- **Paradigm:** Foundations & Theory
- **Extended by:** [[world-models]]
- **Related:** [[world-models]]
- **Referenced in:** [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
