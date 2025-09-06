/* D3 collapsible left-to-right DAG/Tree for chapter mindmaps */
;(() => {
  function renderDAG(container) {
    const dataScript = container.nextElementSibling;
    if (!dataScript || dataScript.tagName !== 'SCRIPT') return;
    let data;
    try { data = JSON.parse(dataScript.textContent); } catch { return; }

    // Clear any previous content
    container.innerHTML = '';

    // Dimensions
    const width = container.clientWidth || 800;
    const dx = 24;           // vertical separation
    const dy = 180;          // horizontal separation per depth
    let root = d3.hierarchy(data);

    // Collapse helper
    root.x0 = 0;
    root.y0 = 0;
    root.each(d => {
      d.name = d.data.name;
      if (d.depth > 1 && d.children) {
        d._children = d.children;
        d.children = null;
      }
    });

    const tree = d3.tree().nodeSize([dx, dy]);
    tree(root);

    // Compute height based on node count
    let x0 = Infinity; let x1 = -x0;
    root.each(d => { if (d.x > x1) x1 = d.x; if (d.x < x0) x0 = d.x; });
    const height = Math.max(300, x1 - x0 + dx * 4);

    const svg = d3.select(container)
      .append('svg')
      .attr('viewBox', [ -40, x0 - dx, width + 80, height ])
      .style('width', '100%')
      .style('height', 'auto')
      .style('maxHeight', '80vh')
      .style('background', 'transparent')
      .style('font', '14px Inter, Roboto, system-ui, sans-serif')
      .style('color', '#222');

    const gLink = svg.append('g').attr('fill', 'none').attr('stroke', '#bbb').attr('stroke-opacity', 0.8).attr('stroke-width', 1.5);
    const gNode = svg.append('g').attr('cursor', 'pointer');

    function update(source) {
      tree(root);
      let nodes = root.descendants();
      let links = root.links();

      // Normalize for fixed-depth horizontal spacing
      nodes.forEach(d => d.y = d.depth * dy);

      const transition = svg.transition().duration(250);

      // Update links
      const link = gLink.selectAll('path').data(links, d => d.target.id || (d.target.id = Math.random().toString(36).slice(2)));
      const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);
      link.join(
        enter => enter.append('path').attr('d', diagonal),
        update => update,
        exit => exit.remove()
      ).transition(transition).attr('d', diagonal);

      // Update nodes
      const node = gNode.selectAll('g').data(nodes, d => d.id || (d.id = Math.random().toString(36).slice(2)));
      const nodeEnter = node.enter().append('g')
        .attr('transform', d => `translate(${source.y0},${source.x0})`)
        .on('click', (event, d) => {
          d.children = d.children ? null : d._children || d.children;
          if (!d.children && d._children) { d.children = d._children; d._children = null; }
          else if (d.children && !d._children && d.data.children) { d._children = d.children; d.children = null; }
          update(d);
        });

      nodeEnter.append('circle')
        .attr('r', 6)
        .attr('fill', d => d.children || d._children ? '#1976d2' : '#fff')
        .attr('stroke', '#1976d2')
        .attr('stroke-width', 2);

      nodeEnter.append('text')
        .attr('dy', '0.32em')
        .attr('x', d => d.children || d._children ? 10 : 10)
        .attr('text-anchor', 'start')
        .attr('fill', '#111')
        .text(d => d.data.name)
        .clone(true).lower().attr('stroke', '#fff').attr('stroke-width', 3).attr('stroke-opacity', 0.7);

      const nodeUpdate = nodeEnter.merge(node);
      nodeUpdate.transition(transition).attr('transform', d => `translate(${d.y},${d.x})`);
      node.exit().transition(transition).remove();

      // Stash old positions
      root.each(d => { d.x0 = d.x; d.y0 = d.y; });
    }

    update(root);

    // Zoom + pan
    const zoom = d3.zoom().scaleExtent([0.5, 2]).on('zoom', (event) => {
      gLink.attr('transform', event.transform);
      gNode.attr('transform', event.transform);
    });
    svg.call(zoom);
  }

  const init = () => {
    document.querySelectorAll('.dag-mindmap').forEach(renderDAG);
  };
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', init);
})();

