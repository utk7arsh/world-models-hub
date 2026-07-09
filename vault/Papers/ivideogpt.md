---
title: "iVideoGPT: Interactive VideoGPTs are Scalable World Models"
type: paper
paradigm: "autoregressive-wm"
year: 2024
authors: ["Wu", "Yin", "Feng", "He", "Li", "et al."]
venue: "NeurIPS 2024"
tags: ["transformer", "discrete-tokens", "video", "robotics", "scalable"]
arxiv: "https://arxiv.org/abs/2405.15223"
code: "https://github.com/thuml/iVideoGPT"
importance: 4
---

# iVideoGPT: Interactive VideoGPTs are Scalable World Models

> A scalable GPT-style world model over compressed video tokens that supports interactive action conditioning for prediction, planning, and control.

iVideoGPT uses a compressive tokenizer that separates context frames from densely-tokenized future frames, keeping the autoregressive Transformer's sequence tractable while conditioning on actions and rewards. Pretrained on large-scale robot and human video and then fine-tuned, it serves as a general interactive world model for video prediction, visual planning, and model-based RL. It demonstrates that the VideoGPT recipe scales into a practical action-conditioned world model.

**Benchmarks:** RoboNet, VP2, Meta-World, Atari 100k

## Lineage
- **Paradigm:** Autoregressive / Token World Models
- **Builds on:** [[iris]]
- **Related:** [[genie]], [[gaia-1]]
- **Referenced in:** [[latent-actions-from-video]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
