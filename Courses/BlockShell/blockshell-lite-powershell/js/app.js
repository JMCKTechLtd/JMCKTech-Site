// app.js - CORE + AD + EXCHANGE ONLINE ONLY
import { BlockShellEngine } from './blockshell-engine.js';

const engine = new BlockShellEngine();

// ALL blocks defined here - ONLY CORE + AD + EXCHANGE ONLINE
const allBlocks = {
  core: [
    // Output & Variables
    {
      type: "ps_write_output",
      message0: "Write-Output %1",
      args0: [{ type: "field_input", name: "TEXT", text: "Hello" }],
      previousStatement: null,
      nextStatement: null,
      colour: 210,
      tooltip: "Writes text to the pipeline"
    },
    {
      type: "ps_write_host",
      message0: "Write-Host %1 color %2",
      args0: [
        { type: "field_input", name: "TEXT", text: "Message" },
        {
          type: "field_dropdown",
          name: "COLOR",
          options: [
            ["White", "White"],
            ["Red", "Red"],
            ["Green", "Green"],
            ["Yellow", "Yellow"],
            ["Blue", "Blue"],
            ["Cyan", "Cyan"],
            ["Magenta", "Magenta"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 210,
      tooltip: "Writes colored text to the console"
    },
    {
      type: "ps_write_warning",
      message0: "Write-Warning %1",
      args0: [{ type: "field_input", name: "TEXT", text: "Warning message" }],
      previousStatement: null,
      nextStatement: null,
      colour: 210,
      tooltip: "Writes a warning message"
    },
    {
      type: "ps_write_error",
      message0: "Write-Error %1",
      args0: [{ type: "field_input", name: "TEXT", text: "Error message" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Writes an error message"
    },
    {
      type: "ps_set_variable",
      message0: "Set variable $%1 to %2",
      args0: [
        { type: "field_input", name: "NAME", text: "Name" },
        { type: "field_input", name: "VALUE", text: "Value" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 200,
      tooltip: "Sets a variable"
    },
    {
      type: "ps_get_variable",
      message0: "Get variable $%1",
      args0: [{ type: "field_input", name: "NAME", text: "Name" }],
      previousStatement: null,
      nextStatement: null,
      colour: 200,
      tooltip: "Gets a variable value"
    },
    {
      type: "ps_clear_variable",
      message0: "Clear variable $%1",
      args0: [{ type: "field_input", name: "NAME", text: "Name" }],
      previousStatement: null,
      nextStatement: null,
      colour: 200,
      tooltip: "Clears a variable"
    },
    // Processes
    {
      type: "ps_get_process",
      message0: "Get processes matching %1",
      args0: [{ type: "field_input", name: "NAME", text: "powershell" }],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "Gets processes by name"
    },
    {
      type: "ps_stop_process",
      message0: "Stop process %1 force %2",
      args0: [
        { type: "field_input", name: "NAME", text: "notepad" },
        { type: "field_checkbox", name: "FORCE", checked: true }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Stops a running process"
    },
    {
      type: "ps_start_process",
      message0: "Start process %1",
      args0: [{ type: "field_input", name: "PATH", text: "notepad.exe" }],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "Starts a new process"
    },
    {
      type: "ps_wait_process",
      message0: "Wait for process %1",
      args0: [{ type: "field_input", name: "NAME", text: "notepad" }],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "Waits for a process to finish"
    },
    // Services
    {
      type: "ps_get_service",
      message0: "Get services matching %1",
      args0: [{ type: "field_input", name: "NAME", text: "W32Time" }],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Gets services by name"
    },
    {
      type: "ps_start_service",
      message0: "Start service %1",
      args0: [{ type: "field_input", name: "NAME", text: "Spooler" }],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Starts a Windows service"
    },
    {
      type: "ps_stop_service",
      message0: "Stop service %1",
      args0: [{ type: "field_input", name: "NAME", text: "Spooler" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Stops a Windows service"
    },
    {
      type: "ps_restart_service",
      message0: "Restart service %1",
      args0: [{ type: "field_input", name: "NAME", text: "Spooler" }],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Restarts a Windows service"
    },
    {
      type: "ps_set_service",
      message0: "Set service %1 startup type %2",
      args0: [
        { type: "field_input", name: "NAME", text: "Spooler" },
        {
          type: "field_dropdown",
          name: "STARTUP",
          options: [
            ["Automatic", "Automatic"],
            ["Manual", "Manual"],
            ["Disabled", "Disabled"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Sets service startup type"
    },
    // Files & Folders
    {
      type: "ps_get_child_item",
      message0: "List items in %1",
      args0: [{ type: "field_input", name: "PATH", text: "C:\\Scripts" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Lists files and folders"
    },
    {
      type: "ps_get_child_item_recurse",
      message0: "List items in %1 (recursive)",
      args0: [{ type: "field_input", name: "PATH", text: "C:\\Scripts" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Lists files and folders recursively"
    },
    {
      type: "ps_new_item",
      message0: "New item at %1 type %2",
      args0: [
        { type: "field_input", name: "PATH", text: "C:\\Scripts\\demo.txt" },
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [["File", "File"], ["Directory", "Directory"]]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Creates a file or directory"
    },
    {
      type: "ps_remove_item",
      message0: "Remove item at %1 (force) %2",
      args0: [
        { type: "field_input", name: "PATH", text: "C:\\Scripts\\demo.txt" },
        { type: "field_checkbox", name: "FORCE", checked: true }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes a file or directory"
    },
    {
      type: "ps_copy_item",
      message0: "Copy %1 to %2",
      args0: [
        { type: "field_input", name: "SOURCE", text: "C:\\source.txt" },
        { type: "field_input", name: "DEST", text: "C:\\dest.txt" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Copies a file or folder"
    },
    {
      type: "ps_move_item",
      message0: "Move %1 to %2",
      args0: [
        { type: "field_input", name: "SOURCE", text: "C:\\source.txt" },
        { type: "field_input", name: "DEST", text: "C:\\dest.txt" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Moves a file or folder"
    },
    {
      type: "ps_rename_item",
      message0: "Rename %1 to %2",
      args0: [
        { type: "field_input", name: "PATH", text: "C:\\old.txt" },
        { type: "field_input", name: "NEWNAME", text: "new.txt" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Renames a file or folder"
    },
    {
      type: "ps_test_path",
      message0: "Test if path exists %1",
      args0: [{ type: "field_input", name: "PATH", text: "C:\\Scripts" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Tests if a path exists"
    },
    {
      type: "ps_get_content",
      message0: "Get content of %1",
      args0: [{ type: "field_input", name: "PATH", text: "C:\\file.txt" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Reads file content"
    },
    {
      type: "ps_set_content",
      message0: "Set content of %1 to %2",
      args0: [
        { type: "field_input", name: "PATH", text: "C:\\file.txt" },
        { type: "field_input", name: "VALUE", text: "Content" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Writes content to file"
    },
    {
      type: "ps_add_content",
      message0: "Append to %1 content %2",
      args0: [
        { type: "field_input", name: "PATH", text: "C:\\file.txt" },
        { type: "field_input", name: "VALUE", text: "Content" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Appends content to file"
    }
  ],
  ad: [
    // Users
    {
      type: "ad_get_user",
      message0: "Get AD user %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "jsmith" }],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Gets an Active Directory user"
    },
    {
      type: "ad_get_user_filter",
      message0: "Get AD users where %1",
      args0: [{ type: "field_input", name: "FILTER", text: "Enabled -eq $true" }],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Gets AD users with filter"
    },
    {
      type: "ad_new_user",
      message0: "New AD user %1 name %2 password %3",
      args0: [
        { type: "field_input", name: "SAM", text: "jsmith" },
        { type: "field_input", name: "NAME", text: "John Smith" },
        { type: "field_input", name: "PASSWORD", text: "P@ssw0rd!" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Creates a new AD user"
    },
    {
      type: "ad_set_user",
      message0: "Set AD user %1 property %2 value %3",
      args0: [
        { type: "field_input", name: "IDENTITY", text: "jsmith" },
        { type: "field_input", name: "PROPERTY", text: "Title" },
        { type: "field_input", name: "VALUE", text: "Manager" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Modifies AD user property"
    },
    {
      type: "ad_remove_user",
      message0: "Remove AD user %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "jsmith" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes an AD user"
    },
    {
      type: "ad_enable_user",
      message0: "Enable AD user %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "jsmith" }],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Enables an AD user account"
    },
    {
      type: "ad_disable_user",
      message0: "Disable AD user %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "jsmith" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Disables an AD user account"
    },
    {
      type: "ad_unlock_account",
      message0: "Unlock AD account %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "jsmith" }],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Unlocks a locked AD account"
    },
    {
      type: "ad_reset_password",
      message0: "Reset AD password for %1 new password %2",
      args0: [
        { type: "field_input", name: "IDENTITY", text: "jsmith" },
        { type: "field_input", name: "PASSWORD", text: "NewP@ss123!" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Resets an AD user password"
    },
    {
      type: "ad_move_user",
      message0: "Move AD user %1 to OU %2",
      args0: [
        { type: "field_input", name: "IDENTITY", text: "jsmith" },
        { type: "field_input", name: "OU", text: "OU=IT,DC=corp,DC=com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 330,
      tooltip: "Moves AD user to different OU"
    },
    // Groups
    {
      type: "ad_get_group",
      message0: "Get AD group %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "IT_Admins" }],
      previousStatement: null,
      nextStatement: null,
      colour: 310,
      tooltip: "Gets an AD group"
    },
    {
      type: "ad_new_group",
      message0: "New AD group %1 scope %2",
      args0: [
        { type: "field_input", name: "NAME", text: "IT_Admins" },
        {
          type: "field_dropdown",
          name: "SCOPE",
          options: [
            ["Global", "Global"],
            ["Universal", "Universal"],
            ["DomainLocal", "DomainLocal"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 310,
      tooltip: "Creates a new AD group"
    },
    {
      type: "ad_add_group_member",
      message0: "Add %1 to group %2",
      args0: [
        { type: "field_input", name: "MEMBER", text: "jsmith" },
        { type: "field_input", name: "GROUP", text: "IT_Admins" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 310,
      tooltip: "Adds member to AD group"
    },
    {
      type: "ad_remove_group_member",
      message0: "Remove %1 from group %2",
      args0: [
        { type: "field_input", name: "MEMBER", text: "jsmith" },
        { type: "field_input", name: "GROUP", text: "IT_Admins" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 310,
      tooltip: "Removes member from AD group"
    },
    {
      type: "ad_get_group_member",
      message0: "Get members of group %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "IT_Admins" }],
      previousStatement: null,
      nextStatement: null,
      colour: 310,
      tooltip: "Gets AD group members"
    },
    {
      type: "ad_remove_group",
      message0: "Remove AD group %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "IT_Admins" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes an AD group"
    },
    // OUs & Computers
    {
      type: "ad_get_ou",
      message0: "Get AD organizational unit %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "OU=IT,DC=corp,DC=com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: "Gets an AD OU"
    },
    {
      type: "ad_new_ou",
      message0: "New AD organizational unit %1 path %2",
      args0: [
        { type: "field_input", name: "NAME", text: "Sales" },
        { type: "field_input", name: "PATH", text: "DC=corp,DC=com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: "Creates a new AD OU"
    },
    {
      type: "ad_get_computer",
      message0: "Get AD computer %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "DESKTOP-01" }],
      previousStatement: null,
      nextStatement: null,
      colour: 320,
      tooltip: "Gets an AD computer object"
    },
    {
      type: "ad_get_computer_filter",
      message0: "Get AD computers where %1",
      args0: [{ type: "field_input", name: "FILTER", text: "OperatingSystem -like '*Server*'" }],
      previousStatement: null,
      nextStatement: null,
      colour: 320,
      tooltip: "Gets AD computers with filter"
    },
    {
      type: "ad_remove_computer",
      message0: "Remove AD computer %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "DESKTOP-01" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes an AD computer"
    }
  ],
  exchange: [
    // Mailboxes - Exchange Online
    {
      type: "exo_get_mailbox",
      message0: "Get-EXOMailbox %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets an Exchange Online mailbox"
    },
    {
      type: "exo_get_mailbox_all",
      message0: "Get-EXOMailbox -ResultSize Unlimited",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets all Exchange Online mailboxes"
    },
    {
      type: "exo_enable_mailbox",
      message0: "Enable-EXOMailbox %1",
      args0: [{ type: "field_input", name: "USERID", text: "jsmith@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Enables mailbox for existing user"
    },
    {
      type: "exo_set_mailbox",
      message0: "Set-EXOMailbox %1 quota %2 GB",
      args0: [
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" },
        { type: "field_number", name: "QUOTA", value: 50, min: 1, max: 500 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Modifies Exchange Online mailbox settings"
    },
    {
      type: "exo_remove_mailbox",
      message0: "Remove-EXOMailbox %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes an Exchange Online mailbox"
    },
    {
      type: "exo_enable_mailbox_audit",
      message0: "Enable mailbox audit for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Enables mailbox audit logging"
    },
    {
      type: "exo_get_mailbox_statistics",
      message0: "Get-EXOMailboxStatistics for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets Exchange Online mailbox size statistics"
    },
    // Permissions - Exchange Online
    {
      type: "exo_get_mailbox_permission",
      message0: "Get-EXOMailboxPermission for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Gets Exchange Online mailbox permissions"
    },
    {
      type: "exo_add_mailbox_permission",
      message0: "Add-EXOMailboxPermission %1 to %2 access %3",
      args0: [
        { type: "field_input", name: "USER", text: "admin@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" },
        {
          type: "field_dropdown",
          name: "ACCESS",
          options: [
            ["FullAccess", "FullAccess"],
            ["SendAs", "SendAs"],
            ["SendOnBehalf", "SendOnBehalf"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Grants Exchange Online mailbox permissions"
    },
    {
      type: "exo_remove_mailbox_permission",
      message0: "Remove-EXOMailboxPermission %1 from %2",
      args0: [
        { type: "field_input", name: "USER", text: "admin@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Removes Exchange Online mailbox permissions"
    },
    // Groups - Exchange Online
    {
      type: "exo_get_unified_group",
      message0: "Get-UnifiedGroup %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Gets an Exchange Online/Microsoft 365 group"
    },
    {
      type: "exo_new_unified_group",
      message0: "New-UnifiedGroup %1 email %2",
      args0: [
        { type: "field_input", name: "NAME", text: "All Staff" },
        { type: "field_input", name: "EMAIL", text: "allstaff@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Creates an Exchange Online/Microsoft 365 group"
    },
    {
      type: "exo_add_unified_group_member",
      message0: "Add %1 to UnifiedGroup %2",
      args0: [
        { type: "field_input", name: "MEMBER", text: "user@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Adds member to Exchange Online group"
    },
    {
      type: "exo_remove_unified_group_member",
      message0: "Remove %1 from UnifiedGroup %2",
      args0: [
        { type: "field_input", name: "MEMBER", text: "user@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Removes member from Exchange Online group"
    },
    {
      type: "exo_get_unified_group_member",
      message0: "Get members of UnifiedGroup %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Gets Exchange Online group members"
    },
    // Tracing - Exchange Online
    {
      type: "exo_get_message_trace",
      message0: "Get-MessageTrace sender %1 days %2",
      args0: [
        { type: "field_input", name: "SENDER", text: "user@domain.com" },
        { type: "field_number", name: "DAYS", value: 7, min: 1, max: 10 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 250,
      tooltip: "Traces Exchange Online email messages"
    },
    {
      type: "exo_get_message_trace_detail",
      message0: "Get-MessageTraceDetail for message ID %1",
      args0: [{ type: "field_input", name: "MESSAGEID", text: "<message-id>" }],
      previousStatement: null,
      nextStatement: null,
      colour: 250,
      tooltip: "Gets detailed Exchange Online message trace"
    },
    // Rules - Exchange Online
    {
      type: "exo_get_transport_rule",
      message0: "Get-TransportRule",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 245,
      tooltip: "Gets Exchange Online transport rules"
    },
    {
      type: "exo_new_transport_rule",
      message0: "New-TransportRule %1",
      args0: [{ type: "field_input", name: "NAME", text: "Block External Forward" }],
      previousStatement: null,
      nextStatement: null,
      colour: 245,
      tooltip: "Creates a new Exchange Online transport rule"
    },
    // User Management - Exchange Online
    {
      type: "exo_get_user",
      message0: "Get-EXOUser %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Gets Exchange Online user information"
    },
    {
      type: "exo_set_user",
      message0: "Set-EXOUser %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Sets Exchange Online user properties"
    },
    // Licenses - Exchange Online
    {
      type: "exo_get_license",
      message0: "Get-EXOLicense for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 235,
      tooltip: "Gets Exchange Online/Microsoft 365 licenses"
    },
    {
      type: "exo_set_license",
      message0: "Set-EXOLicense for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 235,
      tooltip: "Assigns Exchange Online/Microsoft 365 licenses"
    }
  ]
};

// ALL generators - ONLY CORE + AD + EXCHANGE ONLINE
const generators = {
  // Core - Output & Variables
  ps_write_output: (block) => `Write-Output "${block.getFieldValue('TEXT')}"\n`,
  ps_write_host: (block) => `Write-Host "${block.getFieldValue('TEXT')}" -ForegroundColor ${block.getFieldValue('COLOR')}\n`,
  ps_write_warning: (block) => `Write-Warning "${block.getFieldValue('TEXT')}"\n`,
  ps_write_error: (block) => `Write-Error "${block.getFieldValue('TEXT')}"\n`,
  ps_set_variable: (block) => `$${block.getFieldValue('NAME')} = "${block.getFieldValue('VALUE')}"\n`,
  ps_get_variable: (block) => `Get-Variable -Name "${block.getFieldValue('NAME')}"\n`,
  ps_clear_variable: (block) => `Clear-Variable -Name "${block.getFieldValue('NAME')}"\n`,
  
  // Core - Processes
  ps_get_process: (block) => `Get-Process -Name "${block.getFieldValue('NAME')}"\n`,
  ps_stop_process: (block) => {
    const force = block.getFieldValue('FORCE') === 'TRUE';
    return `Stop-Process -Name "${block.getFieldValue('NAME')}"${force ? ' -Force' : ''}\n`;
  },
  ps_start_process: (block) => `Start-Process "${block.getFieldValue('PATH')}"\n`,
  ps_wait_process: (block) => `Wait-Process -Name "${block.getFieldValue('NAME')}"\n`,
  
  // Core - Services
  ps_get_service: (block) => `Get-Service -Name "${block.getFieldValue('NAME')}"\n`,
  ps_start_service: (block) => `Start-Service -Name "${block.getFieldValue('NAME')}"\n`,
  ps_stop_service: (block) => `Stop-Service -Name "${block.getFieldValue('NAME')}"\n`,
  ps_restart_service: (block) => `Restart-Service -Name "${block.getFieldValue('NAME')}" -Force\n`,
  ps_set_service: (block) => `Set-Service -Name "${block.getFieldValue('NAME')}" -StartupType ${block.getFieldValue('STARTUP')}\n`,
  
  // Core - Files & Folders
  ps_get_child_item: (block) => `Get-ChildItem -Path "${block.getFieldValue('PATH')}"\n`,
  ps_get_child_item_recurse: (block) => `Get-ChildItem -Path "${block.getFieldValue('PATH')}" -Recurse\n`,
  ps_new_item: (block) => `New-Item -Path "${block.getFieldValue('PATH')}" -ItemType "${block.getFieldValue('TYPE')}"\n`,
  ps_remove_item: (block) => {
    const force = block.getFieldValue('FORCE') === 'TRUE';
    return `Remove-Item -Path "${block.getFieldValue('PATH')}"${force ? ' -Force' : ''}\n`;
  },
  ps_copy_item: (block) => `Copy-Item -Path "${block.getFieldValue('SOURCE')}" -Destination "${block.getFieldValue('DEST')}"\n`,
  ps_move_item: (block) => `Move-Item -Path "${block.getFieldValue('SOURCE')}" -Destination "${block.getFieldValue('DEST')}"\n`,
  ps_rename_item: (block) => `Rename-Item -Path "${block.getFieldValue('PATH')}" -NewName "${block.getFieldValue('NEWNAME')}"\n`,
  ps_test_path: (block) => `Test-Path -Path "${block.getFieldValue('PATH')}"\n`,
  ps_get_content: (block) => `Get-Content -Path "${block.getFieldValue('PATH')}"\n`,
  ps_set_content: (block) => `Set-Content -Path "${block.getFieldValue('PATH')}" -Value "${block.getFieldValue('VALUE')}"\n`,
  ps_add_content: (block) => `Add-Content -Path "${block.getFieldValue('PATH')}" -Value "${block.getFieldValue('VALUE')}"\n`,
  
  // AD - Users
  ad_get_user: (block) => `Get-ADUser -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_get_user_filter: (block) => `Get-ADUser -Filter {${block.getFieldValue('FILTER')}}\n`,
  ad_new_user: (block) => `New-ADUser -SamAccountName "${block.getFieldValue('SAM')}" -Name "${block.getFieldValue('NAME')}" -AccountPassword (ConvertTo-SecureString "${block.getFieldValue('PASSWORD')}" -AsPlainText -Force) -Enabled $true\n`,
  ad_set_user: (block) => `Set-ADUser -Identity "${block.getFieldValue('IDENTITY')}" -${block.getFieldValue('PROPERTY')} "${block.getFieldValue('VALUE')}"\n`,
  ad_remove_user: (block) => `Remove-ADUser -Identity "${block.getFieldValue('IDENTITY')}" -Confirm:$false\n`,
  ad_enable_user: (block) => `Enable-ADAccount -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_disable_user: (block) => `Disable-ADAccount -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_unlock_account: (block) => `Unlock-ADAccount -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_reset_password: (block) => `Set-ADAccountPassword -Identity "${block.getFieldValue('IDENTITY')}" -NewPassword (ConvertTo-SecureString "${block.getFieldValue('PASSWORD')}" -AsPlainText -Force) -Reset\n`,
  ad_move_user: (block) => `Move-ADObject -Identity "${block.getFieldValue('IDENTITY')}" -TargetPath "${block.getFieldValue('OU')}"\n`,
  
  // AD - Groups
  ad_get_group: (block) => `Get-ADGroup -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_new_group: (block) => `New-ADGroup -Name "${block.getFieldValue('NAME')}" -GroupScope ${block.getFieldValue('SCOPE')}\n`,
  ad_add_group_member: (block) => `Add-ADGroupMember -Identity "${block.getFieldValue('GROUP')}" -Members "${block.getFieldValue('MEMBER')}"\n`,
  ad_remove_group_member: (block) => `Remove-ADGroupMember -Identity "${block.getFieldValue('GROUP')}" -Members "${block.getFieldValue('MEMBER')}" -Confirm:$false\n`,
  ad_get_group_member: (block) => `Get-ADGroupMember -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_remove_group: (block) => `Remove-ADGroup -Identity "${block.getFieldValue('IDENTITY')}" -Confirm:$false\n`,
  
  // AD - OUs & Computers
  ad_get_ou: (block) => `Get-ADOrganizationalUnit -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_new_ou: (block) => `New-ADOrganizationalUnit -Name "${block.getFieldValue('NAME')}" -Path "${block.getFieldValue('PATH')}"\n`,
  ad_get_computer: (block) => `Get-ADComputer -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ad_get_computer_filter: (block) => `Get-ADComputer -Filter {${block.getFieldValue('FILTER')}}\n`,
  ad_remove_computer: (block) => `Remove-ADComputer -Identity "${block.getFieldValue('IDENTITY')}" -Confirm:$false\n`,
  
  // Exchange Online - Mailboxes
  exo_get_mailbox: (block) => `Get-EXOMailbox -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  exo_get_mailbox_all: (block) => `Get-EXOMailbox -ResultSize Unlimited\n`,
  exo_enable_mailbox: (block) => `Enable-EXOMailbox -Identity "${block.getFieldValue('USERID')}"\n`,
  exo_set_mailbox: (block) => `Set-EXOMailbox -Identity "${block.getFieldValue('IDENTITY')}" -ProhibitSendQuota "${block.getFieldValue('QUOTA')}GB"\n`,
  exo_remove_mailbox: (block) => `Remove-EXOMailbox -Identity "${block.getFieldValue('IDENTITY')}" -Confirm:$false\n`,
  exo_enable_mailbox_audit: (block) => `Set-EXOMailbox -Identity "${block.getFieldValue('IDENTITY')}" -AuditEnabled $true\n`,
  exo_get_mailbox_statistics: (block) => `Get-EXOMailboxStatistics -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  
  // Exchange Online - Permissions
  exo_get_mailbox_permission: (block) => `Get-EXOMailboxPermission -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  exo_add_mailbox_permission: (block) => `Add-EXOMailboxPermission -Identity "${block.getFieldValue('IDENTITY')}" -User "${block.getFieldValue('USER')}" -AccessRights ${block.getFieldValue('ACCESS')}\n`,
  exo_remove_mailbox_permission: (block) => `Remove-EXOMailboxPermission -Identity "${block.getFieldValue('IDENTITY')}" -User "${block.getFieldValue('USER')}" -Confirm:$false\n`,
  
  // Exchange Online - Groups
  exo_get_unified_group: (block) => `Get-UnifiedGroup -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  exo_new_unified_group: (block) => `New-UnifiedGroup -DisplayName "${block.getFieldValue('NAME')}" -PrimarySmtpAddress "${block.getFieldValue('EMAIL')}"\n`,
  exo_add_unified_group_member: (block) => `Add-UnifiedGroupLinks -Identity "${block.getFieldValue('IDENTITY')}" -LinkType Members -Links "${block.getFieldValue('MEMBER')}"\n`,
  exo_remove_unified_group_member: (block) => `Remove-UnifiedGroupLinks -Identity "${block.getFieldValue('IDENTITY')}" -LinkType Members -Links "${block.getFieldValue('MEMBER')}" -Confirm:$false\n`,
  exo_get_unified_group_member: (block) => `Get-UnifiedGroupLinks -Identity "${block.getFieldValue('IDENTITY')}" -LinkType Members\n`,
  
  // Exchange Online - Tracing
  exo_get_message_trace: (block) => `Get-MessageTrace -SenderAddress "${block.getFieldValue('SENDER')}" -StartDate (Get-Date).AddDays(-${block.getFieldValue('DAYS')}) -EndDate (Get-Date)\n`,
  exo_get_message_trace_detail: (block) => `Get-MessageTraceDetail -MessageTraceId "${block.getFieldValue('MESSAGEID')}"\n`,
  
  // Exchange Online - Rules
  exo_get_transport_rule: (block) => `Get-TransportRule\n`,
  exo_new_transport_rule: (block) => `New-TransportRule -Name "${block.getFieldValue('NAME')}"\n`,
  
  // Exchange Online - User Management
  exo_get_user: (block) => `Get-EXOUser -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  exo_set_user: (block) => `Set-EXOUser -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  
  // Exchange Online - Licenses
  exo_get_license: (block) => `(Get-EXOUser -Identity "${block.getFieldValue('IDENTITY')}").Licenses\n`,
  exo_set_license: (block) => `Set-EXOUser -Identity "${block.getFieldValue('IDENTITY')}"\n`
};

// Build autocomplete list from all blocks
function buildAutocompleteList() {
  const suggestions = [];
  
  for (const module in allBlocks) {
    allBlocks[module].forEach(block => {
      const text = block.message0.replace(/%\d+/g, '').trim();
      suggestions.push({
        text: text,
        type: block.type,
        tooltip: block.tooltip,
        module: module
      });
    });
  }
  
  return suggestions;
}

const autocompleteSuggestions = buildAutocompleteList();

window.addEventListener('DOMContentLoaded', () => {
  console.log('=== BlockShell Initialization Started ===');
  
  try {
    // Step 1: Initialize engine
    console.log('Step 1: Initializing engine...');
    engine.init({
      blocklyDivId: 'blocklyDiv',
      toolboxId: 'toolbox'
    });

    if (!engine.workspace) {
      console.error('FATAL: Workspace failed to initialize');
      alert('Failed to initialize Blockly workspace. Check console for errors.');
      return;
    }

    // Step 2: Register all blocks
    const allBlocksFlat = Object.values(allBlocks).flat();
    console.log(`Step 2: Registering ${allBlocksFlat.length} block definitions...`);
    Blockly.defineBlocksWithJsonArray(allBlocksFlat);
    console.log('Blocks registered successfully');
    
    // Step 3: Assign generators and blocks to engine
    console.log('Step 3: Assigning generators...');
    engine.generators = generators;
    engine.allBlocks = allBlocks;

    // Step 4: Build initial toolbox for Core
    console.log('Step 4: Building initial Core toolbox...');
    engine.switchModule('core');

    // Step 5: Setup tab handlers
    console.log('Step 5: Setting up tab handlers...');
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const moduleId = tab.dataset.module;
        console.log(`Tab clicked: ${moduleId}`);
        engine.switchModule(moduleId);
        
        // Clear search
        const searchInput = document.getElementById('block-search');
        if (searchInput) {
          searchInput.value = '';
          // Remove autocomplete dropdown if exists
          const dropdown = document.getElementById('autocomplete-dropdown');
          if (dropdown) dropdown.remove();
        }
      });
    });

    // Step 6: Setup search with autocomplete
    console.log('Step 6: Setting up search with autocomplete...');
    const searchInput = document.getElementById('block-search');
    if (searchInput) {
      let autocompleteDropdown = null;
      
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        // Filter toolbox
        engine.filterToolbox(query);
        
        // Show autocomplete suggestions
        if (query.length > 0) {
          const matches = autocompleteSuggestions.filter(s => 
            s.text.toLowerCase().includes(query) || 
            s.tooltip.toLowerCase().includes(query)
          ).slice(0, 8); // Limit to 8 suggestions
          
          if (matches.length > 0) {
            showAutocomplete(matches, searchInput);
          } else {
            hideAutocomplete();
          }
        } else {
          hideAutocomplete();
        }
      });
      
      searchInput.addEventListener('blur', () => {
        // Delay to allow click on dropdown
        setTimeout(hideAutocomplete, 200);
      });
      
      function showAutocomplete(matches, inputEl) {
        hideAutocomplete();
        
        autocompleteDropdown = document.createElement('div');
        autocompleteDropdown.id = 'autocomplete-dropdown';
        autocompleteDropdown.style.cssText = `
          position: absolute;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
          max-height: 300px;
          overflow-y: auto;
          z-index: 1000;
          min-width: 320px;
        `;
        
        matches.forEach(match => {
          const item = document.createElement('div');
          item.style.cssText = `
            padding: 8px 12px;
            cursor: pointer;
            border-bottom: 1px solid #f3f4f6;
            font-size: 0.85rem;
          `;
          item.innerHTML = `
            <div style="font-weight: 500; color: #111827;">${match.text}</div>
            <div style="font-size: 0.75rem; color: #6b7280; margin-top: 2px;">${match.tooltip}</div>
          `;
          
          item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f3f4f6';
          });
          
          item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'white';
          });
          
          item.addEventListener('click', () => {
            inputEl.value = match.text;
            engine.filterToolbox(match.text);
            hideAutocomplete();
            inputEl.focus();
          });
          
          autocompleteDropdown.appendChild(item);
        });
        
        // Position dropdown
        const rect = inputEl.getBoundingClientRect();
        autocompleteDropdown.style.top = `${rect.bottom + 4}px`;
        autocompleteDropdown.style.left = `${rect.left}px`;
        
        document.body.appendChild(autocompleteDropdown);
      }
      
      function hideAutocomplete() {
        if (autocompleteDropdown) {
          autocompleteDropdown.remove();
          autocompleteDropdown = null;
        }
      }
    }

    console.log('=== BlockShell Initialization Complete ===');
    console.log('Toolbox should now be visible with Core, AD, and Exchange Online blocks');
    
  } catch (error) {
    console.error('FATAL ERROR during initialization:', error);
    alert('Critical error: ' + error.message);
  }
});