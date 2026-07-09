---
title: "Joint-Embedding Predictive (JEPA)"
type: paradigm
---

# Joint-Embedding Predictive (JEPA)

> LeCun's wager that autonomous intelligence should predict the abstract representation of the future rather than its pixels, learning collapse-free latent world models by self-supervision.

## Papers
- [[byol]] — *2020* — Showed joint-embedding representations can be learned by predicting a momentum target network's embeddings without negative pairs, providing the collapse-avoiding predictor + EMA-teacher recipe JEPAs rely on.
- [[lecun-path-ami]] — *2022* — The conceptual manifesto that introduced the Joint-Embedding Predictive Architecture (JEPA) and framed world models that predict in abstract representation space rather than reconstructing pixels.
- [[data2vec]] — *2022* — A modality-agnostic self-supervised recipe that predicts contextualized latent target representations from a teacher network, directly foreshadowing the feature-prediction objective at the heart of JEPA.
- [[i-jepa]] — *2023* — The first concrete instantiation of JEPA for images, learning representations by predicting the latent embeddings of masked target blocks from a single context block.
- [[mc-jepa]] — *2023* — A JEPA variant that jointly learns optical-flow (motion) and content representations in a single shared encoder, unifying self-supervised motion estimation with image feature learning.
- [[v-jepa]] — *2024* — Extends JEPA to video, showing pure feature prediction over masked spatiotemporal regions yields versatile visual representations without pixel reconstruction or labels.
- [[v-jepa2]] — *2025* — Scales V-JEPA to over a million hours of internet video and adds a latent action-conditioned world model, enabling zero-shot robot manipulation planning in representation space.


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
