---
title: "What sequence model belongs at the core of a world model: recurrence, attention, or state-space?"
type: question
tags: ["question", "open"]
---

# What sequence model belongs at the core of a world model: recurrence, attention, or state-space?

The [[dreamerv3]] line rides a recurrent RSSM, yet [[transdreamer]] and [[twm]] replaced recurrence with attention to capture longer histories, while [[r2i]] inserted structured state-space layers to ace long-memory tasks. Each backbone trades off parallel training, context length, and stability under imagined rollout. Which core generalizes best across memory-heavy, reactive, and long-horizon tasks at once, and does the right answer change as models and data scale? So far every backbone wins on some benchmark and loses on another.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
