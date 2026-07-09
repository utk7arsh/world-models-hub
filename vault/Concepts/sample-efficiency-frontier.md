---
title: "World models push the sample-efficiency frontier, learning from only a couple hours of experience."
type: concept
tags: ["concept", "sample-efficiency", "benchmarks"]
---

# World models push the sample-efficiency frontier, learning from only a couple hours of experience.

One of the clearest reasons to build a world model is data efficiency: a learned simulator lets you reuse each real interaction many times. [[simple-atari100k]] crystallized this by capping agents at 100k steps — about two hours of play — a regime where model-free methods flounder. [[efficientzero]] was first to exceed median human performance there, adding a self-supervised consistency loss so its learned model trains reliably from tiny data. Token and latent models pushed further: [[iris]] reached human-level mean score on Atari 100k with an autoregressive transformer, and [[dreamerv3]] delivered strong results across 150+ tasks with fixed hyperparameters. Efficiency also enables the physical world, where [[daydreamer]] trained a quadruped to walk in an hour, and it scales, as [[tdmpc2]] shows a single model improving smoothly with size across dozens of tasks.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
