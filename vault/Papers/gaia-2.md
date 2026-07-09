---
title: "GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving"
type: paper
paradigm: "video-diffusion-wm"
year: 2025
authors: ["Russell", "Hu", "Bewley", "Corrado", "Kendall", "et al."]
venue: "arXiv (Wayve)"
tags: ["autonomous-driving", "diffusion", "multi-view", "controllable", "world-model"]
arxiv: "https://arxiv.org/abs/2503.20523"
project: "https://wayve.ai/thinking/gaia-2/"
importance: 4
---

# GAIA-2: A Controllable Multi-View Generative World Model for Autonomous Driving

> A latent diffusion successor to GAIA-1 that generates temporally and spatially consistent multi-camera driving video with fine-grained structured control.

GAIA-2 replaces GAIA-1's autoregressive token stack with a latent video diffusion architecture that jointly generates synchronized surround-view camera streams. It adds rich structured conditioning: ego-vehicle actions, dynamic agent bounding boxes, road layout, camera parameters, and environment attributes like weather and time of day. This makes it a practical, controllable simulator for generating safety-critical and rare scenarios across a full sensor rig for AV development.

**Benchmarks:** Wayve multi-view driving data
**Headline result:** Consistent multi-view video with structured scene/action control.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[gaia-1]]
- **Related:** [[cosmos]], [[unisim]], [[copilot4d]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
