---
title: "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)"
type: paper
paradigm: "jepa"
year: 2023
authors: ["Assran", "Duval", "Misra", "Bojanowski", "Vincent", "et al."]
venue: "CVPR 2023"
tags: ["seminal", "latent", "self-supervised", "vit", "image"]
arxiv: "https://arxiv.org/abs/2301.08243"
code: "https://github.com/facebookresearch/ijepa"
importance: 5
---

# Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture (I-JEPA)

> The first concrete instantiation of JEPA for images, learning representations by predicting the latent embeddings of masked target blocks from a single context block.

I-JEPA trains a Vision Transformer to predict, in representation space, the embeddings of several large target blocks of an image given a single spatially-distant context block. Targets are produced by an EMA teacher encoder, and a lightweight predictor conditioned on target positions maps context features to target features. Because supervision is in an abstract feature space rather than pixels, it learns high-level semantics efficiently and avoids the invariance-based augmentation used by prior joint-embedding methods.

**Benchmarks:** ImageNet-1k linear probe, ImageNet-1% low-shot
**Headline result:** Strong ImageNet linear-probe and low-shot accuracy with far fewer pretraining GPU-hours than pixel-reconstruction MAE.

## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Builds on:** [[lecun-path-ami]], [[data2vec]]
- **Extended by:** [[v-jepa]], [[mc-jepa]]
- **Related:** [[byol]], [[v-jepa]], [[mc-jepa]]
- **Referenced in:** [[predict-features-not-pixels]], [[q-pixels-vs-representations]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
