---
title: "Video Generation Models as World Simulators (Sora)"
type: paper
paradigm: "video-diffusion-wm"
year: 2024
authors: ["OpenAI"]
venue: "OpenAI Technical Report"
tags: ["video", "diffusion-transformer", "scaling", "world-simulation", "emergent"]
project: "https://openai.com/index/video-generation-models-as-world-simulators/"
importance: 4
---

# Video Generation Models as World Simulators (Sora)

> OpenAI's Sora report argued that scaling diffusion-transformer video generation on spacetime patches produces emergent world-simulation abilities like 3D consistency, object permanence, and physical interaction.

Sora is a diffusion transformer trained to denoise sequences of spacetime latent patches, allowing variable resolution, duration, and aspect ratio in one model. The accompanying report positions large-scale video generation as an implicit world simulator, highlighting emergent capabilities such as consistent 3D scenes, object persistence through occlusion, and rudimentary cause-and-effect. It became the reference argument that scaling generative video, rather than explicit physics, can yield general world models.

**Benchmarks:** Qualitative text-to-video / world-consistency demonstrations
**Headline result:** Up to ~1-minute high-fidelity video with emergent 3D and physical consistency.

## Lineage
- **Paradigm:** Generative Video World Models
- **Related:** [[cosmos]], [[unisim]], [[genie]]
- **Referenced in:** [[video-as-world-simulator]], [[q-explicit-vs-emergent]]


---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
