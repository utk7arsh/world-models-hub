---
title: "The Arcade Learning Environment: An Evaluation Platform for General Agents"
type: paper
paradigm: "benchmarks-eval"
year: 2013
authors: ["Bellemare", "Naddaf", "Veness", "Bowling"]
venue: "JAIR"
tags: ["seminal", "atari", "rl", "benchmark", "evaluation"]
arxiv: "https://arxiv.org/abs/1207.4708"
code: "https://github.com/Farama-Foundation/Arcade-Learning-Environment"
importance: 5
---

# The Arcade Learning Environment: An Evaluation Platform for General Agents

> Introduced the Atari 2600 suite as a standardized, high-variety testbed that became the default benchmark for general RL agents and, later, sample-efficient world models.

ALE wraps hundreds of Atari 2600 games behind a common interface exposing screen pixels, RAM, and reward, turning a diverse collection of human games into a single platform for measuring general competence. It deliberately separates games used for development from those held out for testing, encouraging agents that generalize rather than overfit. By making raw-pixel control with sparse game scores a shared standard, it set the evaluation protocol that Deep Q-Networks and essentially all later Atari benchmarks build on.

**Benchmarks:** Atari (ALE)
**Headline result:** 57-game Atari suite; human-normalized score is the standard aggregate metric.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Extended by:** [[revisiting-ale]], [[simple-atari100k]], [[procgen]]
- **Related:** [[revisiting-ale]], [[simple-atari100k]]
- **Referenced in:** [[benchmarks-shape-progress]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
