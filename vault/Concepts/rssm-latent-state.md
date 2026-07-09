---
title: "Splitting latent state into deterministic memory and stochastic surprise is the workhorse of latent world models."
type: concept
tags: ["concept", "rssm", "architecture"]
---

# Splitting latent state into deterministic memory and stochastic surprise is the workhorse of latent world models.

Most latent world models share a structural idea introduced by [[planet]]: the Recurrent State-Space Model, which factors each latent state into a deterministic recurrent path that carries reliable memory and a stochastic path that absorbs uncertainty and multimodality. Keeping both means the model can remember long-range context without becoming overconfident about what happens next. [[dreamer]] built its imagination actor-critic directly on this backbone, and [[dreamerv2]] sharpened it by making the stochastic component a vector of categorical variables trained with straight-through gradients plus KL balancing to stop the prior from collapsing. Later work stressed the recurrent core: [[transdreamer]] swapped the GRU for a Transformer to attend over longer histories, and [[r2i]] inserted structured state-space layers to master very long-horizon memory tasks. The RSSM factorization is arguably the single most reused architectural motif across the latent-imagination lineage.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
