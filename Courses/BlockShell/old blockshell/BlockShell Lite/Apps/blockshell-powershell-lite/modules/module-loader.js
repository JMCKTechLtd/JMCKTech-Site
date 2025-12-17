/**
 * Module Loader for BlockShell
 * Handles dynamic loading of PowerShell modules
 */

const ModuleLoader = {
  loadedModules: new Set(),
  
  load: function(moduleName) {
    if (this.loadedModules.has(moduleName)) {
      return Promise.resolve();
    }
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `modules/${moduleName}.js`;
      script.onload = () => {
        this.loadedModules.add(moduleName);
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load module: ${moduleName}`));
      document.head.appendChild(script);
    });
  },
  
  unload: function(moduleName) {
    // Note: In a real app, you'd need to remove blocks from workspace
    this.loadedModules.delete(moduleName);
  },
  
  getLoadedModules: function() {
    return Array.from(this.loadedModules);
  }
};

// Make available globally
window.ModuleLoader = ModuleLoader;