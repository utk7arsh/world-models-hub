---
title: "World Models"
type: paper
paradigm: "latent-imagination"
year: 2018
authors: ["Ha", "Schmidhuber"]
venue: "NeurIPS 2018"
tags: ["seminal", "latent", "rl", "generative", "planning"]
arxiv: "https://arxiv.org/abs/1803.10122"
project: "https://worldmodels.github.io/"
importance: 5
---

# World Models

> The paper that popularized training an agent almost entirely inside a learned generative model of its environment.

Introduces a three-part architecture: a VAE (V) that compresses each frame into a latent code, a recurrent mixture-density RNN (M) that predicts the next latent given the action, and a tiny linear controller (C) evolved with CMA-ES on top of the latent+hidden state. Because M is a learned probabilistic simulator, the controller can be trained purely inside the RNN's 'dream' rollouts and then transferred back to the real environment. It established the template of compressing perception into a compact latent and learning dynamics there for control.

**Benchmarks:** CarRacing-v0, VizDoom Take Cover
**Headline result:** First agent to solve CarRacing-v0 (avg score > 900); learned to act inside the dreamed VizDoom environment.

## Lineage
- **Paradigm:** Latent Imagination (RSSM)
- **Builds on:** [[schmidhuber-predictive]], [[dyna]]
- **Extended by:** [[lecun-path-ami]], [[planet]], [[dreamer]], [[genie]], [[gamengen]], [[diamond]], [[gaia-1]], [[daydreamer]], [[unisim]], [[copilot4d]], [[nwm]], [[simple-atari100k]]
- **Related:** [[lecun-path-ami]], [[schmidhuber-fun-theory]], [[planet]]
- **Referenced in:** [[learning-in-imagination]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
