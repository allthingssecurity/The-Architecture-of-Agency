# Chapter 11

## The Prefrontal Cortex of Agents: How Goals and Feedback Drive Intelligent Behavior

<div style="margin: 1rem 0;">
  <video controls playsinline preload="metadata" style="width:100%;max-width:960px;border-radius:8px;background:#000;">
    <source src="The_AI_s_Executive_Brain.mp4" type="video/mp4">
    Your browser does not support the video tag. You can
    <a href="The_AI_s_Executive_Brain.mp4">download the MP4</a>.
  </video>
</div>

<!-- mindmap:start (remove this whole block to disable) -->

### Interactive Graph (beta)

<details open>
  <summary>Toggle graph</summary>

  <div class="dag-mindmap" id="dag-ch11"></div>
  <script type="application/json" id="dag-ch11-data">
  {
    "name": "Goals & Feedback",
    "children": [
      {"name": "Human Analogy", "children": [
        {"name": "Goal setting (PFC)"},
        {"name": "Monitoring (ACC)"},
        {"name": "Feedback (dopamine)"}
      ]},
      {"name": "Translating to Agents", "children": [
        {"name": "Goal → subgoals"},
        {"name": "Progress tracking"},
        {"name": "Replanning on failure"}
      ]},
      {"name": "Applications", "children": [
        {"name": "Support, tutoring, trading"},
        {"name": "Autonomy, PM"}
      ]},
      {"name": "Design Lessons", "children": [
        {"name": "SMART goals"},
        {"name": "Continuous feedback"},
        {"name": "Role separation"},
        {"name": "Failures → replans"}
      ]},
      {"name": "Conclusion", "children": [
        {"name": "From reactive to purposeful"}
      ]}
    ]
  }
  </script>

</details>

<!-- mindmap:end -->

Brains are purpose-driven. The prefrontal cortex (PFC) sets goals, plans, monitors progress, and adjusts to feedback. Agents need an equivalent Goal Setting and Monitoring pattern to move from reactive to proactive.

### Human Analogy

- Goal Setting: “Master calculus in two weeks.”
- Planning: Subgoals — integrals, practice, mocks.
- Monitoring: Notice when stuck or behind.
- Feedback Loop: Success strengthens strategy; failures trigger adjustment.

### Translating to Agents

- Goal = final objective.
- Subgoals = decomposition.
- Monitoring = progress tracking and feedback signals.
- Adjustment = replanning on failures.

### Practical Applications

Customer support resolution, personalized tutoring, trading bots (risk vs. gain), autonomous navigation, and project management.

### Code as Synthetic PFC

Self-reviewing agents that iterate until criteria are met implement the PFC loop: define goals → draft → monitor feedback → refine → stop on success.

### Key Design Lessons

1. Use SMART goals.
2. Keep feedback loops continuous.
3. Separate roles (planner, reviewer, tester) to reduce self-blindness.
4. Treat failures as replanning signals.

### Conclusion

Goal setting and monitoring turn raw intelligence into purposeful, self-correcting action.
