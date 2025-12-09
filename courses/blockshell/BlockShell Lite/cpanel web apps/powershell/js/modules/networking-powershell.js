// networking-powershell.js
export function registerNetworkingModule(engine) {
  const blocks = [
    {
      "type": "net_test_connection",
      "message0": "Test-Connection to %1 count %2",
      "args0": [
        { "type": "field_input", "name": "TARGET", "text": "8.8.8.8" },
        { "type": "field_number", "name": "COUNT", "value": 4, "min": 1, "max": 20 }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 140,
      "tooltip": "Pings a remote host. PowerShell: Test-Connection",
      "helpUrl": ""
    }
  ];

  const gen = {
    net_test_connection(block) {
      const target = block.getFieldValue('TARGET');
      const count = block.getFieldValue('COUNT');
      return `Test-Connection -ComputerName "${target}" -Count ${count}\n`;
    }
  };

  engine.registerBlocks(blocks, gen);
}
