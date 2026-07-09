---
title: "Standardized benchmarks and their evaluation protocols quietly steer what world-model research optimizes."
type: concept
tags: ["concept", "evaluation", "methodology"]
---

# Standardized benchmarks and their evaluation protocols quietly steer what world-model research optimizes.

Benchmarks are not neutral rulers; they encode assumptions that steer a whole subfield. [[ale]] made raw-pixel Atari the default test of general agents, and [[revisiting-ale]] then showed that quiet choices like determinism and episode termination had made results incomparable, introducing sticky actions to fix it. [[simple-atari100k]] redirected the field toward sample efficiency by capping interaction, which is exactly why world models look so good on it. [[dmcontrol]] standardized continuous control with normalized rewards, while [[crafter]] and [[bsuite]] deliberately measure breadth: Crafter scores 22 distinct achievements to probe open-ended competence, and bsuite isolates capabilities like memory and exploration rather than reporting one number. What we choose to measure quietly decides which world models we call successful.

## Backlinks
- [[q-benchmarks-overfit]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
