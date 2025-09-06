/* Mermaid init for interactive mindmaps and diagrams */
;(() => {
  const init = () => {
    if (window.mermaid && typeof window.mermaid.initialize === 'function') {
      window.mermaid.initialize({ startOnLoad: true, securityLevel: 'loose' });
    }
  };
  // Run on load and after SPA navigations (MkDocs Material)
  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('readystatechange', init);
  window.addEventListener('load', init);
})();

