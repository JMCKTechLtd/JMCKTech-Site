// blockshell-engine.js - UPDATED FOR CORE + AD + EXCHANGE ONLINE ONLY
export class BlockShellEngine {
  constructor() {
    this.workspace = null;
    this.generators = {};
    this.allBlocks = {};
    this.currentModule = 'core';
  }

  init({ blocklyDivId, toolboxId }) {
    const toolboxEl = document.getElementById(toolboxId);
    
    if (!toolboxEl) {
      console.error('Toolbox element not found!');
      return;
    }

    console.log('Initializing Blockly workspace...');
    
    this.workspace = Blockly.inject(blocklyDivId, {
      toolbox: toolboxEl,
      scrollbars: true,
      trashcan: true,
      grid: { 
        spacing: 25, 
        length: 3, 
        colour: '#e0e0e0', 
        snap: true 
      },
      zoom: { 
        controls: false, 
        wheel: true, 
        startScale: 1.0, 
        maxScale: 3, 
        minScale: 0.3,
        scaleSpeed: 1.2
      },
      theme: Blockly.Themes.Classic
    });

    if (!this.workspace) {
      console.error('Failed to create Blockly workspace!');
      return;
    }

    console.log('Workspace created successfully');

    // Zoom controls
    document.getElementById('zoom-in')?.addEventListener('click', () => {
      this.workspace.zoomCenter(1.2);
    });
    
    document.getElementById('zoom-out')?.addEventListener('click', () => {
      this.workspace.zoomCenter(0.8);
    });
    
    document.getElementById('reset-zoom-btn')?.addEventListener('click', () => {
      this.workspace.setScale(1.0);
      this.workspace.scrollCenter();
    });

    // Buttons
    document.getElementById('clear-workspace-btn')?.addEventListener('click', () => {
      this.workspace.clear();
      this.showNotification('Workspace cleared');
    });
    
    document.getElementById('show-script-btn')?.addEventListener('click', () => {
      this.showScriptModal();
    });
  }

  switchModule(moduleId) {
    if (!this.workspace) {
      console.error('Cannot switch module: workspace not initialized');
      return;
    }

    this.currentModule = moduleId;
    console.log(`Building toolbox for module: ${moduleId}`);
    
    // Build toolbox XML dynamically
    let toolboxXml = '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">';
    
    // Always include Core blocks
    toolboxXml += '<category name="Core – Basics" colour="210">';
    toolboxXml += '<block type="ps_write_output"></block>';
    toolboxXml += '<block type="ps_set_variable"></block>';
    toolboxXml += '<block type="ps_get_process"></block>';
    toolboxXml += '<block type="ps_get_service"></block>';
    toolboxXml += '<block type="ps_restart_service"></block>';
    toolboxXml += '</category>';
    
    toolboxXml += '<category name="Core – Files" colour="230">';
    toolboxXml += '<block type="ps_get_child_item"></block>';
    toolboxXml += '<block type="ps_new_item"></block>';
    toolboxXml += '<block type="ps_remove_item"></block>';
    toolboxXml += '</category>';
    
    // Add module-specific blocks - ONLY AD and Exchange Online
    if (moduleId !== 'core' && this.allBlocks[moduleId]) {
      const moduleNameMap = {
        'ad': 'Active Directory',
        'exchange': 'Exchange Online'
      };
      
      const moduleName = moduleNameMap[moduleId] || moduleId;
      const moduleBlocks = this.allBlocks[moduleId];
      
      console.log(`Adding ${moduleBlocks.length} blocks for ${moduleName}`);
      
      toolboxXml += `<category name="${moduleName}" colour="300">`;
      moduleBlocks.forEach(block => {
        toolboxXml += `<block type="${block.type}"></block>`;
      });
      toolboxXml += '</category>';
    }
    
    toolboxXml += '</xml>';
    
    console.log('Updating workspace toolbox...');
    this.workspace.updateToolbox(toolboxXml);
    console.log('Toolbox updated successfully');
  }

