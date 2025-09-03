# Chapter 9

## Learning and Adaptation: How Agents Reshape Themselves Through Experience

Inspired by Neuroplasticity, Reward Signals, and Adaptive Cognition

Intelligence is the capacity to change. The brain adapts through reinforcement signals, supervised learning, unsupervised discovery, few-shot generalization, online learning, and memory-based recall. Agents need similar mechanisms to avoid brittleness and grow with their environment.

### Why Adaptation Matters

Adaptation enables agents to adjust to new data, personalize to users, learn from mistakes, and handle uncertainty.

### Case Study: Self-Improving Coding Agent (SICA)

- Evaluates past versions of its code against benchmarks.
- Selects best variants and edits its own source.
- Tests new versions, records results, and repeats.
- Evolved from crude overwrites to smart editing (AST, navigation, avoidance of wasteful edits).

### Case Study: AlphaEvolve

- Generates algorithmic hypotheses; tests and retains the best.
- Discovered new methods (e.g., matrix multiplication) and optimized scheduling.
- Embodies population-level evolution: many minds exploring in parallel.

### Design Lessons

1. Learning is layered (reinforcement, supervision, unsupervised, memory-based).
2. Adaptation is continuous (online learning and incremental updates).
3. Self-modification unlocks growth.
4. Evolution scales beyond individuals.

### Simple Loop

```
observe → evaluate → modify → test → remember → repeat
```

### Conclusion

Learning and adaptation transform agents from static executors into living processes that improve over time.

