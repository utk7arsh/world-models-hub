---
title: "Transformers are Sample-Efficient World Models (IRIS)"
type: paper
paradigm: "autoregressive-wm"
year: 2023
authors: ["Micheli", "Alonso", "Fleuret"]
venue: "ICLR 2023"
tags: ["seminal", "transformer", "discrete-tokens", "rl", "atari"]
arxiv: "https://arxiv.org/abs/2209.00588"
code: "https://github.com/eloialonso/iris"
importance: 5
---

# Transformers are Sample-Efficient World Models (IRIS)

> Shows a discrete autoencoder plus an autoregressive Transformer over image tokens makes a highly sample-efficient world model for RL.

IRIS discretizes each frame into a small grid of tokens with a VQ-VAE, then trains a GPT-style Transformer to autoregressively predict the next frame's tokens, reward, and episode termination. The agent is trained purely inside this learned latent 'imagination', decoupling perception (tokenizer) from dynamics (Transformer). This token-prediction formulation lets the world model exploit the modeling power of language-model architectures while remaining data-efficient.

**Benchmarks:** Atari 100k
**Headline result:** Mean human-normalized score 1.046, superhuman on 10 of 26 games with only 100k frames.

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[dreamerv2]]
- **Extended by:** [[storm]], [[delta-iris]], [[ivideogpt]]
- **Related:** [[twm]], [[storm]], [[delta-iris]]
- **Referenced in:** [[value-equivalence-principle]], [[discrete-vs-continuous-latents]], [[sample-efficiency-frontier]], [[q-fidelity-worth-it]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
