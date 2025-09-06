# Chapter 9

## Learning and Adaptation: How Agents Reshape Themselves Through Experience

<div style="margin: 1rem 0;">
  <video controls playsinline preload="metadata" style="width:100%;max-width:960px;border-radius:8px;background:#000;">
    <source src="Agent_Learning_%26_Adaptation.mp4" type="video/mp4">
    Your browser does not support the video tag. You can
    <a href="Agent_Learning_%26_Adaptation.mp4">download the MP4</a>.
  </video>
</div>

<!-- mindmap:start (remove this whole block to disable) -->

### Interactive Graph (beta)

<details open>
  <summary>Toggle graph</summary>

  <div class="dag-mindmap" id="dag-ch9"></div>
  <script type="application/json" id="dag-ch9-data">
  {
    "name": "Learning & Adaptation",
    "children": [
      {"name": "Brain Analogy", "children": [
        {"name": "Reinforcement (dopamine)"},
        {"name": "Supervised & unsupervised"},
        {"name": "Few‑shot & online"},
        {"name": "Memory‑based recall"}
      ]},
      {"name": "Why It Matters", "children": [
        {"name": "Adjust to new data"},
        {"name": "Personalize"},
        {"name": "Improve with feedback"},
        {"name": "Handle uncertainty"}
      ]},
      {"name": "Case Studies", "children": [
        {"name": "SICA (self‑modifying coder)"},
        {"name": "AlphaEvolve (evolution)"}
      ]},
      {"name": "Loop", "children": [
        {"name": "observe → evaluate → modify → test → remember"}
      ]},
      {"name": "Design Lessons", "children": [
        {"name": "Layered learning"},
        {"name": "Continuous adaptation"},
        {"name": "Self‑modification"},
        {"name": "Population‑level evolution"}
      ]},
      {"name": "Conclusion", "children": [
        {"name": "From static to living processes"}
      ]}
    ]
  }
  </script>

</details>

<!-- mindmap:end -->

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
