// ui-layout.js
// Handles tabs and simple layout behaviour

export function initLayout(engine) {
  // Module tabs
  const tabs = Array.from(document.querySelectorAll('#module-tabs .tab'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const moduleId = tab.dataset.module;
      engine.setModule(moduleId);

      // Clear search input when switching modules
      const searchInput = document.getElementById('block-search');
      if (searchInput) {
        searchInput.value = '';
      }
    });
  });

  // Resize handling
  window.addEventListener('resize', () => {
    if (engine.workspace) {
      Blockly.svgResize(engine.workspace);
    }
  });
}