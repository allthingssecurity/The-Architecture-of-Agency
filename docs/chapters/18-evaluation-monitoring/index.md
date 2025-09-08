# Chapter 18

## Metacognition: Evaluation and Monitoring in Agents

<div style="margin: 1rem 0;">
  <video controls playsinline preload="metadata" style="width:100%;max-width:960px;border-radius:8px;background:#000;">
    <source src="AI_s_Metacognition.mp4?v=1" type="video/mp4">
    Your browser does not support the video tag. You can
    <a href="AI_s_Metacognition.mp4?v=1">download the MP4</a>.
  </video>
</div>

<!-- mindmap:start (remove this whole block to disable) -->

### Interactive Graph (beta)

<details open>
  <summary>Toggle graph</summary>

  <div class="dag-mindmap" id="dag-ch18"></div>
  <script type="application/json" id="dag-ch18-data">
  {
    "name": "Evaluation & Monitoring",
    "children": [
      {"name": "Neuroscience Analogy", "children": [
        {"name": "ACC: error/conflict"},
        {"name": "Dopamine: rewards"},
        {"name": "Working memory + monitoring"}
      ]},
      {"name": "Core Mechanisms", "children": [
        {"name": "Performance tracking"},
        {"name": "A/B testing"},
        {"name": "Compliance & safety"},
        {"name": "Drift detection"},
        {"name": "Anomaly detection"},
        {"name": "Learning progress"}
      ]},
      {"name": "Practice", "children": [
        {"name": "Accuracy, latency, cost"},
        {"name": "Helpfulness & trajectories"}
      ]},
      {"name": "Engineering Principle", "children": [
        {"name": "Unit reflection"},
        {"name": "Evalsets"},
        {"name": "Dashboards/logs"}
      ]},
      {"name": "Conclusion", "children": [
        {"name": "From black boxes to auditable systems"}
      ]}
    ]
  }
  </script>

</details>

<!-- mindmap:end -->
Metacognition monitors thinking. In brains, the ACC and PFC detect errors, evaluate outcomes, and refine strategies. Agents need continuous evaluation and monitoring to avoid drift and ensure reliability.

### Core Monitoring Mechanisms

1. Performance tracking (accuracy, latency, resource use).
2. A/B testing (strategy comparison).
3. Compliance & safety audits (policy checks).
4. Drift detection (environment sensitivity).
5. Anomaly detection (unexpected behaviors/tool calls).
6. Learning progress assessment (skill growth).

### Evaluation in Practice

Accuracy, latency, token/cost tracking, helpfulness (LLM‑as‑a‑judge), and trajectory analysis (reasoning steps, tool calls, decisions).

### Engineering Principle

- Unit reflection (tests), evalsets (scenarios), and dashboards/logs for systematic monitoring and auditing.

### Conclusion

Evaluation transforms agents from black boxes into transparent, auditable systems that can adapt and improve over time.
