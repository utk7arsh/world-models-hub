---
title: "Whether the world's latent code is discrete tokens or continuous vectors changes what a world model can imagine."
type: concept
tags: ["concept", "representation", "tokens"]
---

# Whether the world's latent code is discrete tokens or continuous vectors changes what a world model can imagine.

A live design axis is how a world model encodes the world: as discrete tokens or continuous vectors. [[dreamerv2]] showed that swapping Gaussian latents for categorical ones dramatically improved long-horizon imagination on Atari, and this discrete representation became the conceptual basis for token world models like [[iris]] and [[storm]], which discretize frames with a VQ tokenizer and predict the next tokens autoregressively. [[delta-iris]] pushed tokens further by encoding only the change between frames to shorten sequences. But discretization throws away fine visual detail, and [[diamond]] argued the opposite: a continuous diffusion world model that preserves pixel-level detail can yield better policies because those details matter for decision making. The tension — compact discrete abstraction versus rich continuous fidelity — has no settled answer, and it interacts directly with how much compute imagination costs.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
