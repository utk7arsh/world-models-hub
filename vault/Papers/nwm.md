---
title: "Navigation World Models"
type: paper
paradigm: "embodied-agents"
year: 2024
authors: ["Bar", "Zhou", "Tran", "Darrell", "LeCun"]
venue: "CVPR 2025"
tags: ["navigation", "diffusion", "planning", "transformer", "video"]
arxiv: "https://arxiv.org/abs/2412.03572"
project: "https://www.amirbar.net/nwm/"
importance: 4
---

# Navigation World Models

> A conditional diffusion-transformer world model that predicts future egocentric visual observations from navigation actions, enabling planning by imagining and scoring trajectories.

NWM trains a Conditional Diffusion Transformer (CDiT) over egocentric video from many robot and human navigation datasets to forecast future first-person observations given a sequence of navigation actions. At test time an agent plans by rolling out candidate action sequences in the model and selecting those that reach a goal image, and it can imagine trajectories in unfamiliar environments. This provided a scalable, data-driven world-model approach to visual navigation and planning without an explicit map.

**Benchmarks:** RECON, SCAND, TartanDrive, Go Stanford

## Lineage
- **Paradigm:** Embodied & Real-World Agents
- **Builds on:** [[world-models]], [[unisim]]
- **Related:** [[daydreamer]], [[genie-envisioner]]
- **Referenced in:** [[q-video-to-robot-transfer]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
