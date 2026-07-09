---
title: "Mastering Atari with Discrete World Models (DreamerV2)"
type: paper
paradigm: "latent-imagination"
year: 2021
authors: ["Hafner", "Lillicrap", "Norouzi", "Ba"]
venue: "ICLR 2021"
tags: ["seminal", "latent", "rl", "atari", "discrete", "rssm"]
arxiv: "https://arxiv.org/abs/2010.02193"
code: "https://github.com/danijar/dreamerv2"
importance: 5
---

# Mastering Atari with Discrete World Models (DreamerV2)

> Adapts Dreamer to discrete categorical latents and becomes the first world-model agent to reach human-level Atari from imagination alone.

Swaps the RSSM's Gaussian stochastic state for a vector of categorical latents trained with straight-through gradients, better capturing the multimodal, discrete transitions of games, and adds KL balancing to stop the prior from collapsing. The discrete latent proved crucial for accurate long-horizon imagination and became the conceptual basis for discrete-token world models like IRIS and STORM. It was the first agent trained purely inside a learned world model to match human-level Atari on a single GPU.

**Benchmarks:** Atari 200M
**Headline result:** First to exceed human-level mean/median performance on Atari using a single learned world model.

## Lineage
- **Paradigm:** Latent Imagination (RSSM)
- **Builds on:** [[dreamer]], [[planet]]
- **Extended by:** [[dreamerv3]], [[iris]], [[twm]], [[storm]], [[transdreamer]], [[daydreamer]]
- **Related:** [[dreamerv3]], [[transdreamer]], [[iris]], [[storm]], [[twm]]
- **Referenced in:** [[rssm-latent-state]], [[discrete-vs-continuous-latents]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
