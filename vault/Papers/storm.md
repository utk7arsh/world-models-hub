---
title: "STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning"
type: paper
paradigm: "autoregressive-wm"
year: 2023
authors: ["Zhang", "Wang", "Sun", "Yuan", "Huang"]
venue: "NeurIPS 2023"
tags: ["transformer", "stochastic", "rl", "atari", "latent"]
arxiv: "https://arxiv.org/abs/2310.09615"
code: "https://github.com/weipu-zhang/STORM"
importance: 4
---

# STORM: Efficient Stochastic Transformer based World Models for Reinforcement Learning

> Combines a stochastic categorical latent variational autoencoder with a Transformer sequence model for a fast, accurate imagination-based agent.

STORM encodes frames into stochastic categorical latents (as in DreamerV2/IRIS) and models their temporal dynamics with a Transformer rather than a recurrent net, adding KL balancing and reconstruction objectives for stable representation learning. The stochastic latents capture environment uncertainty while the Transformer provides efficient parallel training and strong predictive accuracy. The actor-critic is trained entirely on latent imagination rollouts.

**Benchmarks:** Atari 100k
**Headline result:** Mean human-normalized score ~1.27 on Atari 100k.

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[dreamerv2]], [[iris]]
- **Related:** [[twm]], [[iris]]
- **Referenced in:** [[discrete-vs-continuous-latents]], [[q-stochasticity]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
