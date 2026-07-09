---
title: "Planning in Stochastic Environments with a Learned Model (Stochastic MuZero)"
type: paper
paradigm: "planning-mcts"
year: 2022
authors: ["Antonoglou", "Schrittwieser", "Ozair", "Hubert", "Silver"]
venue: "ICLR 2022"
tags: ["mcts", "stochastic", "rl", "planning"]
project: "https://openreview.net/forum?id=X6D9bAHhBQ1"
importance: 4
---

# Planning in Stochastic Environments with a Learned Model (Stochastic MuZero)

> Generalizes MuZero to genuinely stochastic environments by learning a model with discrete chance nodes so MCTS can reason over environment randomness.

Augments the learned model with chance states and afterstates, using a VQ-VAE-style discrete latent to represent stochastic transitions as chance outcomes. Monte Carlo Tree Search is extended to alternate between decision nodes (agent actions) and chance nodes (environment outcomes), letting the agent plan under uncertainty rather than assuming determinism. It matches deterministic MuZero on Go while substantially outperforming it on stochastic domains like backgammon and 2048.

**Benchmarks:** Go, Backgammon, 2048

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[muzero]]
- **Related:** [[sampled-muzero]], [[efficientzero]]
- **Referenced in:** [[q-stochasticity]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
