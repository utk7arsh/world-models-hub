---
title: "World models let you either plan online at decision time or amortize planning into a learned policy."
type: concept
tags: ["concept", "planning", "policy"]
---

# World models let you either plan online at decision time or amortize planning into a learned policy.

Given a world model, there are two ways to act. You can plan online, searching over action sequences at each decision — as [[planet]] does with the cross-entropy method in latent space, or as [[muzero]] does with Monte Carlo Tree Search inside its learned model. Or you can amortize planning into a reactive policy trained against the model, as [[dreamer]] does by backpropagating value gradients through imagined rollouts. Hybrids blur the line: [[tdmpc]] plans over a short horizon but bootstraps beyond it with a learned value function, getting planning's sample efficiency and a policy's asymptotic reach. [[pwm]] takes the amortized extreme, extracting policies via first-order gradients through a large differentiable world model to skip online search entirely. The trade-off is decision-time compute and flexibility versus fast, cheap inference.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
