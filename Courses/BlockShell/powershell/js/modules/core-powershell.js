// core-powershell.js
// Basic PowerShell blocks: output, variables, processes, services, files

export function registerCoreModule(engine) {
  const blocks = [
    {
      "type": "ps_write_output",
      "message0": "Write-Output %1",
      "args0": [
        { "type": "field_input", "name": "TEXT", "text": "Hello from BlockShell" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Writes text to the pipeline. PowerShell: Write-Output",
      "helpUrl": ""
    },
    {
      "type": "ps_set_variable",
      "message0": "Set variable $%1 to %2",
      "args0": [
        { "type": "field_input", "name": "NAME", "text": "Name" },
        { "type": "field_input", "name": "VALUE", "text": "BlockShell" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 200,
      "tooltip": "Sets a simple variable. PowerShell: $Name = 'Value'",
      "helpUrl": ""
    },
    {
      "type": "ps_get_process",
      "message0": "Get processes matching %1",
      "args0": [
        { "type": "field_input", "name": "NAME", "text": "powershell" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Gets processes by name. PowerShell: Get-Process",
      "helpUrl": ""
    },
    {
      "type": "ps_get_service",
      "message0": "Get services matching %1",
      "args0": [
        { "type": "field_input", "name": "NAME", "text": "W32Time" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Gets services by name. PowerShell: Get-Service",
      "helpUrl": ""
    },
    {
      "type": "ps_restart_service",
      "message0": "Restart service %1",
      "args0": [
        { "type": "field_input", "name": "NAME", "text": "Spooler" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 0,
      "tooltip": "Restarts a Windows service. PowerShell: Restart-Service",
      "helpUrl": ""
    },
    {
      "type": "ps_get_child_item",
      "message0": "List items in %1",
      "args0": [
        { "type": "field_input", "name": "PATH", "text": "C:\\Scripts" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "Lists files and folders. PowerShell: Get-ChildItem",
      "helpUrl": ""
    },
    {
      "type": "ps_new_item",
      "message0": "New item at %1 type %2",
      "args0": [
        { "type": "field_input", "name": "PATH", "text": "C:\\Scripts\\demo.txt" },
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            ["File", "File"],
            ["Directory", "Directory"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 260,
      "tooltip": "Creates a file or directory. PowerShell: New-Item",
      "helpUrl": ""
    },
    {
      "type": "ps_remove_item",
      "message0": "Remove item at %1 (force) %2",
      "args0": [
        { "type": "field_input", "name": "PATH", "text": "C:\\Scripts\\demo.txt" },
        { "type": "field_checkbox", "name": "FORCE", "checked": true }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 0,
      "tooltip": "Removes a file or directory. PowerShell: Remove-Item",
      "helpUrl": ""
    }
  ];

  const gen = {
    ps_write_output(block) {
      const text = block.getFieldValue('TEXT');
      return `Write-Output "${text}"\n`;
    },
    ps_set_variable(block) {
      const name = block.getFieldValue('NAME');
      const value = block.getFieldValue('VALUE');
      return `$${name} = "${value}"\n`;
    },
    ps_get_process(block) {
      const name = block.getFieldValue('NAME');
      return `Get-Process -Name "${name}"\n`;
    },
    ps_get_service(block) {
      const name = block.getFieldValue('NAME');
      return `Get-Service -Name "${name}"\n`;
    },
    ps_restart_service(block) {
      const name = block.getFieldValue('NAME');
      return `Restart-Service -Name "${name}" -Force\n`;
    },
    ps_get_child_item(block) {
      const path = block.getFieldValue('PATH');
      return `Get-ChildItem -Path "${path}"\n`;
    },
    ps_new_item(block) {
      const path = block.getFieldValue('PATH');
      const type = block.getFieldValue('TYPE');
      const itemType = type === 'Directory' ? 'Directory' : 'File';
      return `New-Item -Path "${path}" -ItemType "${itemType}"\n`;
    },
    ps_remove_item(block) {
      const path = block.getFieldValue('PATH');
      const force = block.getFieldValue('FORCE') === 'TRUE';
      return `Remove-Item -Path "${path}"${force ? ' -Force' : ''}\n`;
    }
  };

  engine.registerBlocks(blocks, gen);
}
