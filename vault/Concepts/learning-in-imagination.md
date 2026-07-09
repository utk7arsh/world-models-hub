---
title: "Agents can learn competent behavior almost entirely inside a learned model's imagined rollouts."
type: concept
tags: ["concept", "imagination", "model-based-rl"]
---

# Agents can learn competent behavior almost entirely inside a learned model's imagined rollouts.

The core trick that gives world models their name: rather than learning by expensive trial and error in the real environment, an agent learns a compact simulator of that environment and then trains its policy on cheap 'imagined' rollouts sampled from the model. [[world-models]] first made this vivid by evolving a controller entirely inside a dreamed VizDoom, and the [[dreamer]] line turned it into a reliable recipe, backpropagating value gradients through imagined latent trajectories. [[dreamerv3]] showed a single hyperparameter set can imagine well enough to mine diamonds in Minecraft from scratch, while [[daydreamer]] proved the same imagination loop is efficient enough to train physical robots in about an hour. Imagination also underlies the sample-efficiency benchmarks: [[simple-atari100k]] introduced the 100k-step regime precisely to reward agents that squeeze learning out of a learned model. The bet is that a good enough dream is a cheaper, safer, and infinitely repeatable substitute for reality.

## Backlinks
- [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
