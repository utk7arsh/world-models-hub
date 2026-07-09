---
title: "Craftax: A Lightning-Fast Benchmark for Open-Ended Reinforcement Learning"
type: paper
paradigm: "benchmarks-eval"
year: 2024
authors: ["Matthews", "Beukman", "Ellis", "Samvelyan", "Jackson", "et al."]
venue: "ICML 2024"
tags: ["open-ended", "jax", "benchmark", "exploration", "evaluation"]
arxiv: "https://arxiv.org/abs/2402.16801"
code: "https://github.com/MichaelTMatthews/Craftax"
importance: 4
---

# Craftax: A Lightning-Fast Benchmark for Open-Ended Reinforcement Learning

> A JAX reimplementation and major expansion of Crafter, adding NetHack-style depth and running orders of magnitude faster for accessible open-ended RL research.

Craftax rebuilds Crafter entirely in JAX so environment steps run on-accelerator and fully vectorized, enabling billions of steps in hours on a single GPU and removing the CPU-simulation bottleneck of open-ended benchmarks. It substantially deepens the task with multiple dungeon levels, richer progression, and NetHack-inspired mechanics, greatly extending the achievement hierarchy and horizon. The result is a hard, long-horizon exploration benchmark that remains cheap to run, making serious open-ended RL and world-model experiments feasible for small labs.

**Benchmarks:** Craftax, Crafter
**Headline result:** GPU-accelerated env yielding roughly three orders of magnitude speedup over Crafter.

## Lineage
- **Paradigm:** Benchmarks & Evaluation
- **Builds on:** [[crafter]]
- **Related:** [[crafter]], [[procgen]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
