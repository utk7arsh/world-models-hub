---
title: "GAIA-1: A Generative World Model for Autonomous Driving"
type: paper
paradigm: "video-diffusion-wm"
year: 2023
authors: ["Hu", "Russell", "Yeo", "Murez", "Kendall", "et al."]
venue: "arXiv (Wayve)"
tags: ["autonomous-driving", "video", "transformer", "multimodal", "world-model"]
arxiv: "https://arxiv.org/abs/2309.17080"
project: "https://wayve.ai/thinking/introducing-gaia1/"
importance: 4
---

# GAIA-1: A Generative World Model for Autonomous Driving

> A ~9B-parameter generative world model for driving that predicts realistic future driving video conditioned on past video, text, and ego-actions.

GAIA-1 tokenizes video into discrete codes and interleaves them with text and action tokens, then trains a large autoregressive transformer as the world model to predict future tokens, with a video diffusion decoder rendering realistic frames. Conditioning on actions and language lets it imagine diverse, controllable driving futures, including rare and counterfactual events. It was an early demonstration that scaling generative world models yields emergent understanding of driving dynamics and 3D geometry.

**Benchmarks:** Wayve proprietary urban driving data
**Headline result:** 9B parameters; multi-minute controllable driving video generation.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[world-models]]
- **Extended by:** [[gaia-2]]
- **Related:** [[gaia-2]], [[cosmos]], [[unisim]], [[copilot4d]], [[genie]], [[ivideogpt]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
