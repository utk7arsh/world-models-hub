---
title: "V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning"
type: paper
paradigm: "jepa"
year: 2025
authors: ["Assran", "Bardes", "et al."]
venue: "arXiv (Meta AI)"
tags: ["video", "world-model", "robotics", "planning", "latent"]
arxiv: "https://arxiv.org/abs/2506.09985"
code: "https://github.com/facebookresearch/vjepa2"
project: "https://ai.meta.com/vjepa/"
importance: 5
---

# V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning

> Scales V-JEPA to over a million hours of internet video and adds a latent action-conditioned world model, enabling zero-shot robot manipulation planning in representation space.

V-JEPA 2 first pretrains a large action-free video JEPA on internet-scale video, achieving strong motion understanding, action anticipation, and (after LLM alignment) video question-answering. It then post-trains V-JEPA 2-AC, a latent action-conditioned world model, on under 62 hours of unlabeled robot video, learning to predict future latent states conditioned on actions. Planning rolls out this model in latent space and optimizes action sequences toward an image goal via MPC, letting a Franka arm perform pick-and-place zero-shot in new labs without task-specific data or rewards.

**Benchmarks:** Something-Something v2, Epic-Kitchens-100, Franka pick-and-place (real robot)
**Headline result:** 77.3 top-1 on SSv2 and 39.7 recall-at-5 on Epic-Kitchens-100 anticipation; zero-shot real-robot manipulation via latent planning.

## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Builds on:** [[v-jepa]]
- **Related:** [[lecun-path-ami]]
- **Referenced in:** [[predict-features-not-pixels]], [[latent-actions-from-video]], [[q-video-to-robot-transfer]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
