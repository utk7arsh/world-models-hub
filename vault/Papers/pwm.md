---
title: "PWM: Policy Learning with Large World Models"
type: paper
paradigm: "embodied-agents"
year: 2024
authors: ["Georgiev", "Giridhar", "Hansen", "Garg"]
venue: "arXiv"
tags: ["rl", "robotics", "latent", "gradients", "control"]
arxiv: "https://arxiv.org/abs/2407.02466"
project: "https://www.imgeorgiev.com/pwm/"
importance: 3
---

# PWM: Policy Learning with Large World Models

> Learns continuous-control policies by backpropagating first-order gradients through large multi-task learned world models, avoiding expensive online planning.

PWM pre-trains large multi-task world models and then extracts policies via first-order analytic gradients through the smooth learned dynamics, rather than zeroth-order sampling or online model-predictive search. Because the world model provides differentiable, well-behaved dynamics, gradient-based policy optimization becomes efficient even for high-dimensional embodiments. It showed a single large world model can yield strong multi-task continuous-control policies, including complex humanoid and dexterous tasks, in minutes of policy training.

**Benchmarks:** Flex/MuJoCo continuous control, 80-task multi-task control

## Lineage
- **Paradigm:** Embodied & Real-World Agents
- **Builds on:** [[dreamerv3]], [[tdmpc2]]
- **Related:** [[daydreamer]]
- **Referenced in:** [[planning-vs-learned-policy]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
