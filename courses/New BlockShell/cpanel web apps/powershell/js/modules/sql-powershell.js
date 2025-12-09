// sql-powershell.js
export function registerSqlModule(engine) {
  const blocks = [
    {
      "type": "sql_invoke_query",
      "message0": "Invoke-Sqlcmd on %1 database %2 query %3",
      "args0": [
        { "type": "field_input", "name": "SERVER", "text": "SQLSERVER01" },
        { "type": "field_input", "name": "DATABASE", "text": "master" },
        { "type": "field_input", "name": "QUERY", "text": "SELECT @@VERSION;" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 300,
      "tooltip": "Runs a SQL query via Invoke-Sqlcmd.",
      "helpUrl": ""
    }
  ];

  const gen = {
    sql_invoke_query(block) {
      const server = block.getFieldValue('SERVER');
      const db = block.getFieldValue('DATABASE');
      const query = block.getFieldValue('QUERY');
      return `Invoke-Sqlcmd -ServerInstance "${server}" -Database "${db}" -Query "${query}"\n`;
    }
  };

  engine.registerBlocks(blocks, gen);
}
