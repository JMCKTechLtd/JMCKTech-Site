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
      // NOTE: right now toolbox is still shared.
      // Later we can swap toolbox XML per module if you want.
    });
  });

  // Resize handling if needed later
  window.addEventListener('resize', () => {
    if (engine.workspace) {
      engine.workspace.resizeContents();
    }
  });
}
