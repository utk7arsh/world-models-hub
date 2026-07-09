---
title: "MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features"
type: paper
paradigm: "jepa"
year: 2023
authors: ["Bardes", "Ponce", "LeCun"]
venue: "arXiv"
tags: ["latent", "video", "optical-flow", "self-supervised"]
arxiv: "https://arxiv.org/abs/2307.12698"
importance: 3
---

# MC-JEPA: A Joint-Embedding Predictive Architecture for Self-Supervised Learning of Motion and Content Features

> A JEPA variant that jointly learns optical-flow (motion) and content representations in a single shared encoder, unifying self-supervised motion estimation with image feature learning.

MC-JEPA couples a self-supervised optical-flow estimation objective with a VICReg-style content-feature objective inside one multi-task joint-embedding predictive architecture. The shared encoder is trained so motion prediction and content representation reinforce each other, producing features useful for both flow estimation and image-level understanding. It demonstrated that JEPA-style latent prediction can capture temporal motion structure, an idea carried forward into video JEPAs.

**Benchmarks:** KITTI / Sintel optical flow, ImageNet-1k

## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Builds on:** [[i-jepa]]
- **Related:** [[v-jepa]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
