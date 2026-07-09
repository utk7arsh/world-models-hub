---
title: "A controllable action space can be recovered from unlabeled video without any action labels."
type: concept
tags: ["concept", "latent-action", "video"]
---

# A controllable action space can be recovered from unlabeled video without any action labels.

Most world models need action labels, but the internet's video is unlabeled. A striking result is that a consistent, controllable action space can be inferred from raw frames alone. [[genie]] trains an unsupervised latent action model that infers a small set of discrete actions between consecutive frames, so at inference a user supplies latent actions to steer generation of a playable environment. [[wham-muse]] jointly models gameplay frames and controller actions to support steerable, persistent gameplay ideation. [[v-jepa2]] shows the payoff for control: after action-free pretraining on internet video, it post-trains a latent action-conditioned world model on a little robot video and plans in representation space. [[ivideogpt]] similarly conditions a scalable video GPT on actions and rewards. Learning actions from observation alone could unlock world models from the vast reservoir of passive video that no one has labeled.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
