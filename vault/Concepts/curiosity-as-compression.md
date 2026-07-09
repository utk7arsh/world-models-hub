---
title: "Curiosity can be formalized as intrinsic reward for improving a predictive model of the world."
type: concept
tags: ["concept", "curiosity", "intrinsic-motivation"]
---

# Curiosity can be formalized as intrinsic reward for improving a predictive model of the world.

Long before deep RL, [[schmidhuber-predictive]] coupled a controller to a self-supervised recurrent 'model network' that predicts future inputs, and observed that the same predictor can drive exploration: reward the agent for visiting states where its predictions are wrong. [[schmidhuber-fun-theory]] formalized this as intrinsic motivation proportional to the agent's rate of progress in compressing its sensory history, so an agent is drawn to what it can still learn but has not yet mastered — neither fully predictable nor fully random. This anticipates the free-energy view in [[friston-fep]], where action and perception both minimize surprise about sensory input, and connects to the predictive-coding account in [[rao-ballard-pc]]. Curiosity, on this view, is not a bolt-on bonus but a direct consequence of building and improving a world model, tying exploration and representation learning into a single objective.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
