---
title: "Diffusion Models Are Real-Time Game Engines (GameNGen)"
type: paper
paradigm: "video-diffusion-wm"
year: 2024
authors: ["Valevski", "Leviathan", "Arar", "Fruchter"]
venue: "ICLR 2025"
tags: ["diffusion", "game-engine", "real-time", "video", "neural-simulation"]
arxiv: "https://arxiv.org/abs/2408.14837"
project: "https://gamengen.github.io/"
importance: 5
---

# Diffusion Models Are Real-Time Game Engines (GameNGen)

> Showed a diffusion model can fully simulate the game DOOM interactively at 20+ FPS with visual quality nearly indistinguishable from the real engine.

A two-stage pipeline: an RL agent first plays DOOM to collect trajectories, then a modified Stable Diffusion model is trained to predict the next frame conditioned on past frames and player actions. Key tricks include conditioning on action history, noise-augmentation of context frames to prevent autoregressive drift over long rollouts, and a latent decoder fine-tune for HUD/detail fidelity. It demonstrated that a neural network alone, with no game code, can serve as an interactive real-time game engine.

**Benchmarks:** DOOM
**Headline result:** 20+ FPS on a single TPU; human raters near chance distinguishing real vs. simulated clips.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[world-models]]
- **Extended by:** [[oasis]]
- **Related:** [[diamond]], [[genie]], [[oasis]]
- **Referenced in:** [[video-as-world-simulator]], [[q-pixels-vs-representations]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
