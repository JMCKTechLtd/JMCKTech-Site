/**
 * PowerShell Core Module
 * Basic PowerShell system commands
 */

(function() {
  // Define PowerShell Core blocks
  const powershellCoreBlocks = [
    {
      "type": "get_process",
      "message0": "Get Process %1",
      "args0": [
        { "type": "field_input", "name": "PROCESS_NAME", "text": "*", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Get running processes. Use * for all processes.\nPowerShell: Get-Process -Name \"value\"",
      "helpUrl": ""
    },
    {
      "type": "stop_process",
      "message0": "Stop Process %1",
      "args0": [
        { "type": "field_input", "name": "PROCESS_NAME", "text": "notepad", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Stop a running process.\nPowerShell: Stop-Process -Name \"value\" -Force",
      "helpUrl": ""
    },
    {
      "type": "get_service",
      "message0": "Get Service %1 Status: %2",
      "args0": [
        { "type": "field_input", "name": "SERVICE_NAME", "text": "*", "check": "String" },
        { "type": "field_dropdown", "name": "STATUS", "options": [
          ["All", "All"],
          ["Running", "Running"],
          ["Stopped", "Stopped"]
        ]}
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Get Windows services.\nPowerShell: Get-Service -Name \"value\"",
      "helpUrl": ""
    },
    {
      "type": "start_service",
      "message0": "Start Service %1",
      "args0": [
        { "type": "field_input", "name": "SERVICE_NAME", "text": "Spooler", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Start a Windows service.\nPowerShell: Start-Service -Name \"value\"",
      "helpUrl": ""
    },
    {
      "type": "stop_service",
      "message0": "Stop Service %1",
      "args0": [
        { "type": "field_input", "name": "SERVICE_NAME", "text": "Spooler", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Stop a Windows service.\nPowerShell: Stop-Service -Name \"value\"",
      "helpUrl": ""
    },
    {
      "type": "restart_service",
      "message0": "Restart Service %1",
      "args0": [
        { "type": "field_input", "name": "SERVICE_NAME", "text": "Spooler", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Restart a Windows service.\nPowerShell: Restart-Service -Name \"value\"",
      "helpUrl": ""
    },
    {
      "type": "get_childitem",
      "message0": "Get Files in %1",
      "args0": [
        { "type": "field_input", "name": "PATH", "text": "C:\\", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Get files and folders in a directory.\nPowerShell: Get-ChildItem -Path \"value\"",
      "helpUrl": ""
    },
    {
      "type": "create_file",
      "message0": "Create File %1",
      "args0": [
        { "type": "field_input", "name": "FILE_PATH", "text": "C:\\temp\\file.txt", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Create a new file.\nPowerShell: New-Item -Path \"value\" -ItemType File",
      "helpUrl": ""
    },
    {
      "type": "remove_item",
      "message0": "Remove Item %1",
      "args0": [
        { "type": "field_input", "name": "ITEM_PATH", "text": "C:\\temp\\file.txt", "check": "String" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Remove a file or folder.\nPowerShell: Remove-Item -Path \"value\" -Force",
      "helpUrl": ""
    }
  ];
  
  // Register blocks with Blockly
  Blockly.defineBlocksWithJsonArray(powershellCoreBlocks);
  
  // Extend the code generator
  const originalGenerateBlockCode = BlockShell.generateBlockCode;
  BlockShell.generateBlockCode = function(block) {
    let code = originalGenerateBlockCode.call(this, block);
    
    switch (block.type) {
      case "get_process":
        const processName = block.getFieldValue('PROCESS_NAME');
        code = `Get-Process -Name "${processName}" | Format-Table Name,Id,CPU,Memory\n`;
        break;
        
      case "stop_process":
        const stopProcessName = block.getFieldValue('PROCESS_NAME');
        code = `Stop-Process -Name "${stopProcessName}" -Force\n`;
        break;
        
      case "get_service":
        const serviceName = block.getFieldValue('SERVICE_NAME');
        const status = block.getFieldValue('STATUS');
        if (status === 'All') {
          code = `Get-Service -Name "${serviceName}" | Format-Table Name,DisplayName,Status\n`;
        } else {
          code = `Get-Service -Name "${serviceName}" | Where-Object { $_.Status -eq "${status}" } | Format-Table Name,DisplayName,Status\n`;
        }
        break;
        
      case "start_service":
        const startServiceName = block.getFieldValue('SERVICE_NAME');
        code = `Start-Service -Name "${startServiceName}"\n`;
        break;
        
      case "stop_service":
        const stopServiceName = block.getFieldValue('SERVICE_NAME');
        code = `Stop-Service -Name "${stopServiceName}"\n`;
        break;
        
      case "restart_service":
        const restartServiceName = block.getFieldValue('SERVICE_NAME');
        code = `Restart-Service -Name "${restartServiceName}"\n`;
        break;
        
      case "get_childitem":
        const path = block.getFieldValue('PATH');
        code = `Get-ChildItem -Path "${path}" | Format-Table Name,Length,LastWriteTime\n`;
        break;
        
      case "create_file":
        const filePath = block.getFieldValue('FILE_PATH');
        code = `New-Item -Path "${filePath}" -ItemType File -Force\n`;
        break;
        
      case "remove_item":
        const itemPath = block.getFieldValue('ITEM_PATH');
        code = `Remove-Item -Path "${itemPath}" -Force\n`;
        break;
    }
    
    return code;
  };
  
  // Add to search index
  powershellCoreBlocks.forEach(block => {
    BlockShell.searchIndex.push({
      name: block.message0.replace(/%\d+/g, '').trim(),
      category: 'System Commands',
      type: block.type,
      keywords: ['powershell', 'system', 'process', 'service', 'file']
    });
  });
  
  console.log('PowerShell Core module loaded');
})();