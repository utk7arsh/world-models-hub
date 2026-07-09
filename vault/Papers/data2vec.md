---
title: "data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language"
type: paper
paradigm: "jepa"
year: 2022
authors: ["Baevski", "Hsu", "Xu", "Babu", "Gu", "Auli"]
venue: "ICML 2022"
tags: ["self-supervised", "latent", "multimodal", "masked-modeling"]
arxiv: "https://arxiv.org/abs/2202.03555"
code: "https://github.com/facebookresearch/fairseq/tree/main/examples/data2vec"
importance: 4
---

# data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language

> A modality-agnostic self-supervised recipe that predicts contextualized latent target representations from a teacher network, directly foreshadowing the feature-prediction objective at the heart of JEPA.

data2vec trains a student to predict, for masked inputs, the latent representations produced by an EMA teacher over the full unmasked input, using the same objective across speech, vision, and text. The targets are contextualized (averaging multiple top layers of the teacher) rather than local tokens or pixels, so the model regresses continuous latent features instead of reconstructing raw signals. This established latent-target prediction with a momentum teacher as a strong, general self-supervised principle that I-JEPA and V-JEPA later specialized.

**Benchmarks:** ImageNet-1k, LibriSpeech, GLUE

## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Builds on:** [[byol]]
- **Extended by:** [[i-jepa]]
- **Related:** [[i-jepa]], [[v-jepa]]
- **Referenced in:** [[predict-features-not-pixels]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
