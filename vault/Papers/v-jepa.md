---
title: "Revisiting Feature Prediction for Learning Visual Representations from Video (V-JEPA)"
type: paper
paradigm: "jepa"
year: 2024
authors: ["Bardes", "Garrido", "Ponce", "Rabbat", "LeCun", "et al."]
venue: "TMLR 2024"
tags: ["video", "latent", "self-supervised", "masked-modeling", "vit"]
arxiv: "https://arxiv.org/abs/2404.08471"
code: "https://github.com/facebookresearch/jepa"
project: "https://ai.meta.com/research/publications/revisiting-feature-prediction-for-learning-visual-representations-from-video/"
importance: 5
---

# Revisiting Feature Prediction for Learning Visual Representations from Video (V-JEPA)

> Extends JEPA to video, showing pure feature prediction over masked spatiotemporal regions yields versatile visual representations without pixel reconstruction or labels.

V-JEPA pretrains video Vision Transformers solely with a feature-prediction objective: given a masked video, a predictor reconstructs the EMA-teacher embeddings of the masked spatiotemporal patches rather than raw pixels. It removes reliance on pretrained image encoders, text, negatives, and reconstruction, showing multi-block masking of video is a strong self-supervised signal. The resulting frozen features perform well on motion-heavy and appearance-based downstream tasks under attentive probing.

**Benchmarks:** Kinetics-400, Something-Something v2, ImageNet-1k

## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Builds on:** [[i-jepa]]
- **Extended by:** [[v-jepa2]]
- **Related:** [[data2vec]], [[v-jepa2]], [[mc-jepa]]
- **Referenced in:** [[predict-features-not-pixels]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
