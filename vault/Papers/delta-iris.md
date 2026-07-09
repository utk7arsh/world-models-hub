---
title: "Efficient World Models with Context-Aware Tokenization (Delta-IRIS)"
type: paper
paradigm: "autoregressive-wm"
year: 2024
authors: ["Micheli", "Alonso", "Fleuret"]
venue: "ICML 2024"
tags: ["transformer", "discrete-tokens", "efficiency", "rl", "crafter"]
arxiv: "https://arxiv.org/abs/2406.19320"
code: "https://github.com/vmicheli/delta-iris"
importance: 3
---

# Efficient World Models with Context-Aware Tokenization (Delta-IRIS)

> Cuts the token budget of Transformer world models by encoding only the changes between consecutive frames conditioned on context.

Delta-IRIS extends IRIS with a context-aware tokenizer that encodes the delta between the current and previous frame given the past, so each timestep needs far fewer tokens than encoding a full frame from scratch. Fewer tokens shorten the Transformer's autoregressive sequence, making both training and imagination substantially faster while preserving prediction quality. This addresses the key scalability bottleneck of token-based world models: sequence length.

**Benchmarks:** Crafter, Atari 100k

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[iris]]
- **Related:** [[storm]], [[twm]]
- **Referenced in:** [[discrete-vs-continuous-latents]], [[q-fidelity-worth-it]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
