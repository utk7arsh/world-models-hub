---
title: "Learning Interactive Real-World Simulators (UniSim)"
type: paper
paradigm: "embodied-agents"
year: 2024
authors: ["Yang", "Du", "Ghasemipour", "Tompson", "Schuurmans", "Abbeel", "et al."]
venue: "ICLR 2024 (Outstanding Paper)"
tags: ["seminal", "video", "diffusion", "robotics", "action-conditioned", "simulator"]
arxiv: "https://arxiv.org/abs/2310.06114"
project: "https://universal-simulator.github.io/unisim/"
importance: 5
---

# Learning Interactive Real-World Simulators (UniSim)

> A single action-conditioned video diffusion model trained on diverse datasets acts as a universal real-world simulator, letting agents and policies be trained in imagined interaction.

UniSim unifies heterogeneous data (robot trajectories, human video, navigation, text-image) into one action-conditioned video generation model that predicts the visual consequences of arbitrary high- and low-level actions, supporting long-horizon rollout by chaining conditioned generations. Agents and vision-language policies trained entirely inside this learned simulator transfer zero-shot to real robots. It reframed world modeling as a foundation-model-scale generative simulator of real-world interaction, a key precursor to later physical-AI world foundation models.

**Benchmarks:** Language Table, real-robot manipulation transfer
**Headline result:** Zero-shot sim-to-real transfer of policies trained entirely in the learned simulator.

## Lineage
- **Paradigm:** Embodied & Real-World Agents
- **Builds on:** [[world-models]]
- **Extended by:** [[cosmos]], [[nwm]], [[tesseract]], [[genie-envisioner]]
- **Related:** [[genie]], [[cosmos]], [[gaia-1]], [[genie-envisioner]]
- **Referenced in:** [[video-as-world-simulator]], [[q-video-to-robot-transfer]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
