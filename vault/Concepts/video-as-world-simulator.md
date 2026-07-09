---
title: "Scaling generative video turns raw footage into controllable, playable simulators of the world."
type: concept
tags: ["concept", "video", "generative"]
---

# Scaling generative video turns raw footage into controllable, playable simulators of the world.

A newer paradigm argues that you don't need an explicit dynamics equation at all: train a big enough generative video model and world simulation emerges. [[sora-world-simulator]] made the strongest version of the claim, reporting emergent 3D consistency and object permanence from scaling diffusion transformers on spacetime patches. [[genie]] showed such models can be made interactive, learning a latent action space from unlabeled gameplay so a user can step through generated worlds. [[gamengen]] proved a diffusion model can reproduce DOOM in real time, and [[diamond]] connected this back to RL by training an agent inside a diffusion world model. [[unisim]] and [[cosmos]] scale the idea toward physical AI, unifying diverse real-world video into simulators robots can be trained inside. The open worry is whether such models learn genuine physics or merely plausible-looking correlations that break under intervention.

## Backlinks
- [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
