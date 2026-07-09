---
title: "Learning Latent Dynamics for Planning from Pixels (PlaNet)"
type: paper
paradigm: "latent-imagination"
year: 2019
authors: ["Hafner", "Lillicrap", "Fischer", "Villegas", "Ha", "et al."]
venue: "ICML 2019"
tags: ["seminal", "latent", "rl", "planning", "rssm"]
arxiv: "https://arxiv.org/abs/1811.04551"
code: "https://github.com/google-research/planet"
importance: 5
---

# Learning Latent Dynamics for Planning from Pixels (PlaNet)

> Introduces the Recurrent State-Space Model (RSSM) and plans directly in latent space from pixels, the backbone of the whole Dreamer line.

Proposes the RSSM, a latent dynamics model that splits state into a deterministic recurrent component and a stochastic component, capturing both reliable memory and uncertainty. It trains this model with a multi-step variational latent-overshooting objective and then does purely latent-space online planning with the cross-entropy method (no policy network, no reconstruction at plan time). This showed model-based RL from pixels could match leading model-free methods with far fewer interactions.

**Benchmarks:** DeepMind Control Suite
**Headline result:** Matched top model-free agents on continuous-control tasks using ~50x fewer episodes.

## Lineage
- **Paradigm:** Latent Imagination (RSSM)
- **Builds on:** [[world-models]]
- **Extended by:** [[dreamer]], [[dreamerv2]], [[daydreamer]]
- **Related:** [[dreamer]]
- **Referenced in:** [[rssm-latent-state]], [[planning-vs-learned-policy]], [[q-stochasticity]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
