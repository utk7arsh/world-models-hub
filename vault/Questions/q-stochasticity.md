---
title: "How should world models represent and plan under genuine environmental stochasticity?"
type: question
tags: ["question", "open"]
---

# How should world models represent and plan under genuine environmental stochasticity?

Deterministic latent models can be brittle when the world is truly random. [[stochastic-muzero]] added discrete chance nodes so tree search can reason over outcomes, while the RSSM in [[planet]] and the categorical latents in [[storm]] bake stochasticity into the state, and diffusion models like [[diamond]] represent uncertainty through their sampling process. Which representation of randomness — explicit chance nodes, stochastic latents, or generative sampling — actually supports robust long-horizon planning? The field lacks a shared account of when modeling uncertainty pays off versus when a determinized model suffices.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