  filterToolbox(query) {
    if (!this.workspace) {
      console.error('Cannot filter: workspace not initialized');
      return;
    }

    const q = (query || '').trim().toLowerCase();

    // No search query → reset to current module
    if (!q) {
      this.switchModule(this.currentModule);
      return;
    }

    console.log(`Filtering toolbox with query: "${q}"`);

    // Build filtered toolbox
    let toolboxXml = '<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">';
    
    // Filter Core blocks
    const coreBlocks = this.allBlocks.core || [];
    const matchingCoreBlocks = coreBlocks.filter(block => {
      const searchText = [
        block.type,
        block.message0 || '',
        block.tooltip || ''
      ].join(' ').toLowerCase();
      return searchText.includes(q);
    });

    if (matchingCoreBlocks.length > 0) {
      toolboxXml += '<category name="Core – Basics" colour="210">';
      matchingCoreBlocks.forEach(block => {
        toolboxXml += `<block type="${block.type}"></block>`;
      });
      toolboxXml += '</category>';
    }

    // Filter current module blocks (if not core) - ONLY AD and Exchange Online
    if (this.currentModule !== 'core' && this.allBlocks[this.currentModule]) {
      const moduleBlocks = this.allBlocks[this.currentModule];
      const matchingModuleBlocks = moduleBlocks.filter(block => {
        const searchText = [
          block.type,
          block.message0 || '',
          block.tooltip || ''
        ].join(' ').toLowerCase();
        return searchText.includes(q);
      });

      if (matchingModuleBlocks.length > 0) {
        const moduleNameMap = {
          'ad': 'Active Directory',
          'exchange': 'Exchange Online'
        };
        const moduleName = moduleNameMap[this.currentModule] || this.currentModule;
        
        toolboxXml += `<category name="${moduleName}" colour="300">`;
        matchingModuleBlocks.forEach(block => {
          toolboxXml += `<block type="${block.type}"></block>`;
        });
        toolboxXml += '</category>';
      }
    }

    toolboxXml += '</xml>';

    console.log('Updating toolbox with filtered results...');
    this.workspace.updateToolbox(toolboxXml);
  }

  showScriptModal() {
    const code = this.generateCode();
    
    if (!code || code.trim() === '' || code.split('\n').length <= 3) {
      this.showNotification('No blocks to generate script. Drag some blocks to the workspace first!');
      return;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Header
    const header = document.createElement('div');
    header.className = 'modal-header';
    
    const title = document.createElement('h3');
    title.className = 'modal-title';
    title.textContent = 'Generated PowerShell Script';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => {
      document.body.removeChild(modal);
    };
    
    header.appendChild(title);
    header.appendChild(closeBtn);
    
    // Code block
    const codeBlock = document.createElement('div');
    codeBlock.className = 'code-block';
    
    const pre = document.createElement('pre');
    pre.textContent = code;
    pre.style.margin = '0';
    pre.style.whiteSpace = 'pre-wrap';
    pre.style.wordBreak = 'break-word';
    
    // Try to use highlight.js if available
    if (window.hljs) {
      try {
        hljs.highlightElement(pre);
      } catch (e) {
        console.log('Highlight.js not available, using plain text');
      }
    }
    
    codeBlock.appendChild(pre);
    
    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy to Clipboard';
    copyBtn.className = 'ghost';
    copyBtn.style.marginTop = '8px';
    
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(code).then(() => {
        this.showNotification('Script copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy:', err);
        this.showNotification('Failed to copy to clipboard');
      });
    };
    
    // Assemble modal
    modalContent.appendChild(header);
    modalContent.appendChild(codeBlock);
    modalContent.appendChild(copyBtn);
    modal.appendChild(modalContent);
    
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });
  }

  generateCode() {
    if (!this.workspace) return '';
    
    const blocks = this.workspace.getTopBlocks(true);
    let code = `# Generated by BlockShell Lite\n`;
    code += `# Module: ${this.currentModule}\n`;
    code += `# Date: ${new Date().toLocaleString()}\n\n`;
    
    // Add required module imports based on current module
    if (this.currentModule === 'ad') {
      code += `# Import Active Directory module\nImport-Module ActiveDirectory\n\n`;
    } else if (this.currentModule === 'exchange') {
      code += `# Connect to Exchange Online (run once)\n# Connect-ExchangeOnline -UserPrincipalName admin@domain.com\n\n`;
    }
    
    blocks.forEach(block => {
      code += this.generateBlockCode(block);
    });
    
    return code;
  }

  generateBlockCode(block) {
    if (!block) return '';
    
    let code = '';
    const gen = this.generators[block.type];
    
    if (gen && typeof gen === 'function') {
      try {
        code += gen(block);
      } catch (e) {
        console.error(`Error generating code for block ${block.type}:`, e);
      }
    }
    
    const next = block.getNextBlock();
    if (next) {
      code += this.generateBlockCode(next);
    }
    
    return code;
  }

  showNotification(msg) {
    const n = document.createElement('div');
    n.className = 'notification show';
    n.textContent = msg;
    document.body.appendChild(n);
    
    setTimeout(() => {
      n.classList.remove('show');
      setTimeout(() => n.remove(), 300);
    }, 2500);
  }
}