# Chapter 16

## The Prefrontal Cortex of Agents: Reasoning Techniques

<div style="margin: 1rem 0;">
  <video controls playsinline preload="metadata" style="width:100%;max-width:960px;border-radius:8px;background:#000;">
    <source src="Agent_Reasoning__The_AI_PFC.mp4" type="video/mp4">
    <source src="Agent_Reasoning__The_AI_PFC.webm" type="video/webm">
    Your browser does not support the video tag. You can
    <a href="Agent_Reasoning__The_AI_PFC.mp4">download the MP4</a> or
    <a href="Agent_Reasoning__The_AI_PFC.webm">download the WebM</a>.
  </video>
</div>

<!-- mindmap:start (remove this whole block to disable) -->

### Interactive Graph (beta)

<details open>
  <summary>Toggle graph</summary>

  <div class="dag-mindmap" id="dag-ch16"></div>
  <script type="application/json" id="dag-ch16-data">
  {
    "name": "Reasoning Techniques (PFC)",
    "children": [
      {"name": "Neuroscience Analogy", "children": [
        {"name": "PFC working memory"},
        {"name": "Tree search (preplays)"},
        {"name": "Error monitoring (ACC)"},
        {"name": "Hybrid symbolic+neural"}
      ]},
      {"name": "Core Techniques", "children": [
        {"name": "Chain‑of‑Thought"},
        {"name": "Tree‑of‑Thought"},
        {"name": "Self‑Correction"},
        {"name": "Program‑Aided (code/symbols)"},
        {"name": "ReAct (tools in loop)"},
        {"name": "Collective reasoning"},
        {"name": "MASS (optimize prompts/topology)"}
      ]},
      {"name": "Scaling Inference", "children": [
        {"name": "Thinking budget → quality"}
      ]},
      {"name": "Applications", "children": [
        {"name": "QA, math/code, debugging"},
        {"name": "Planning, med/legal analysis"},
        {"name": "Deep research with time budgets"}
      ]},
      {"name": "Conclusion", "children": [
        {"name": "Make steps explicit to strengthen answers"}
      ]}
    ]
  }
  </script>

</details>

<!-- mindmap:end -->

Reasoning is the agent’s executive function — exposing intermediate steps, exploring alternatives, and refining outputs instead of answering in one shot.

### Neuroscience Analogy

- PFC working memory: mental scratchpads for intermediate steps.
- Tree search: hippocampal “preplays” of possible paths.
- Error monitoring: ACC triggers refinements.
- Hybrid symbolic+neural: program‑aided reasoning.

### Core Techniques

1. Chain‑of‑Thought (linear working memory).
2. Tree‑of‑Thought (branching exploration + selection).
3. Self‑Correction (meta‑reasoning loops).
4. Program‑Aided Reasoning (generate+execute code/symbols).
5. ReAct (thought–action–observation loops with tools).
6. Collective Reasoning (debate, chain/graph of agents).
7. MASS (optimize prompts and topology of agent collaboration).

### Scaling Inference: Thinking Budget

More compute/time at inference → better reasoning, sometimes surpassing larger models that answer instantly.

### Applications

Complex QA, math/code, debugging, strategic planning, medical/legal analysis, deep research with time budgets.

### Conclusion

Reasoning techniques turn pattern‑matching into deliberate, transparent problem‑solving — the agent analogue of the PFC.
