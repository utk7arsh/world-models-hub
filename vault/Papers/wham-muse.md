---
title: "World and Human Action Models (WHAM / Muse) for Gameplay Ideation"
type: paper
paradigm: "video-diffusion-wm"
year: 2025
authors: ["Kanervisto", "Bignell", "Wen", "Devlin", "Hofmann", "et al."]
venue: "Nature"
tags: ["game-simulation", "transformer", "action-conditioned", "generative", "creative-tool"]
project: "https://www.microsoft.com/en-us/research/blog/introducing-muse-our-first-generative-ai-model-designed-for-gameplay-ideation/"
importance: 4
---

# World and Human Action Models (WHAM / Muse) for Gameplay Ideation

> A generative model of the game Bleeding Edge, published in Nature, that jointly predicts gameplay visuals and controller actions to support divergent, consistent, persistent gameplay ideation.

WHAM (the Muse model) is trained on large-scale human gameplay of the 3D game Bleeding Edge, jointly modeling image and controller-action sequences with a transformer over discretized visual and action tokens. Because it predicts both what happens and what the player does, it generates coherent multi-minute gameplay, can be steered with injected actions or images, and preserves edited game elements over time. Microsoft framed it as a creative co-design tool, and its Nature publication marked a milestone for generative game world models.

**Benchmarks:** Bleeding Edge gameplay
**Headline result:** Consistent, controllable multi-minute 3D gameplay generation.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[genie]]
- **Related:** [[gamengen]], [[oasis]]
- **Referenced in:** [[latent-actions-from-video]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
