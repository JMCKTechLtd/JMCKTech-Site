// js/ui-layout.js

export function initLayout(engine) {
  const tabs = Array.from(document.querySelectorAll('#module-tabs .tab'));

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const moduleId = tab.dataset.module;  // core, ad, exchange, server, networking, sql
      engine.setModule(moduleId);

      // Swap toolbox
      const toolboxId = `toolbox-${moduleId}`;
      engine.setToolboxById(toolboxId);

      // Clear workspace when switching module
      if (engine.workspace) {
        engine.workspace.clear();
      }
    });
  });

  window.addEventListener('resize', () => {
    if (engine.workspace) {
      engine.workspace.resizeContents();
    }
  });
}
