// exchange-powershell.js
export function registerExchangeModule(engine) {
  const blocks = [
    {
      "type": "ex_get_mailbox",
      "message0": "Get mailbox %1",
      "args0": [
        { "type": "field_input", "name": "IDENTITY", "text": "user@domain.com" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 280,
      "tooltip": "Gets an Exchange Online mailbox. PowerShell: Get-Mailbox",
      "helpUrl": ""
    }
  ];

  const gen = {
    ex_get_mailbox(block) {
      const id = block.getFieldValue('IDENTITY');
      return `Get-Mailbox -Identity "${id}"\n`;
    }
  };

  engine.registerBlocks(blocks, gen);
}
