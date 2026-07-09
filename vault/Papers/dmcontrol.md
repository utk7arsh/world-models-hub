---
title: "DeepMind Control Suite"
type: paper
paradigm: "benchmarks-eval"
year: 2018
authors: ["Tassa", "Doron", "Muldal", "Erez", "Li", "et al."]
venue: "arXiv (tech report)"
tags: ["continuous-control", "benchmark", "rl", "mujoco", "evaluation"]
arxiv: "https://arxiv.org/abs/1801.00690"
code: "https://github.com/google-deepmind/dm_control"
importance: 5
---

# DeepMind Control Suite

> Provided a standardized set of MuJoCo continuous-control tasks with uniform reward scales that became the reference benchmark for continuous-control and pixel-based world models.

The Control Suite packages a range of physics-based locomotion and manipulation tasks on top of MuJoCo behind a single Python API, with rewards normalized to a fixed 0-1000 range so scores are directly comparable across tasks. It supplies both state-based and pixel-based observations, making it a natural testbed for latent-dynamics world models that must learn control from images. Its consistent structure and tooling made DMControl the standard continuous-control counterpart to Atari for evaluating sample efficiency and model-based methods.

**Benchmarks:** DMControl
**Headline result:** Rewards normalized to a 0-1000 per-episode scale across all tasks.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Related:** [[simple-atari100k]], [[procgen]]
- **Referenced in:** [[benchmarks-shape-progress]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
