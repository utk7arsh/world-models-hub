---
title: "Genie: Generative Interactive Environments"
type: paper
paradigm: "video-diffusion-wm"
year: 2024
authors: ["Bruce", "Dennis", "Edwards", "Parker-Holder", "Shi", "et al."]
venue: "ICML 2024 (Best Paper)"
tags: ["seminal", "video", "latent-action", "transformer", "interactive", "foundation-model"]
arxiv: "https://arxiv.org/abs/2402.15391"
project: "https://sites.google.com/view/genie-2024"
importance: 5
---

# Genie: Generative Interactive Environments

> First foundation world model trained purely on unlabeled internet gameplay video that learns a latent action space, letting users step through generated environments frame by frame.

Genie trains an 11B-parameter spatiotemporal transformer on 200k+ hours of unlabeled 2D platformer video with no action or reward labels. Its core novelty is an unsupervised Latent Action Model that infers a small discrete set of consistent latent actions between frames, paired with a video tokenizer and an autoregressive dynamics model. At inference, a user supplies a latent action each step and Genie generates the next frame, effectively turning any image (even sketches or photos) into a controllable, playable environment.

**Benchmarks:** Platformers (internet gameplay), RoboNet
**Headline result:** 11B params; controllable action space learned fully unsupervised.

## Lineage
- **Paradigm:** Generative Video World Models
- **Builds on:** [[world-models]]
- **Extended by:** [[cosmos]], [[wham-muse]], [[oasis]]
- **Related:** [[ivideogpt]], [[gaia-1]], [[unisim]], [[gamengen]], [[diamond]]
- **Referenced in:** [[video-as-world-simulator]], [[latent-actions-from-video]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
