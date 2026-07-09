---
title: "TesserAct: Learning 4D Embodied World Models"
type: paper
paradigm: "embodied-agents"
year: 2025
authors: ["Zhen", "Sun", "Zhang", "Li", "Zhou", "et al."]
venue: "arXiv"
tags: ["robotics", "4d", "video", "manipulation", "geometry"]
arxiv: "https://arxiv.org/abs/2504.20995"
project: "https://tesseractworld.github.io/"
importance: 3
---

# TesserAct: Learning 4D Embodied World Models

> Predicts action-conditioned RGB, depth, and normal videos to build a geometry-aware 4D world model for robotic manipulation planning.

TesserAct extends video world models from RGB to RGB-D-N (color, depth, surface normals), training on annotated robot video to forecast spatially and temporally consistent 4D scenes conditioned on actions. The explicit geometry lets it reconstruct future 3D scene evolution and derive executable manipulation trajectories, giving more physically grounded predictions than pixel-only models. This targets the geometry gap in embodied world models, improving downstream manipulation planning.

**Benchmarks:** RLBench, real-robot manipulation

## Lineage
- **Paradigm:** Embodied & Real-World Agents
- **Builds on:** [[unisim]], [[cosmos]]
- **Related:** [[genie-envisioner]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
