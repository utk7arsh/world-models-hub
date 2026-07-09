---
title: "Transformer-based World Models Are Happy With 100k Interactions (TWM)"
type: paper
paradigm: "autoregressive-wm"
year: 2023
authors: ["Robine", "Höftmann", "Uelwer", "Harmeling"]
venue: "ICLR 2023"
tags: ["transformer", "rl", "atari", "memory", "latent"]
arxiv: "https://arxiv.org/abs/2303.07109"
code: "https://github.com/jrobine/twm"
importance: 4
---

# Transformer-based World Models Are Happy With 100k Interactions (TWM)

> Applies a Transformer-XL-style autoregressive world model over latent states to achieve strong sample efficiency on Atari 100k.

TWM replaces the recurrent RSSM core of Dreamer-style agents with an autoregressive Transformer-XL that attends over past latent states, actions, and rewards to predict the next latent. Transformer-XL's segment-level recurrence gives long effective context without quadratic cost over full episodes. The result is a sample-efficient model-based agent trained on imagined latent rollouts.

**Benchmarks:** Atari 100k

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[dreamerv2]]
- **Related:** [[iris]], [[storm]]
- **Referenced in:** [[q-sequence-backbone]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
