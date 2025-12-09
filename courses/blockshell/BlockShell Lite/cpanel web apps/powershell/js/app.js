// js/app.js
import { BlockShellEngine } from './blockshell-engine.js';
import { initLayout } from './ui-layout.js';

import { registerCoreModule } from './modules/core-powershell.js';
import { registerAdModule } from './modules/ad-powershell.js';
import { registerExchangeModule } from './modules/exchange-powershell.js';
import { registerServerModule } from './modules/server-powershell.js';
import { registerNetworkingModule } from './modules/networking-powershell.js';
import { registerSqlModule } from './modules/sql-powershell.js';

const engine = new BlockShellEngine();

window.addEventListener('DOMContentLoaded', () => {
  // Default module + toolbox
  engine.init({
    blocklyDivId: 'blocklyDiv',
    toolboxId: 'toolbox-core'
  });

  // Register all modules
  registerCoreModule(engine);
  registerAdModule(engine);
  registerExchangeModule(engine);
  registerServerModule(engine);
  registerNetworkingModule(engine);
  registerSqlModule(engine);

  // Layout (tabs + resize)
  initLayout(engine);

  // Search
  const searchInput = document.getElementById('block-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      engine.filterToolbox(e.target.value);
    });
  }
});
