---
title: "Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion"
type: paper
paradigm: "embodied-agents"
year: 2023
authors: ["Zhang", "Xiong", "Yang", "Casas", "Hu", "Urtasun"]
venue: "ICLR 2024 (Waabi)"
tags: ["driving", "lidar", "diffusion", "tokenization", "4d"]
arxiv: "https://arxiv.org/abs/2311.01017"
importance: 4
---

# Copilot4D: Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion

> An unsupervised point-cloud world model that tokenizes LiDAR and forecasts future 3D scenes with discrete diffusion, learning driving dynamics without labels.

Copilot4D uses a VQ-VAE to tokenize LiDAR observations, then trains a discrete-diffusion transformer to predict future tokenized point clouds conditioned on ego motion. Operating in the geometric LiDAR space rather than pixels gives sharp, physically grounded 4D forecasts of the surrounding scene. It demonstrated that fully unsupervised sensor-space world models can substantially improve future point-cloud prediction, offering a label-free path to driving dynamics learning.

**Benchmarks:** nuScenes, KITTI Odometry, Argoverse2

## Lineage
- **Paradigm:** Embodied & Real-World Agents
- **Builds on:** [[world-models]]
- **Related:** [[gaia-1]], [[unisim]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
