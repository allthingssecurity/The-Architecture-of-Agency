# Chapter 6

## The Brain’s Forward Simulation: How Agents Learn to Look Ahead

<div style="margin: 1rem 0;">
  <video controls playsinline preload="metadata" style="width:100%;max-width:960px;border-radius:8px;background:#000;">
    <source src="AI_Learns_to_Look_Ahead.mp4" type="video/mp4">
    Your browser does not support the video tag. You can
    <a href="AI_Learns_to_Look_Ahead.mp4">download the MP4</a>.
  </video>
</div>

<!-- mindmap:start (remove this whole block to disable) -->

### Interactive Graph (beta)

<details open>
  <summary>Toggle graph</summary>

  <div class="dag-mindmap" id="dag-ch6"></div>
  <script type="application/json" id="dag-ch6-data">
  {
    "name": "Forward Simulation",
    "children": [
      {"name": "Brain’s Analogy", "children": [
        {"name": "PFC: goals & control"},
        {"name": "Hippocampus: replays futures"},
        {"name": "ACC: conflict monitoring"}
      ]},
      {"name": "Why It Matters", "children": [
        {"name": "Map state → goal → subgoals"},
        {"name": "What‑if checks & replans"}
      ]},
      {"name": "Real-World Scenarios", "children": [
        {"name": "Workflows (dependencies)"},
        {"name": "Robotics (obstacles)"},
        {"name": "Research (outline → execute)"},
        {"name": "Support (troubleshoot → escalate)"}
      ]},
      {"name": "Sketch", "children": [
        {"name": "assess → decompose → simulate → choose"}
      ]},
      {"name": "Design Lessons", "children": [
        {"name": "Foresight is essential"},
        {"name": "Flexibility over rigidity"},
        {"name": "Use planning when how isn’t obvious"},
        {"name": "Integrate memory, tools, reflection"}
      ]},
      {"name": "Conclusion", "children": [
        {"name": "Reactive → strategic partner"}
      ]}
    ]
  }
  </script>

</details>

<!-- mindmap:end -->

Inspired by Prefrontal Cortex Foresight and Cognitive Control

Planning is running mental simulations before acting. The prefrontal cortex holds goals, the hippocampus replays past experiences as futures, and the ACC monitors conflicts. Agents need the same: decompose large goals into sub-goals, simulate pathways, and adapt as constraints change.

### Why Forward Simulation Matters

Example: “Organize a three-day team offsite within budget, including travel, lodging, and activities.” The agent should:

1. Map current state (budget, participants, dates).
2. Envision goal (successful offsite).
3. Break into steps (venue → travel → catering → activities).
4. Run what-if checks.
5. Adjust plan while moving toward the goal.

### Sketch of the Pattern

```python
def plan(goal, constraints):
    state = assess_current_state()
    subgoals = decompose(goal)
    plan = []
    for subgoal in subgoals:
        actions = simulate_actions(subgoal, constraints)
        best_action = choose(actions)
        plan.append(best_action)
    return plan
```

### Design Lessons

1. Foresight Is Essential.
2. Prefer Flexibility Over Rigidity.
3. Use Planning when “how” isn’t obvious.
4. Integrate with memory, tools, and reflection.

### Conclusion

Forward simulation turns reactive responders into strategic partners that can adapt while keeping goals in sight.
