// server-powershell.js
export function registerServerModule(engine) {
  const blocks = [
    {
      "type": "svr_get_eventlog",
      "message0": "Get event log %1 last %2 entries",
      "args0": [
        { "type": "field_input", "name": "LOG", "text": "System" },
        { "type": "field_number", "name": "COUNT", "value": 50, "min": 1, "max": 5000 }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 190,
      "tooltip": "Gets recent events from a Windows Event Log.",
      "helpUrl": ""
    }
  ];

  const gen = {
    svr_get_eventlog(block) {
      const log = block.getFieldValue('LOG');
      const count = block.getFieldValue('COUNT');
      return `Get-EventLog -LogName "${log}" -Newest ${count}\n`;
    }
  };

  engine.registerBlocks(blocks, gen);
}
