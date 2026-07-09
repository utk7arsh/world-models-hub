---
title: "A Path Towards Autonomous Machine Intelligence"
type: paper
paradigm: "jepa"
year: 2022
authors: ["LeCun"]
venue: "OpenReview position paper"
tags: ["seminal", "position-paper", "jepa", "energy-based", "self-supervised", "planning", "latent"]
project: "https://openreview.net/forum?id=BZ5a1r-kVsf"
importance: 5
---

# A Path Towards Autonomous Machine Intelligence

> The conceptual manifesto that introduced the Joint-Embedding Predictive Architecture (JEPA) and framed world models that predict in abstract representation space rather than reconstructing pixels.

Lays out a blueprint for autonomous intelligence built around a differentiable world model trained by self-supervised prediction. It argues that generative pixel-level prediction is wasteful and ill-posed under uncertainty, and instead proposes energy-based Joint-Embedding Predictive Architectures (JEPAs) that predict the representation of a target from a context, with regularization to prevent collapse. It also introduces the hierarchical multi-timescale H-JEPA idea and a configurator/actor/critic layout for planning by minimizing energy in latent space, launching the JEPA research line.


## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Builds on:** [[world-models]], [[friston-fep]], [[rao-ballard-pc]]
- **Extended by:** [[i-jepa]]
- **Related:** [[i-jepa]], [[v-jepa]], [[v-jepa2]]
- **Referenced in:** [[predict-features-not-pixels]], [[brain-as-predictive-machine]], [[q-pixels-vs-representations]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
