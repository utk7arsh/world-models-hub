---
title: "Autoregressive / Token World Models"
type: paradigm
---

# Autoregressive / Token World Models

> Discretize the world into tokens and let GPT-style transformers roll the future forward one token at a time, importing the modeling power of language models into world modeling.

## Papers
- [[transdreamer]] — *2022* — One of the first works to swap Dreamer's recurrent RSSM dynamics core for a Transformer-based state-space model.
- [[iris]] — *2023* — Shows a discrete autoencoder plus an autoregressive Transformer over image tokens makes a highly sample-efficient world model for RL.
- [[twm]] — *2023* — Applies a Transformer-XL-style autoregressive world model over latent states to achieve strong sample efficiency on Atari 100k.
- [[storm]] — *2023* — Combines a stochastic categorical latent variational autoencoder with a Transformer sequence model for a fast, accurate imagination-based agent.
- [[r2i]] — *2024* — Augments DreamerV3's world model with structured state-space sequence models to master long-term memory and credit-assignment tasks.
- [[delta-iris]] — *2024* — Cuts the token budget of Transformer world models by encoding only the changes between consecutive frames conditioned on context.
- [[ivideogpt]] — *2024* — A scalable GPT-style world model over compressed video tokens that supports interactive action conditioning for prediction, planning, and control.


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
