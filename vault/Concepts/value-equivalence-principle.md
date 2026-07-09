---
title: "A world model only needs to predict the quantities used for planning, not reconstruct the future."
type: concept
tags: ["concept", "value-equivalence", "planning"]
---

# A world model only needs to predict the quantities used for planning, not reconstruct the future.

A recurring insight is that a world model does not need to reproduce the environment faithfully; it only needs to be accurate about the quantities a planner actually consumes. [[value-equivalence]] formalized this: two models are interchangeable if they induce the same Bellman updates over the policies and value functions you care about. [[muzero]] embodied it by learning a latent dynamics model trained solely to predict reward, value, and policy — never pixels — yet still mastering Go, chess, shogi, and Atari. [[value-prediction-network]] anticipated the idea by planning in an abstract value-predicting state, and [[tdmpc]] carried it into continuous control, planning over a task-oriented latent with a learned terminal value. This reframes model learning as task-relevant abstraction rather than generative fidelity, and it stands in productive tension with pixel-faithful approaches like the token model [[iris]], which argue that visual detail is itself useful signal.

## Backlinks
- [[q-fidelity-worth-it]]
- [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
