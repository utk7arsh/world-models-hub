---
title: "Benchmarks & Evaluation"
type: paradigm
---

# Benchmarks & Evaluation

> The yardsticks and evaluation protocols — Atari, DMControl, Crafter, bsuite — that quietly decide which world models the field calls successful.

## Papers
- [[ale]] — *2013* — Introduced the Atari 2600 suite as a standardized, high-variety testbed that became the default benchmark for general RL agents and, later, sample-efficient world models.
- [[revisiting-ale]] — *2018* — Diagnosed how inconsistent evaluation choices made Atari results incomparable and proposed a standardized protocol (sticky actions, no game-specific tuning) still used today.
- [[dmcontrol]] — *2018* — Provided a standardized set of MuJoCo continuous-control tasks with uniform reward scales that became the reference benchmark for continuous-control and pixel-based world models.
- [[simple-atari100k]] — *2020* — Introduced the Atari 100k benchmark by training a video-prediction world model to enable Atari agents that learn from only ~2 hours of play.
- [[procgen]] — *2020* — A suite of 16 procedurally generated arcade-style games designed to measure generalization by training and testing agents on distinct level distributions.
- [[bsuite]] — *2020* — A curated collection of targeted diagnostic experiments that isolate specific RL capabilities such as memory, exploration, and credit assignment rather than reporting one aggregate score.
- [[crafter]] — *2022* — A fast, open-ended Minecraft-like survival game that scores agents on a spectrum of 22 achievements rather than a single reward, probing broad capabilities under tight sample budgets.
- [[craftax]] — *2024* — A JAX reimplementation and major expansion of Crafter, adding NetHack-style depth and running orders of magnitude faster for accessible open-ended RL research.


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
