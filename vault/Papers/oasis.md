---
title: "Oasis: A Universe in a Transformer"
type: paper
paradigm: "video-diffusion-wm"
year: 2024
authors: ["Decart", "Etched"]
venue: "Technical Report"
tags: ["game-simulation", "diffusion", "real-time", "interactive", "minecraft"]
project: "https://oasis-model.github.io/"
importance: 3
---

# Oasis: A Universe in a Transformer

> The first real-time, fully playable open-world neural game (Minecraft-style) generated frame-by-frame by a diffusion transformer responding live to keyboard and mouse input.

Oasis combines a spatial autoencoder with an autoregressive diffusion-transformer dynamics backbone to generate open-world gameplay one frame at a time, conditioned on the user's real-time actions. Unlike bounded-game simulators, it produces an explorable open environment with emergent object permanence and physics, running interactively via heavy inference optimization and purpose-built hardware. It pushed generative video world models from short clips to sustained, user-driven real-time interaction.

**Benchmarks:** Minecraft-style open-world gameplay
**Headline result:** Real-time interactive frame generation at playable frame rates.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[gamengen]], [[genie]]
- **Related:** [[diamond]], [[wham-muse]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
