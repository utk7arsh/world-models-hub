---
title: "DayDreamer: World Models for Physical Robot Learning"
type: paper
paradigm: "embodied-agents"
year: 2022
authors: ["Wu", "Escontrela", "Hafner", "Goldberg", "Abbeel"]
venue: "CoRL 2022"
tags: ["seminal", "robotics", "rl", "latent", "sim-to-real"]
arxiv: "https://arxiv.org/abs/2206.14176"
project: "https://danijar.com/project/daydreamer/"
importance: 5
---

# DayDreamer: World Models for Physical Robot Learning

> First to train Dreamer-style latent world models directly on physical robots, learning useful behaviors in hours of real-world experience without simulators.

DayDreamer applies the Dreamer algorithm end-to-end on real hardware: a recurrent latent world model is learned online from raw sensor streams, and an actor-critic policy is trained purely in the model's imagined rollouts. Because planning happens inside the learned latent dynamics rather than the environment, sample efficiency is high enough to learn on physical robots directly. It demonstrated a quadruped learning to walk from scratch in about an hour and manipulation/navigation skills on several platforms, showing model-based RL can replace simulation-and-transfer for embodied learning.

**Benchmarks:** A1 quadruped locomotion, XArm pick-and-place, UR5 multi-object, Sphero navigation
**Headline result:** A1 quadruped learns to walk in ~1 hour of real-world interaction.

## Lineage
- **Paradigm:** Embodied & Real-World Agents
- **Builds on:** [[dreamerv2]], [[dreamer]], [[planet]], [[world-models]]
- **Related:** [[dreamerv3]], [[pwm]]
- **Referenced in:** [[learning-in-imagination]], [[sample-efficiency-frontier]], [[q-video-to-robot-transfer]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
