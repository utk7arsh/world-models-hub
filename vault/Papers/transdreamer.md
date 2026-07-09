---
title: "TransDreamer: Reinforcement Learning with Transformer World Models"
type: paper
paradigm: "autoregressive-wm"
year: 2022
authors: ["Chen", "Wu", "Yoon", "Ahn"]
venue: "arXiv / Deep RL Workshop"
tags: ["transformer", "latent", "rl", "rssm", "early-work"]
arxiv: "https://arxiv.org/abs/2202.09481"
importance: 3
---

# TransDreamer: Reinforcement Learning with Transformer World Models

> One of the first works to swap Dreamer's recurrent RSSM dynamics core for a Transformer-based state-space model.

Introduces the Transformer State-Space Model (TSSM), using attention instead of a recurrent GRU to propagate stochastic latent states through time, then trains a Dreamer-style actor-critic on imagined rollouts. By making dynamics attention-based it captures longer-range dependencies and parallelizes training, foreshadowing the wave of Transformer world models like IRIS, TWM, and STORM. It established that Transformers can serve as the sequence backbone for latent-imagination RL.

**Benchmarks:** Hidden Order Discovery, DMControl, Atari
**Headline result:** Matches or exceeds DreamerV2 on control while outperforming it on long-memory tasks.

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[dreamerv2]]
- **Related:** [[iris]], [[twm]], [[storm]], [[dreamerv3]]
- **Referenced in:** [[rssm-latent-state]], [[q-sequence-backbone]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
