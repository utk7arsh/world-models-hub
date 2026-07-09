---
title: "Does visual fidelity in a world model actually help the agent, or is it wasted compute?"
type: question
tags: ["question", "open"]
---

# Does visual fidelity in a world model actually help the agent, or is it wasted compute?

The [[value-equivalence-principle]] says a model need only predict what the planner uses, and [[value-equivalence]] with [[muzero]] never reconstruct a pixel — yet [[diamond]] reports that visual detail directly improves policies, and [[iris]] leans on faithful token reconstruction. [[delta-iris]] splits the difference, keeping detail but slashing token budgets. When is reconstruction a useful auxiliary signal versus an expensive distraction from the decision-relevant quantities? The compute cost of fidelity makes this more than a philosophical question as world models scale.



---
*[[Home]] · maintained by an LLM per [[SCHEMA]]*
