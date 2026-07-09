---
title: "Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model (MuZero)"
type: paper
paradigm: "planning-mcts"
year: 2020
authors: ["Schrittwieser", "Antonoglou", "Hubert", "Simonyan", "Sifre", "et al."]
venue: "Nature"
tags: ["seminal", "mcts", "rl", "value-equivalence", "planning"]
arxiv: "https://arxiv.org/abs/1911.08265"
importance: 5
---

# Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model (MuZero)

> Shows you can plan with Monte Carlo Tree Search inside a learned latent model that never reconstructs observations, matching AlphaZero while conquering Atari.

MuZero learns three coupled networks: a representation function mapping observations to a latent state, a dynamics function rolling that latent forward given an action while predicting immediate reward, and a prediction function outputting policy and value. Crucially the model is trained end-to-end only to match observed rewards, bootstrapped values, and MCTS policy targets rather than to reconstruct frames, embodying the value-equivalence idea that a model need only be accurate for the quantities used in planning. One algorithm masters board games needing precise lookahead and visually complex Atari without prior knowledge of the rules.

**Benchmarks:** Atari (ALE 57 games), Go, Chess, Shogi
**Headline result:** New state of the art on the Atari 57-game benchmark while matching AlphaZero in Go, chess and shogi.

## Lineage
- **Paradigm:** Planning & Value-Equivalence
- **Builds on:** [[value-prediction-network]]
- **Extended by:** [[sampled-muzero]], [[stochastic-muzero]], [[efficientzero]], [[tdmpc]]
- **Related:** [[value-equivalence]], [[sampled-muzero]], [[stochastic-muzero]], [[efficientzero]]
- **Referenced in:** [[value-equivalence-principle]], [[planning-vs-learned-policy]], [[q-explicit-vs-emergent]], [[q-fidelity-worth-it]], [[home]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
