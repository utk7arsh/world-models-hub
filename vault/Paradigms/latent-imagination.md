---
title: "Latent Imagination (RSSM)"
type: paradigm
---

# Latent Imagination (RSSM)

> The lineage from Ha & Schmidhuber's World Models to the Dreamer family, which compress perception into a recurrent latent state and learn behaviors entirely inside compact imagined dreams.

## Papers
- [[world-models]] — *2018* — The paper that popularized training an agent almost entirely inside a learned generative model of its environment.
- [[planet]] — *2019* — Introduces the Recurrent State-Space Model (RSSM) and plans directly in latent space from pixels, the backbone of the whole Dreamer line.
- [[dreamer]] — *2020* — Replaces PlaNet's online planning with an actor-critic learned by backpropagating value gradients through imagined RSSM rollouts.
- [[dreamerv2]] — *2021* — Adapts Dreamer to discrete categorical latents and becomes the first world-model agent to reach human-level Atari from imagination alone.
- [[dreamerv3]] — *2023* — A single set of hyperparameters makes the Dreamer recipe work robustly across 150+ tasks, including collecting diamonds in Minecraft from scratch.


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
