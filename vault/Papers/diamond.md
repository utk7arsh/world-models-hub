---
title: "Diffusion for World Modeling: Visual Details Matter in Atari (DIAMOND)"
type: paper
paradigm: "video-diffusion-wm"
year: 2024
authors: ["Alonso", "Jelley", "Micheli", "Kanervisto", "Storkey", "et al."]
venue: "NeurIPS 2024 (Spotlight)"
tags: ["diffusion", "rl", "atari", "world-model", "sample-efficient"]
arxiv: "https://arxiv.org/abs/2405.12399"
code: "https://github.com/eloialonso/diamond"
project: "https://diamond-wm.github.io/"
importance: 4
---

# Diffusion for World Modeling: Visual Details Matter in Atari (DIAMOND)

> Replaced the discrete-token imagination of prior world-model RL with a continuous diffusion world model, showing visual fidelity directly improves downstream agent performance.

DIAMOND trains an agent entirely inside a diffusion-based world model instead of a discrete latent (VQ) model as in Dreamer/IRIS. It uses an EDM-style diffusion model to predict next frames conditioned on frame and action history, arguing that preserving fine visual details (which discrete tokenizers discard) matters for policy learning. The same diffusion world model also demonstrated interactive, playable CS:GO simulation, bridging RL world models and neural game engines.

**Benchmarks:** Atari 100k, CS:GO (interactive)
**Headline result:** Mean human-normalized score 1.46 on Atari 100k, best among comparable world-model agents at the time.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[world-models]], [[dreamerv3]]
- **Related:** [[gamengen]], [[genie]]
- **Referenced in:** [[discrete-vs-continuous-latents]], [[video-as-world-simulator]], [[q-pixels-vs-representations]], [[q-stochasticity]], [[q-fidelity-worth-it]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
