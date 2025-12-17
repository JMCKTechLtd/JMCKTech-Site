/**
 * BlockShell - PowerShell Visual Builder
 * Core Application Logic
 */

const BlockShell = {
  workspace: null,
  currentModule: 'active-directory',
  searchIndex: [],
  codeGenerators: {},
  isInitialized: false,
  
  init: function() {
    if (this.isInitialized) return;
    
    console.log('Initializing BlockShell...');
    
    // Initialize workspace first
    this.initializeWorkspace();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Mark as initialized
    this.isInitialized = true;
    
    console.log('BlockShell initialized successfully');
    this.showNotification('BlockShell PowerShell Lite loaded successfully!', 'success');
  },
  
  initializeWorkspace: function() {
    console.log('Initializing Blockly workspace...');
    
    // Create toolbox XML
    const toolboxXml = document.getElementById('toolbox');
    
    // Initialize Blockly workspace
    this.workspace = Blockly.inject('blocklyDiv', {
      toolbox: toolboxXml,
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
    
    // Override theme colors for categories
    this.applyCustomTheme();
    
    // Set up zoom controls
    document.getElementById('zoom-in').addEventListener('click', () => {
      this.workspace.zoomCenter(1.2);
    });
    
    document.getElementById('zoom-out').addEventListener('click', () => {
      this.workspace.zoomCenter(0.8);
    });
    
    // Listen for workspace changes
    this.workspace.addChangeListener(() => {
      // Update any UI based on workspace state
    });
    
    console.log('Workspace initialized with', this.workspace.getAllBlocks().length, 'blocks available');
  },
  
  applyCustomTheme: function() {
    // Apply custom colors to blocks based on their category
    const style = document.createElement('style');
    style.textContent = `
      .blocklyTreeLabel { font-family: 'Segoe UI', sans-serif; }
      .blocklyText { font-family: 'Segoe UI', sans-serif; }
      
      /* User Management blocks */
      .blocklyBlockBackground[fill="#AAAAAA"] { fill: #4C97FF !important; }
      .blocklyPathLight[fill="#B0B0B0"] { fill: #4280D7 !important; }
      .blocklyPathDark[fill="#8C8C8C"] { fill: #3373CC !important; }
      
      /* Group Management blocks */
      .blocklyBlockBackground[fill="#AAAAAA"] { fill: #0fBD8C !important; }
      .blocklyPathLight[fill="#B0B0B0"] { fill: #0DA57A !important; }
      .blocklyPathDark[fill="#8C8C8C"] { fill: #0B8E69 !important; }
    `;
    document.head.appendChild(style);
  },
  
  setupEventListeners: function() {
    console.log('Setting up event listeners...');
    
    // Module selector
    document.getElementById('module-select').addEventListener('change', (e) => {
      this.switchModule(e.target.value);
    });
    
    // Generate script button
    document.getElementById('btn-generate').addEventListener('click', () => {
      this.generateScript();
    });
    
    // Clear workspace button
    document.getElementById('btn-clear').addEventListener('click', () => {
      this.clearWorkspace();
    });
    
    // Save script button
    document.getElementById('btn-save').addEventListener('click', () => {
      this.saveWorkspace();
    });
    
    // Examples button
    document.getElementById('btn-examples').addEventListener('click', () => {
      this.loadExample();
    });
    
    // Search functionality
    const searchInput = document.getElementById('block-search');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', (e) => {
      this.handleSearch(e.target.value);
    });
    
    searchInput.addEventListener('focus', () => {
      if (searchResults.innerHTML.trim()) {
        searchResults.style.display = 'block';
      }
    });
    
    // Close search when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-wrapper')) {
        searchResults.style.display = 'none';
      }
    });
    
    // Click on search result
    searchResults.addEventListener('click', (e) => {
      const item = e.target.closest('.search-result-item');
      if (item && item.dataset.blockType) {
        this.addBlockToWorkspace(item.dataset.blockType);
        searchInput.value = '';
        searchResults.style.display = 'none';
      }
    });
    
    // Modal controls
    document.querySelector('.close-btn').addEventListener('click', () => {
      this.hideModal();
    });
    
    document.getElementById('btn-copy').addEventListener('click', () => {
      this.copyToClipboard();
    });
    
    document.getElementById('btn-download').addEventListener('click', () => {
      this.downloadScript();
    });
    
    // Close modal when clicking outside
    document.getElementById('code-modal').addEventListener('click', (e) => {
      if (e.target.id === 'code-modal') {
        this.hideModal();
      }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideModal();
        searchResults.style.display = 'none';
      }
    });
    
    console.log('Event listeners set up');
  },
  
  switchModule: function(moduleName) {
    if (moduleName === 'active-directory') {
      this.showNotification('Active Directory module active', 'success');
      this.currentModule = 'active-directory';
    } else if (moduleName === 'powershell-core') {
      this.showNotification('PowerShell Core module active', 'success');
      this.currentModule = 'powershell-core';
    } else {
      this.showNotification(`${moduleName} module coming soon!`, 'warning');
    }
  },
  
  addToSearchIndex: function(blockData) {
    // Avoid duplicates
    if (!this.searchIndex.find(item => item.type === blockData.type)) {
      this.searchIndex.push(blockData);
    }
  },
  
  handleSearch: function(query) {
    const searchTerm = query.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results');
    
    if (!searchTerm) {
      resultsContainer.innerHTML = '';
      resultsContainer.style.display = 'none';
      return;
    }
    
    // Filter search index
    const results = this.searchIndex.filter(item => {
      const searchableText = [
        item.name,
        item.category,
        item.description || '',
        ...(item.keywords || [])
      ].join(' ').toLowerCase();
      
      return searchableText.includes(searchTerm);
    });
    
    // Display results
    this.displaySearchResults(results);
  },
  
  displaySearchResults: function(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
      const noResult = document.createElement('div');
      noResult.className = 'search-result-item';
      noResult.textContent = 'No commands found';
      resultsContainer.appendChild(noResult);
    } else {
      // Group by category
      const groupedResults = {};
      results.forEach(result => {
        if (!groupedResults[result.category]) {
          groupedResults[result.category] = [];
        }
        groupedResults[result.category].push(result);
      });
      
      // Add to container
      Object.keys(groupedResults).forEach(category => {
        // Category header
        const header = document.createElement('div');
        header.className = 'search-category-header';
        header.textContent = category;
        resultsContainer.appendChild(header);
        
        // Items in this category
        groupedResults[category].forEach(result => {
          const item = document.createElement('div');
          item.className = 'search-result-item';
          item.dataset.blockType = result.type;
          item.innerHTML = `
            <div class="search-result-content">
              <div class="search-result-name">${result.name}</div>
              <div class="search-result-description">${result.description || ''}</div>
            </div>
            <span class="search-result-badge">${result.category}</span>
          `;
          resultsContainer.appendChild(item);
        });
      });
    }
    
    resultsContainer.style.display = 'block';
  },
  
  addBlockToWorkspace: function(blockType) {
    try {
      if (!this.workspace) {
        this.showNotification('Workspace not initialized', 'error');
        return;
      }
      
      console.log('Adding block:', blockType);
      
      // Create and position the block
      const block = this.workspace.newBlock(blockType);
      
      // Initialize with default values if they exist
      if (block.inputList && block.inputList[0]) {
        const fieldRow = block.inputList[0].fieldRow;
        if (fieldRow) {
          fieldRow.forEach(field => {
            if (field.name && field.setText && field.text_) {
              field.setText(field.text_);
            }
          });
        }
      }
      
      block.initSvg();
      block.render();
      
      // Position near center
      const metrics = this.workspace.getMetrics();
      const x = Math.max(50, metrics.viewWidth / 3 - 100);
      const y = Math.max(50, metrics.viewHeight / 3 - 50);
      
      block.moveBy(x, y);
      this.workspace.render();
      
      this.showNotification(`Added ${blockType} to workspace`, 'success');
    } catch (error) {
      console.error('Error adding block:', error);
      this.showNotification(`Error: Could not add block "${blockType}"`, 'error');
    }
  },
  
  registerCodeGenerator: function(blockType, generatorFunction) {
    this.codeGenerators[blockType] = generatorFunction;
  },
  
  generateScript: function() {
    try {
      const blocks = this.workspace.getTopBlocks(true);
      
      if (!blocks || blocks.length === 0) {
        this.showNotification('No blocks in workspace. Add some blocks first.', 'warning');
        return;
      }
      
      console.log('Generating script from', blocks.length, 'blocks');
      
      let code = `# Generated by BlockShell PowerShell Lite\n`;
      code += `# Date: ${new Date().toLocaleString()}\n`;
      code += `# Module: ${this.currentModule}\n`;
      code += `# Total Blocks: ${blocks.length}\n`;
      code += `\n`;
      
      // Generate code from all blocks
      blocks.forEach((block, index) => {
        const blockCode = this.generateBlockCode(block);
        if (blockCode && blockCode.trim()) {
          code += `# Block ${index + 1}: ${block.type}\n`;
          code += blockCode + '\n\n';
        }
      });
      
      // Show in modal
      this.showCodeModal(code);
      
    } catch (error) {
      console.error('Error generating script:', error);
      this.showNotification('Error generating script: ' + error.message, 'error');
    }
  },
  
  generateBlockCode: function(block) {
    const blockType = block.type;
    
    // Check if we have a registered generator
    if (this.codeGenerators[blockType]) {
      try {
        return this.codeGenerators[blockType](block);
      } catch (error) {
        console.error(`Error in generator for ${blockType}:`, error);
        return `# Error generating code for ${blockType}\n`;
      }
    }
    
    // Fallback: Extract field values
    let code = `# ${blockType}\n`;
    
    try {
      if (block.inputList && block.inputList[0]) {
        const fields = [];
        block.inputList[0].fieldRow.forEach(field => {
          if (field.name && field.getValue) {
            fields.push(`${field.name}="${field.getValue()}"`);
          }
        });
        if (fields.length > 0) {
          code += `# Fields: ${fields.join(', ')}\n`;
        }
      }
    } catch (error) {
      // Ignore field extraction errors
    }
    
    return code;
  },
  
  showCodeModal: function(code) {
    const modal = document.getElementById('code-modal');
    const codeElement = document.getElementById('generated-code');
    
    codeElement.textContent = code;
    
    // Highlight the code
    if (hljs) {
      hljs.highlightElement(codeElement);
    }
    
    modal.classList.add('active');
    
    // Focus the modal for accessibility
    setTimeout(() => {
      const closeBtn = modal.querySelector('.close-btn');
      if (closeBtn) closeBtn.focus();
    }, 100);
  },
  
  hideModal: function() {
    document.getElementById('code-modal').classList.remove('active');
  },
  
  copyToClipboard: function() {
    const code = document.getElementById('generated-code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
      this.showNotification('Code copied to clipboard!', 'success');
    }).catch(err => {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        this.showNotification('Code copied to clipboard!', 'success');
      } catch (err) {
        this.showNotification('Failed to copy: ' + err.message, 'error');
      }
      document.body.removeChild(textArea);
    });
  },
  
  downloadScript: function() {
    const code = document.getElementById('generated-code').textContent;
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const time = new Date().toTimeString().slice(0, 8).replace(/:/g, '');
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `blockshell-script-${date}-${time}.ps1`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    this.showNotification('Script downloaded as PS1 file!', 'success');
  },
  
  clearWorkspace: function() {
    if (confirm('Are you sure you want to clear the workspace? All unsaved work will be lost.')) {
      this.workspace.clear();
      this.showNotification('Workspace cleared', 'success');
    }
  },
  
  saveWorkspace: function() {
    try {
      const xml = Blockly.Xml.workspaceToDom(this.workspace);
      const xmlText = Blockly.Xml.domToText(xml);
      localStorage.setItem('blockshell-workspace-backup', xmlText);
      this.showNotification('Workspace saved to browser storage', 'success');
    } catch (error) {
      console.error('Error saving workspace:', error);
      this.showNotification('Error saving workspace', 'error');
    }
  },
  
  loadExample: function() {
    if (confirm('Load example workflow? This will replace your current workspace.')) {
      this.clearWorkspace();
      
      setTimeout(() => {
        // Create an example workflow
        try {
          // Create AD User
          const userBlock = this.workspace.newBlock('create_ad_user');
          if (userBlock.getField('USER')) {
            userBlock.getField('USER').setValue('jdoe');
          }
          userBlock.initSvg();
          userBlock.render();
          userBlock.moveBy(100, 100);
          
          // Set User Properties
          const propsBlock = this.workspace.newBlock('set_user_properties');
          if (propsBlock.getField('USER')) propsBlock.getField('USER').setValue('jdoe');
          if (propsBlock.getField('EMAIL')) propsBlock.getField('EMAIL').setValue('jdoe@example.com');
          if (propsBlock.getField('DEPARTMENT')) propsBlock.getField('DEPARTMENT').setValue('IT');
          propsBlock.initSvg();
          propsBlock.render();
          propsBlock.moveBy(100, 200);
          
          // Create AD Group
          const groupBlock = this.workspace.newBlock('create_ad_group');
          if (groupBlock.getField('GROUP')) {
            groupBlock.getField('GROUP').setValue('IT_Staff');
          }
          groupBlock.initSvg();
          groupBlock.render();
          groupBlock.moveBy(100, 300);
          
          // Add User to Group
          const addBlock = this.workspace.newBlock('add_user_to_group');
          if (addBlock.getField('USER')) addBlock.getField('USER').setValue('jdoe');
          if (addBlock.getField('GROUP')) addBlock.getField('GROUP').setValue('IT_Staff');
          addBlock.initSvg();
          addBlock.render();
          addBlock.moveBy(100, 400);
          
          this.workspace.render();
          this.showNotification('Example workflow loaded! Try generating the script.', 'success');
        } catch (error) {
          console.error('Error loading example:', error);
          this.showNotification('Error loading example', 'error');
        }
      }, 100);
    }
  },
  
  showNotification: function(message, type = 'info') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    // Clear existing notification
    notification.className = 'notification';
    notification.textContent = '';
    
    // Set new content
    notification.textContent = message;
    notification.classList.add(type);
    
    // Clear any existing timeout
    if (notification.timeoutId) {
      clearTimeout(notification.timeoutId);
    }
    
    // Show with animation
    requestAnimationFrame(() => {
      notification.classList.add('show');
    });
    
    // Hide after delay
    notification.timeoutId = setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
};

// Make available globally
window.BlockShell = BlockShell;