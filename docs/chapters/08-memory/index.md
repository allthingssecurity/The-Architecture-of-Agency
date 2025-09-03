# Chapter 8

## Remembering and Forgetting: How Agents Manage Experience

Inspired by Human Memory Systems in Cognitive Neuroscience

Human intelligence relies on multiple memory systems and strategic forgetting. Agents need the same: memory bridges moments, connects experiences, and enables adaptation. Without it, an agent is a goldfish; with it, an agent is coherent and learning.

### Human Analogy: Different Kinds of Memory

- Working Memory (short-term focus): like an LLM’s context window.
- Episodic Memory (personal history): past conversations, tasks, actions.
- Semantic Memory (facts/knowledge): knowledge bases or vector stores.
- Procedural Memory (skills/habits): rules, prompts, refined behaviors.
- Forgetting (selective pruning): summarizing or discarding to stay efficient.

### Why Agents Need Memory

Memory supports long conversations, multi-step progress tracking, personalization, and learning from experience.

### Everyday Parallel

Like a teacher who knows each student’s history, an agent tutor adapts based on prior mistakes and concepts struggled with.

### Design Lessons for Agents

1. Balance immediacy and persistence.
2. Structure memory into layers.
3. Forgetting is essential for efficiency.
4. Memory enables identity and continuity.

### Simple Flow

```
user_input -> short_term_memory
if relevant: promote to long_term_memory
if outdated: summarize or discard
long_term_memory -> retrieved into short_term when needed
```

### Conclusion

Agents thrive by remembering enough to be coherent and adaptive, and forgetting enough to stay efficient.

