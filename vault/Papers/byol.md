---
title: "Bootstrap Your Own Latent: A New Approach to Self-Supervised Learning (BYOL)"
type: paper
paradigm: "jepa"
year: 2020
authors: ["Grill", "Strub", "Altché", "Tallec", "Richemond", "et al."]
venue: "NeurIPS 2020"
tags: ["self-supervised", "latent", "non-contrastive", "momentum-teacher"]
arxiv: "https://arxiv.org/abs/2006.07733"
importance: 3
---

# Bootstrap Your Own Latent: A New Approach to Self-Supervised Learning (BYOL)

> Showed joint-embedding representations can be learned by predicting a momentum target network's embeddings without negative pairs, providing the collapse-avoiding predictor + EMA-teacher recipe JEPAs rely on.

BYOL trains an online network to predict the projected embedding of a target network fed a different augmented view of the same image, where the target is an exponential moving average of the online network. It demonstrated that this asymmetric predictor-plus-momentum-teacher design avoids representation collapse without contrastive negatives, a mechanism directly reused by data2vec and the JEPA family. Though augmentation-based rather than masking-based, it is a key conceptual predecessor to latent prediction in the LeCun line.

**Benchmarks:** ImageNet-1k linear probe
**Headline result:** 74.3% ImageNet top-1 under linear evaluation (ResNet-50), competitive with supervised training at the time.

## Lineage
- **Paradigm:** Joint-Embedding Predictive (JEPA)
- **Extended by:** [[data2vec]]
- **Related:** [[data2vec]], [[i-jepa]]
- **Referenced in:** [[predict-features-not-pixels]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
