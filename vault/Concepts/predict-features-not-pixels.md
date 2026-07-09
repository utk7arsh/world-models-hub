---
title: "Predicting abstract representations sidesteps the intractability of predicting every pixel of an uncertain future."
type: concept
tags: ["concept", "jepa", "self-supervised"]
---

# Predicting abstract representations sidesteps the intractability of predicting every pixel of an uncertain future.

The JEPA thesis is that predicting the future in raw pixel space is both wasteful and ill-posed, because the future is uncertain and most pixels are unpredictable noise. [[lecun-path-ami]] proposed instead to predict the abstract representation of a target from a context, using an energy-based joint-embedding architecture with regularization against collapse. [[i-jepa]] made this concrete for images, predicting the embeddings of masked blocks from a single context block via an EMA teacher, and [[v-jepa]] extended it to masked spatiotemporal video. The mechanism was foreshadowed by [[byol]], which showed a predictor plus momentum teacher avoids collapse without negative pairs, and generalized by [[data2vec]] across speech, vision, and text. The payoff, realized in [[v-jepa2]], is a latent world model you can actually plan in: rolling out abstract states conditioned on actions to control a real robot, all without ever rendering a pixel.

## Backlinks
- [[brain-as-predictive-machine]]
- [[q-pixels-vs-representations]]
- [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
