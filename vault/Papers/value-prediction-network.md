---
title: "Value Prediction Network"
type: paper
paradigm: "planning-mcts"
year: 2017
authors: ["Oh", "Singh", "Lee"]
venue: "NeurIPS 2017"
tags: ["foundational", "latent", "rl", "planning", "value-equivalence"]
arxiv: "https://arxiv.org/abs/1707.03497"
importance: 3
---

# Value Prediction Network

> An early model-based agent that plans in an abstract state space trained to predict values and rewards rather than pixels, directly foreshadowing MuZero.

VPN integrates model-free value estimation with model-based planning by learning a dynamics model that operates purely in an abstract latent state, trained to predict discounted future rewards and values instead of raw observations. Planning unrolls this abstract model to produce multi-step value estimates used for action selection and TD targets. It demonstrated that grounding a learned model in value prediction, not reconstruction, yields better planning on stochastic and visually rich domains.

**Benchmarks:** Atari, Collect (maze) domains

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Extended by:** [[muzero]], [[value-equivalence]]
- **Related:** [[muzero]], [[value-equivalence]]
- **Referenced in:** [[value-equivalence-principle]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
