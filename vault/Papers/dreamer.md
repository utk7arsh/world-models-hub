---
title: "Dream to Control: Learning Behaviors by Latent Imagination (Dreamer)"
type: paper
paradigm: "latent-imagination"
year: 2020
authors: ["Hafner", "Lillicrap", "Ba", "Norouzi"]
venue: "ICLR 2020"
tags: ["seminal", "latent", "rl", "actor-critic", "rssm"]
arxiv: "https://arxiv.org/abs/1912.01603"
code: "https://github.com/danijar/dreamer"
project: "https://danijar.com/project/dreamer/"
importance: 5
---

# Dream to Control: Learning Behaviors by Latent Imagination (Dreamer)

> Replaces PlaNet's online planning with an actor-critic learned by backpropagating value gradients through imagined RSSM rollouts.

Keeps PlaNet's RSSM world model but learns behaviors instead of re-planning each step: it trains an actor and value network entirely on latent 'imagined' trajectories rolled out from the model. Because the latent dynamics are differentiable, it propagates analytic value gradients back through the imagined states to update the policy, using a lambda-return value target for long-horizon credit assignment. This decoupled fast policy inference from expensive planning and set the efficiency standard for latent model-based RL.

**Benchmarks:** DeepMind Control Suite
**Headline result:** State-of-the-art data efficiency and final performance across 20 DMControl tasks from pixels.

## Lineage
- **Paradigm:** Latent Imagination (RSSM)
- **Builds on:** [[planet]], [[world-models]]
- **Extended by:** [[dreamerv2]], [[daydreamer]]
- **Related:** [[dreamerv2]], [[planet]]
- **Referenced in:** [[learning-in-imagination]], [[rssm-latent-state]], [[planning-vs-learned-policy]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
