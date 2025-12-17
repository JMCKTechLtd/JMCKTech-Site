// app.js - EXPANDED BLOCKS WITH AUTOCOMPLETE
import { BlockShellEngine } from './blockshell-engine.js';

const engine = new BlockShellEngine();

// ALL blocks defined here - SIGNIFICANTLY EXPANDED
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
    // Mailboxes
    {
      type: "ex_get_mailbox",
      message0: "Get mailbox %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets an Exchange mailbox"
    },
    {
      type: "ex_get_mailbox_all",
      message0: "Get all mailboxes",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets all mailboxes"
    },
    {
      type: "ex_new_mailbox",
      message0: "New mailbox %1 UPN %2",
      args0: [
        { type: "field_input", name: "NAME", text: "John Smith" },
        { type: "field_input", name: "UPN", text: "jsmith@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Creates a new mailbox"
    },
    {
      type: "ex_set_mailbox",
      message0: "Set mailbox %1 quota %2 GB",
      args0: [
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" },
        { type: "field_number", name: "QUOTA", value: 50, min: 1, max: 500 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Modifies mailbox settings"
    },
    {
      type: "ex_remove_mailbox",
      message0: "Remove mailbox %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes a mailbox"
    },
    {
      type: "ex_enable_mailbox_audit",
      message0: "Enable audit logging for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Enables mailbox audit logging"
    },
    {
      type: "ex_get_mailbox_stats",
      message0: "Get mailbox statistics for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets mailbox size statistics"
    },
    // Permissions
    {
      type: "ex_get_mailbox_permission",
      message0: "Get mailbox permissions for %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "user@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Gets mailbox permissions"
    },
    {
      type: "ex_add_mailbox_permission",
      message0: "Add %1 permission %2 to mailbox %3",
      args0: [
        { type: "field_input", name: "USER", text: "admin@domain.com" },
        {
          type: "field_dropdown",
          name: "ACCESS",
          options: [
            ["FullAccess", "FullAccess"],
            ["SendAs", "SendAs"],
            ["SendOnBehalf", "SendOnBehalf"]
          ]
        },
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Grants mailbox permissions"
    },
    {
      type: "ex_remove_mailbox_permission",
      message0: "Remove %1 permission from mailbox %2",
      args0: [
        { type: "field_input", name: "USER", text: "admin@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Removes mailbox permissions"
    },
    {
      type: "ex_add_recipient_permission",
      message0: "Add SendAs permission %1 to %2",
      args0: [
        { type: "field_input", name: "USER", text: "admin@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "user@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Grants SendAs permission"
    },
    // Groups
    {
      type: "ex_get_distribution_group",
      message0: "Get distribution group %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Gets a distribution group"
    },
    {
      type: "ex_new_distribution_group",
      message0: "New distribution group %1 email %2",
      args0: [
        { type: "field_input", name: "NAME", text: "All Staff" },
        { type: "field_input", name: "EMAIL", text: "allstaff@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Creates a distribution group"
    },
    {
      type: "ex_add_distribution_group_member",
      message0: "Add %1 to distribution group %2",
      args0: [
        { type: "field_input", name: "MEMBER", text: "user@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Adds member to distribution group"
    },
    {
      type: "ex_remove_distribution_group_member",
      message0: "Remove %1 from distribution group %2",
      args0: [
        { type: "field_input", name: "MEMBER", text: "user@domain.com" },
        { type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Removes member from distribution group"
    },
    {
      type: "ex_get_distribution_group_member",
      message0: "Get members of distribution group %1",
      args0: [{ type: "field_input", name: "IDENTITY", text: "AllStaff@domain.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Gets distribution group members"
    },
    // Tracing
    {
      type: "ex_get_message_trace",
      message0: "Get message trace sender %1 days %2",
      args0: [
        { type: "field_input", name: "SENDER", text: "user@domain.com" },
        { type: "field_number", name: "DAYS", value: 7, min: 1, max: 10 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 250,
      tooltip: "Traces email messages"
    },
    {
      type: "ex_get_message_trace_detail",
      message0: "Get message trace detail for message ID %1",
      args0: [{ type: "field_input", name: "MESSAGEID", text: "<message-id>" }],
      previousStatement: null,
      nextStatement: null,
      colour: 250,
      tooltip: "Gets detailed message trace"
    },
    // Transport Rules
    {
      type: "ex_get_transport_rule",
      message0: "Get transport rules",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 245,
      tooltip: "Gets Exchange transport rules"
    },
    {
      type: "ex_new_transport_rule",
      message0: "New transport rule %1",
      args0: [{ type: "field_input", name: "NAME", text: "Block External Forward" }],
      previousStatement: null,
      nextStatement: null,
      colour: 245,
      tooltip: "Creates a new transport rule"
    }
  ],
  server: [
    // Event Logs
    {
      type: "svr_get_eventlog",
      message0: "Get event log %1 last %2 entries",
      args0: [
        { type: "field_input", name: "LOG", text: "System" },
        { type: "field_number", name: "COUNT", value: 50, min: 1, max: 5000 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 190,
      tooltip: "Gets recent events from Windows Event Log"
    },
    {
      type: "svr_get_eventlog_level",
      message0: "Get event log %1 level %2 last %3 entries",
      args0: [
        { type: "field_input", name: "LOG", text: "System" },
        {
          type: "field_dropdown",
          name: "LEVEL",
          options: [
            ["Error", "Error"],
            ["Warning", "Warning"],
            ["Information", "Information"]
          ]
        },
        { type: "field_number", name: "COUNT", value: 50, min: 1, max: 5000 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 190,
      tooltip: "Gets events by level"
    },
    {
      type: "svr_clear_eventlog",
      message0: "Clear event log %1",
      args0: [{ type: "field_input", name: "LOG", text: "Application" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Clears an event log"
    },
    {
      type: "svr_get_winevent",
      message0: "Get Windows events log %1 max %2",
      args0: [
        { type: "field_input", name: "LOG", text: "Security" },
        { type: "field_number", name: "MAX", value: 100, min: 1, max: 10000 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 190,
      tooltip: "Gets Windows events (newer method)"
    },
    // Features & Roles
    {
      type: "svr_get_windows_feature",
      message0: "Get Windows feature %1",
      args0: [{ type: "field_input", name: "NAME", text: "Web-Server" }],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "Gets Windows features"
    },
    {
      type: "svr_get_windows_feature_all",
      message0: "Get all Windows features",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "Lists all Windows features"
    },
    {
      type: "svr_install_windows_feature",
      message0: "Install Windows feature %1",
      args0: [{ type: "field_input", name: "NAME", text: "Web-Server" }],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "Installs a Windows feature"
    },
    {
      type: "svr_uninstall_windows_feature",
      message0: "Uninstall Windows feature %1",
      args0: [{ type: "field_input", name: "NAME", text: "Web-Server" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Uninstalls a Windows feature"
    },
    {
      type: "svr_get_hotfix",
      message0: "Get installed hotfixes",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 170,
      tooltip: "Gets installed Windows updates"
    },
    {
      type: "svr_get_hotfix_id",
      message0: "Get hotfix by ID %1",
      args0: [{ type: "field_input", name: "ID", text: "KB5000001" }],
      previousStatement: null,
      nextStatement: null,
      colour: 170,
      tooltip: "Gets specific hotfix"
    },
    // Scheduled Tasks
    {
      type: "svr_get_scheduled_task",
      message0: "Get scheduled task %1",
      args0: [{ type: "field_input", name: "NAME", text: "Backup*" }],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: "Gets scheduled tasks"
    },
    {
      type: "svr_register_scheduled_task",
      message0: "Register scheduled task %1 action %2",
      args0: [
        { type: "field_input", name: "NAME", text: "DailyBackup" },
        { type: "field_input", name: "ACTION", text: "C:\\Scripts\\backup.ps1" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: "Registers a new scheduled task"
    },
    {
      type: "svr_start_scheduled_task",
      message0: "Start scheduled task %1",
      args0: [{ type: "field_input", name: "NAME", text: "DailyBackup" }],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: "Starts a scheduled task"
    },
    {
      type: "svr_stop_scheduled_task",
      message0: "Stop scheduled task %1",
      args0: [{ type: "field_input", name: "NAME", text: "DailyBackup" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Stops a running scheduled task"
    },
    {
      type: "svr_unregister_scheduled_task",
      message0: "Unregister scheduled task %1",
      args0: [{ type: "field_input", name: "NAME", text: "DailyBackup" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes a scheduled task"
    },
    // System
    {
      type: "svr_get_wmi_object",
      message0: "Get WMI object class %1",
      args0: [{ type: "field_input", name: "CLASS", text: "Win32_OperatingSystem" }],
      previousStatement: null,
      nextStatement: null,
      colour: 150,
      tooltip: "Gets WMI objects"
    },
    {
      type: "svr_get_cim_instance",
      message0: "Get CIM instance class %1",
      args0: [{ type: "field_input", name: "CLASS", text: "Win32_OperatingSystem" }],
      previousStatement: null,
      nextStatement: null,
      colour: 150,
      tooltip: "Gets CIM instances (newer than WMI)"
    },
    {
      type: "svr_get_disk_info",
      message0: "Get disk info drive %1",
      args0: [{ type: "field_input", name: "DRIVE", text: "C" }],
      previousStatement: null,
      nextStatement: null,
      colour: 140,
      tooltip: "Gets disk space information"
    },
    {
      type: "svr_get_computer_info",
      message0: "Get computer information",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 150,
      tooltip: "Gets comprehensive computer info"
    },
    {
      type: "svr_restart_computer",
      message0: "Restart computer %1 force %2",
      args0: [
        { type: "field_input", name: "COMPUTER", text: "localhost" },
        { type: "field_checkbox", name: "FORCE", checked: false }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Restarts a computer"
    },
    {
      type: "svr_stop_computer",
      message0: "Stop computer %1 force %2",
      args0: [
        { type: "field_input", name: "COMPUTER", text: "localhost" },
        { type: "field_checkbox", name: "FORCE", checked: false }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Shuts down a computer"
    },
    {
      type: "svr_get_service",
      message0: "Get Windows services",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 180,
      tooltip: "Gets Windows services"
    }
  ],
  networking: [
    // Connectivity
    {
      type: "net_test_connection",
      message0: "Test-Connection to %1 count %2",
      args0: [
        { type: "field_input", name: "TARGET", text: "8.8.8.8" },
        { type: "field_number", name: "COUNT", value: 4, min: 1, max: 20 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 140,
      tooltip: "Pings a remote host"
    },
    {
      type: "net_test_netconnection",
      message0: "Test-NetConnection to %1 port %2",
      args0: [
        { type: "field_input", name: "TARGET", text: "google.com" },
        { type: "field_number", name: "PORT", value: 443, min: 1, max: 65535 }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 140,
      tooltip: "Tests network connectivity to a port"
    },
    {
      type: "net_test_netconnection_trace",
      message0: "Test-NetConnection to %1 with traceroute",
      args0: [{ type: "field_input", name: "TARGET", text: "google.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 140,
      tooltip: "Tests connectivity with route trace"
    },
    // DNS
    {
      type: "net_resolve_dns",
      message0: "Resolve-DnsName %1",
      args0: [{ type: "field_input", name: "NAME", text: "google.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 130,
      tooltip: "Resolves DNS names"
    },
    {
      type: "net_resolve_dns_type",
      message0: "Resolve-DnsName %1 type %2",
      args0: [
        { type: "field_input", name: "NAME", text: "google.com" },
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["A", "A"],
            ["AAAA", "AAAA"],
            ["MX", "MX"],
            ["TXT", "TXT"],
            ["CNAME", "CNAME"],
            ["NS", "NS"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 130,
      tooltip: "Resolves DNS by record type"
    },
    {
      type: "net_set_dnsserver",
      message0: "Set DNS server interface %1 address %2",
      args0: [
        { type: "field_input", name: "INTERFACE", text: "Ethernet" },
        { type: "field_input", name: "ADDRESS", text: "8.8.8.8" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 130,
      tooltip: "Sets DNS server addresses"
    },
    {
      type: "net_get_dnsclient",
      message0: "Get DNS client settings",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 130,
      tooltip: "Gets DNS client configuration"
    },
    {
      type: "net_clear_dnscache",
      message0: "Clear DNS cache",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 130,
      tooltip: "Clears DNS resolver cache"
    },
    // IP & Adapters
    {
      type: "net_get_netipaddress",
      message0: "Get network IP addresses",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "Gets IP address configuration"
    },
    {
      type: "net_get_netadapter",
      message0: "Get network adapters",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "Gets network adapter info"
    },
    {
      type: "net_get_netadapter_name",
      message0: "Get network adapter %1",
      args0: [{ type: "field_input", name: "NAME", text: "Ethernet" }],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "Gets specific network adapter"
    },
    {
      type: "net_enable_netadapter",
      message0: "Enable network adapter %1",
      args0: [{ type: "field_input", name: "NAME", text: "Ethernet" }],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "Enables a network adapter"
    },
    {
      type: "net_disable_netadapter",
      message0: "Disable network adapter %1",
      args0: [{ type: "field_input", name: "NAME", text: "Ethernet" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Disables a network adapter"
    },
    {
      type: "net_restart_netadapter",
      message0: "Restart network adapter %1",
      args0: [{ type: "field_input", name: "NAME", text: "Ethernet" }],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "Restarts a network adapter"
    },
    {
      type: "net_get_netroute",
      message0: "Get network routes",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 100,
      tooltip: "Gets network routing table"
    },
    {
      type: "net_new_netipaddress",
      message0: "New IP address %1 prefix %2 interface %3",
      args0: [
        { type: "field_input", name: "IP", text: "192.168.1.100" },
        { type: "field_number", name: "PREFIX", value: 24, min: 1, max: 32 },
        { type: "field_input", name: "INTERFACE", text: "Ethernet" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 120,
      tooltip: "Assigns new IP address"
    },
    // Firewall
    {
      type: "net_get_netfirewallrule",
      message0: "Get firewall rule %1",
      args0: [{ type: "field_input", name: "NAME", text: "*Remote*" }],
      previousStatement: null,
      nextStatement: null,
      colour: 110,
      tooltip: "Gets Windows Firewall rules"
    },
    {
      type: "net_new_netfirewallrule",
      message0: "New firewall rule %1 port %2 action %3",
      args0: [
        { type: "field_input", name: "NAME", text: "Allow-Port-8080" },
        { type: "field_number", name: "PORT", value: 8080, min: 1, max: 65535 },
        {
          type: "field_dropdown",
          name: "ACTION",
          options: [
            ["Allow", "Allow"],
            ["Block", "Block"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 110,
      tooltip: "Creates a new firewall rule"
    },
    {
      type: "net_enable_netfirewallrule",
      message0: "Enable firewall rule %1",
      args0: [{ type: "field_input", name: "NAME", text: "RemoteDesktop" }],
      previousStatement: null,
      nextStatement: null,
      colour: 110,
      tooltip: "Enables a firewall rule"
    },
    {
      type: "net_disable_netfirewallrule",
      message0: "Disable firewall rule %1",
      args0: [{ type: "field_input", name: "NAME", text: "RemoteDesktop" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Disables a firewall rule"
    },
    {
      type: "net_remove_netfirewallrule",
      message0: "Remove firewall rule %1",
      args0: [{ type: "field_input", name: "NAME", text: "Allow-Port-8080" }],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes a firewall rule"
    },
    {
      type: "net_get_netfirewallprofile",
      message0: "Get firewall profile status",
      args0: [],
      previousStatement: null,
      nextStatement: null,
      colour: 110,
      tooltip: "Gets firewall profile configuration"
    },
    // Web
    {
      type: "net_invoke_webrequest",
      message0: "Invoke web request %1",
      args0: [{ type: "field_input", name: "URI", text: "https://api.example.com" }],
      previousStatement: null,
      nextStatement: null,
      colour: 90,
      tooltip: "Makes HTTP requests"
    },
    {
      type: "net_invoke_webrequest_method",
      message0: "Invoke web request %1 method %2",
      args0: [
        { type: "field_input", name: "URI", text: "https://api.example.com" },
        {
          type: "field_dropdown",
          name: "METHOD",
          options: [
            ["GET", "GET"],
            ["POST", "POST"],
            ["PUT", "PUT"],
            ["DELETE", "DELETE"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 90,
      tooltip: "Makes HTTP requests with method"
    },
    {
      type: "net_invoke_restmethod",
      message0: "Invoke REST method %1",
      args0: [{ type: "field_input", name: "URI", text: "https://api.example.com/data" }],
      previousStatement: null,
      nextStatement: null,
      colour: 90,
      tooltip: "Makes REST API calls"
    }
  ],
  sql: [
    // Queries
    {
      type: "sql_invoke_query",
      message0: "Invoke-Sqlcmd on %1 database %2 query %3",
      args0: [
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" },
        { type: "field_input", name: "DATABASE", text: "master" },
        { type: "field_input", name: "QUERY", text: "SELECT @@VERSION;" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 300,
      tooltip: "Runs a SQL query"
    },
    {
      type: "sql_invoke_query_file",
      message0: "Invoke-Sqlcmd on %1 database %2 input file %3",
      args0: [
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" },
        { type: "field_input", name: "DATABASE", text: "master" },
        { type: "field_input", name: "FILE", text: "C:\\Scripts\\query.sql" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 300,
      tooltip: "Runs a SQL script file"
    },
    // Backup & Restore
    {
      type: "sql_backup_database",
      message0: "Backup SQL database %1 to %2",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "PATH", text: "C:\\Backups\\db.bak" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: "Backs up a SQL database"
    },
    {
      type: "sql_backup_database_compression",
      message0: "Backup SQL database %1 to %2 with compression",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "PATH", text: "C:\\Backups\\db.bak" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: "Backs up database with compression"
    },
    {
      type: "sql_restore_database",
      message0: "Restore SQL database %1 from %2",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "PATH", text: "C:\\Backups\\db.bak" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: "Restores a SQL database"
    },
    {
      type: "sql_restore_database_replace",
      message0: "Restore SQL database %1 from %2 with replace",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "PATH", text: "C:\\Backups\\db.bak" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: "Restores database with replace"
    },
    // Databases
    {
      type: "sql_get_database",
      message0: "Get SQL databases on %1",
      args0: [{ type: "field_input", name: "SERVER", text: "SQLSERVER01" }],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Lists databases on SQL Server"
    },
    {
      type: "sql_get_database_name",
      message0: "Get SQL database %1 on %2",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Gets specific database info"
    },
    {
      type: "sql_new_database",
      message0: "New SQL database %1 on %2",
      args0: [
        { type: "field_input", name: "DATABASE", text: "NewDB" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Creates a new database"
    },
    {
      type: "sql_remove_database",
      message0: "Remove SQL database %1 from %2",
      args0: [
        { type: "field_input", name: "DATABASE", text: "OldDB" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes a database"
    },
    {
      type: "sql_set_database_owner",
      message0: "Set database %1 owner to %2 on %3",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "OWNER", text: "sa" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: "Sets database owner"
    },
    // Agent Jobs
    {
      type: "sql_get_sqlagent_job",
      message0: "Get SQL Agent job %1 on %2",
      args0: [
        { type: "field_input", name: "NAME", text: "Backup*" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Gets SQL Agent jobs"
    },
    {
      type: "sql_start_sqlagent_job",
      message0: "Start SQL Agent job %1 on %2",
      args0: [
        { type: "field_input", name: "NAME", text: "DailyBackup" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Starts a SQL Agent job"
    },
    {
      type: "sql_stop_sqlagent_job",
      message0: "Stop SQL Agent job %1 on %2",
      args0: [
        { type: "field_input", name: "NAME", text: "DailyBackup" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Stops a SQL Agent job"
    },
    {
      type: "sql_get_sqlagent_jobhistory",
      message0: "Get SQL Agent job history for %1 on %2",
      args0: [
        { type: "field_input", name: "NAME", text: "DailyBackup" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 270,
      tooltip: "Gets job execution history"
    },
    // Security
    {
      type: "sql_get_sqllogin",
      message0: "Get SQL logins on %1",
      args0: [{ type: "field_input", name: "SERVER", text: "SQLSERVER01" }],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Gets SQL Server logins"
    },
    {
      type: "sql_add_sqllogin",
      message0: "Add SQL login %1 on %2",
      args0: [
        { type: "field_input", name: "NAME", text: "AppUser" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Creates a new SQL login"
    },
    {
      type: "sql_remove_sqllogin",
      message0: "Remove SQL login %1 from %2",
      args0: [
        { type: "field_input", name: "NAME", text: "AppUser" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 0,
      tooltip: "Removes a SQL login"
    },
    {
      type: "sql_get_sqluser",
      message0: "Get SQL users in database %1 on %2",
      args0: [
        { type: "field_input", name: "DATABASE", text: "ProductionDB" },
        { type: "field_input", name: "SERVER", text: "SQLSERVER01" }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 260,
      tooltip: "Gets database users"
    },
    // Testing
    {
      type: "sql_test_sqlconnection",
      message0: "Test SQL connection to %1",
      args0: [{ type: "field_input", name: "SERVER", text: "SQLSERVER01" }],
      previousStatement: null,
      nextStatement: null,
      colour: 250,
      tooltip: "Tests connectivity to SQL Server"
    },
    {
      type: "sql_get_sqlinstance",
      message0: "Get SQL instances on %1",
      args0: [{ type: "field_input", name: "SERVER", text: "SQLSERVER01" }],
      previousStatement: null,
      nextStatement: null,
      colour: 240,
      tooltip: "Gets SQL Server instances"
    }
  ]
};

// ALL generators - EXPANDED
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
  
  // Exchange - Mailboxes
  ex_get_mailbox: (block) => `Get-Mailbox -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ex_get_mailbox_all: (block) => `Get-Mailbox -ResultSize Unlimited\n`,
  ex_new_mailbox: (block) => `New-Mailbox -Name "${block.getFieldValue('NAME')}" -UserPrincipalName "${block.getFieldValue('UPN')}"\n`,
  ex_set_mailbox: (block) => `Set-Mailbox -Identity "${block.getFieldValue('IDENTITY')}" -ProhibitSendQuota "${block.getFieldValue('QUOTA')}GB"\n`,
  ex_remove_mailbox: (block) => `Remove-Mailbox -Identity "${block.getFieldValue('IDENTITY')}" -Confirm:$false\n`,
  ex_enable_mailbox_audit: (block) => `Set-Mailbox -Identity "${block.getFieldValue('IDENTITY')}" -AuditEnabled $true\n`,
  ex_get_mailbox_stats: (block) => `Get-MailboxStatistics -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  
  // Exchange - Permissions
  ex_get_mailbox_permission: (block) => `Get-MailboxPermission -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ex_add_mailbox_permission: (block) => `Add-MailboxPermission -Identity "${block.getFieldValue('IDENTITY')}" -User "${block.getFieldValue('USER')}" -AccessRights ${block.getFieldValue('ACCESS')}\n`,
  ex_remove_mailbox_permission: (block) => `Remove-MailboxPermission -Identity "${block.getFieldValue('IDENTITY')}" -User "${block.getFieldValue('USER')}" -Confirm:$false\n`,
  ex_add_recipient_permission: (block) => `Add-RecipientPermission -Identity "${block.getFieldValue('IDENTITY')}" -Trustee "${block.getFieldValue('USER')}" -AccessRights SendAs -Confirm:$false\n`,
  
  // Exchange - Groups
  ex_get_distribution_group: (block) => `Get-DistributionGroup -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  ex_new_distribution_group: (block) => `New-DistributionGroup -Name "${block.getFieldValue('NAME')}" -PrimarySmtpAddress "${block.getFieldValue('EMAIL')}"\n`,
  ex_add_distribution_group_member: (block) => `Add-DistributionGroupMember -Identity "${block.getFieldValue('IDENTITY')}" -Member "${block.getFieldValue('MEMBER')}"\n`,
  ex_remove_distribution_group_member: (block) => `Remove-DistributionGroupMember -Identity "${block.getFieldValue('IDENTITY')}" -Member "${block.getFieldValue('MEMBER')}" -Confirm:$false\n`,
  ex_get_distribution_group_member: (block) => `Get-DistributionGroupMember -Identity "${block.getFieldValue('IDENTITY')}"\n`,
  
  // Exchange - Tracing
  ex_get_message_trace: (block) => `Get-MessageTrace -SenderAddress "${block.getFieldValue('SENDER')}" -StartDate (Get-Date).AddDays(-${block.getFieldValue('DAYS')}) -EndDate (Get-Date)\n`,
  ex_get_message_trace_detail: (block) => `Get-MessageTraceDetail -MessageTraceId "${block.getFieldValue('MESSAGEID')}"\n`,
  
  // Exchange - Transport Rules
  ex_get_transport_rule: (block) => `Get-TransportRule\n`,
  ex_new_transport_rule: (block) => `New-TransportRule -Name "${block.getFieldValue('NAME')}"\n`,
  
  // Server - Event Logs
  svr_get_eventlog: (block) => `Get-EventLog -LogName "${block.getFieldValue('LOG')}" -Newest ${block.getFieldValue('COUNT')}\n`,
  svr_get_eventlog_level: (block) => `Get-EventLog -LogName "${block.getFieldValue('LOG')}" -EntryType ${block.getFieldValue('LEVEL')} -Newest ${block.getFieldValue('COUNT')}\n`,
  svr_clear_eventlog: (block) => `Clear-EventLog -LogName "${block.getFieldValue('LOG')}"\n`,
  svr_get_winevent: (block) => `Get-WinEvent -LogName "${block.getFieldValue('LOG')}" -MaxEvents ${block.getFieldValue('MAX')}\n`,
  
  // Server - Features & Roles
  svr_get_windows_feature: (block) => `Get-WindowsFeature -Name "${block.getFieldValue('NAME')}"\n`,
  svr_get_windows_feature_all: (block) => `Get-WindowsFeature\n`,
  svr_install_windows_feature: (block) => `Install-WindowsFeature -Name "${block.getFieldValue('NAME')}"\n`,
  svr_uninstall_windows_feature: (block) => `Uninstall-WindowsFeature -Name "${block.getFieldValue('NAME')}"\n`,
  svr_get_hotfix: (block) => `Get-Hotfix\n`,
  svr_get_hotfix_id: (block) => `Get-Hotfix -Id "${block.getFieldValue('ID')}"\n`,
  
  // Server - Scheduled Tasks
  svr_get_scheduled_task: (block) => `Get-ScheduledTask -TaskName "${block.getFieldValue('NAME')}"\n`,
  svr_register_scheduled_task: (block) => `$action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-File '${block.getFieldValue('ACTION')}'"
Register-ScheduledTask -TaskName "${block.getFieldValue('NAME')}" -Action $action\n`,
  svr_start_scheduled_task: (block) => `Start-ScheduledTask -TaskName "${block.getFieldValue('NAME')}"\n`,
  svr_stop_scheduled_task: (block) => `Stop-ScheduledTask -TaskName "${block.getFieldValue('NAME')}"\n`,
  svr_unregister_scheduled_task: (block) => `Unregister-ScheduledTask -TaskName "${block.getFieldValue('NAME')}" -Confirm:$false\n`,
  
  // Server - System
  svr_get_wmi_object: (block) => `Get-WmiObject -Class ${block.getFieldValue('CLASS')}\n`,
  svr_get_cim_instance: (block) => `Get-CimInstance -ClassName ${block.getFieldValue('CLASS')}\n`,
  svr_get_disk_info: (block) => `Get-PSDrive ${block.getFieldValue('DRIVE')}\n`,
  svr_get_computer_info: (block) => `Get-ComputerInfo\n`,
  svr_restart_computer: (block) => {
    const force = block.getFieldValue('FORCE') === 'TRUE';
    return `Restart-Computer -ComputerName "${block.getFieldValue('COMPUTER')}"${force ? ' -Force' : ''}\n`;
  },
  svr_stop_computer: (block) => {
    const force = block.getFieldValue('FORCE') === 'TRUE';
    return `Stop-Computer -ComputerName "${block.getFieldValue('COMPUTER')}"${force ? ' -Force' : ''}\n`;
  },
  svr_get_service: (block) => `Get-Service\n`,
  
  // Networking - Connectivity
  net_test_connection: (block) => `Test-Connection -ComputerName "${block.getFieldValue('TARGET')}" -Count ${block.getFieldValue('COUNT')}\n`,
  net_test_netconnection: (block) => `Test-NetConnection -ComputerName "${block.getFieldValue('TARGET')}" -Port ${block.getFieldValue('PORT')}\n`,
  net_test_netconnection_trace: (block) => `Test-NetConnection -ComputerName "${block.getFieldValue('TARGET')}" -TraceRoute\n`,
  
  // Networking - DNS
  net_resolve_dns: (block) => `Resolve-DnsName "${block.getFieldValue('NAME')}"\n`,
  net_resolve_dns_type: (block) => `Resolve-DnsName "${block.getFieldValue('NAME')}" -Type ${block.getFieldValue('TYPE')}\n`,
  net_set_dnsserver: (block) => `Set-DnsClientServerAddress -InterfaceAlias "${block.getFieldValue('INTERFACE')}" -ServerAddresses "${block.getFieldValue('ADDRESS')}"\n`,
  net_get_dnsclient: (block) => `Get-DnsClient\n`,
  net_clear_dnscache: (block) => `Clear-DnsClientCache\n`,
  
  // Networking - IP & Adapters
  net_get_netipaddress: (block) => `Get-NetIPAddress\n`,
  net_get_netadapter: (block) => `Get-NetAdapter\n`,
  net_get_netadapter_name: (block) => `Get-NetAdapter -Name "${block.getFieldValue('NAME')}"\n`,
  net_enable_netadapter: (block) => `Enable-NetAdapter -Name "${block.getFieldValue('NAME')}"\n`,
  net_disable_netadapter: (block) => `Disable-NetAdapter -Name "${block.getFieldValue('NAME')}" -Confirm:$false\n`,
  net_restart_netadapter: (block) => `Restart-NetAdapter -Name "${block.getFieldValue('NAME')}"\n`,
  net_get_netroute: (block) => `Get-NetRoute\n`,
  net_new_netipaddress: (block) => `New-NetIPAddress -IPAddress "${block.getFieldValue('IP')}" -PrefixLength ${block.getFieldValue('PREFIX')} -InterfaceAlias "${block.getFieldValue('INTERFACE')}"\n`,
  
  // Networking - Firewall
  net_get_netfirewallrule: (block) => `Get-NetFirewallRule -DisplayName "${block.getFieldValue('NAME')}"\n`,
  net_new_netfirewallrule: (block) => `New-NetFirewallRule -DisplayName "${block.getFieldValue('NAME')}" -Direction Inbound -LocalPort ${block.getFieldValue('PORT')} -Protocol TCP -Action ${block.getFieldValue('ACTION')}\n`,
  net_enable_netfirewallrule: (block) => `Enable-NetFirewallRule -DisplayName "${block.getFieldValue('NAME')}"\n`,
  net_disable_netfirewallrule: (block) => `Disable-NetFirewallRule -DisplayName "${block.getFieldValue('NAME')}"\n`,
  net_remove_netfirewallrule: (block) => `Remove-NetFirewallRule -DisplayName "${block.getFieldValue('NAME')}" -Confirm:$false\n`,
  net_get_netfirewallprofile: (block) => `Get-NetFirewallProfile\n`,
  
  // Networking - Web
  net_invoke_webrequest: (block) => `Invoke-WebRequest -Uri "${block.getFieldValue('URI')}"\n`,
  net_invoke_webrequest_method: (block) => `Invoke-WebRequest -Uri "${block.getFieldValue('URI')}" -Method ${block.getFieldValue('METHOD')}\n`,
  net_invoke_restmethod: (block) => `Invoke-RestMethod -Uri "${block.getFieldValue('URI')}"\n`,
  
  // SQL - Queries
  sql_invoke_query: (block) => `Invoke-Sqlcmd -ServerInstance "${block.getFieldValue('SERVER')}" -Database "${block.getFieldValue('DATABASE')}" -Query "${block.getFieldValue('QUERY')}"\n`,
  sql_invoke_query_file: (block) => `Invoke-Sqlcmd -ServerInstance "${block.getFieldValue('SERVER')}" -Database "${block.getFieldValue('DATABASE')}" -InputFile "${block.getFieldValue('FILE')}"\n`,
  
  // SQL - Backup & Restore
  sql_backup_database: (block) => `Backup-SqlDatabase -Database "${block.getFieldValue('DATABASE')}" -BackupFile "${block.getFieldValue('PATH')}"\n`,
  sql_backup_database_compression: (block) => `Backup-SqlDatabase -Database "${block.getFieldValue('DATABASE')}" -BackupFile "${block.getFieldValue('PATH')}" -CompressionOption On\n`,
  sql_restore_database: (block) => `Restore-SqlDatabase -Database "${block.getFieldValue('DATABASE')}" -BackupFile "${block.getFieldValue('PATH')}"\n`,
  sql_restore_database_replace: (block) => `Restore-SqlDatabase -Database "${block.getFieldValue('DATABASE')}" -BackupFile "${block.getFieldValue('PATH')}" -ReplaceDatabase\n`,
  
  // SQL - Databases
  sql_get_database: (block) => `Get-SqlDatabase -ServerInstance "${block.getFieldValue('SERVER')}"\n`,
  sql_get_database_name: (block) => `Get-SqlDatabase -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('DATABASE')}"\n`,
  sql_new_database: (block) => `New-SqlDatabase -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('DATABASE')}"\n`,
  sql_remove_database: (block) => `Remove-SqlDatabase -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('DATABASE')}"\n`,
  sql_set_database_owner: (block) => `Set-SqlDatabase -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('DATABASE')}" -Owner "${block.getFieldValue('OWNER')}"\n`,
  
  // SQL - Agent Jobs
  sql_get_sqlagent_job: (block) => `Get-SqlAgentJob -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('NAME')}"\n`,
  sql_start_sqlagent_job: (block) => `Start-SqlAgentJob -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('NAME')}"\n`,
  sql_stop_sqlagent_job: (block) => `Stop-SqlAgentJob -ServerInstance "${block.getFieldValue('SERVER')}" -Name "${block.getFieldValue('NAME')}"\n`,
  sql_get_sqlagent_jobhistory: (block) => `Get-SqlAgentJobHistory -ServerInstance "${block.getFieldValue('SERVER')}" -JobName "${block.getFieldValue('NAME')}"\n`,
  
  // SQL - Security
  sql_get_sqllogin: (block) => `Get-SqlLogin -ServerInstance "${block.getFieldValue('SERVER')}"\n`,
  sql_add_sqllogin: (block) => `Add-SqlLogin -ServerInstance "${block.getFieldValue('SERVER')}" -LoginName "${block.getFieldValue('NAME')}"\n`,
  sql_remove_sqllogin: (block) => `Remove-SqlLogin -ServerInstance "${block.getFieldValue('SERVER')}" -LoginName "${block.getFieldValue('NAME')}"\n`,
  sql_get_sqluser: (block) => `Get-SqlUser -ServerInstance "${block.getFieldValue('SERVER')}" -Database "${block.getFieldValue('DATABASE')}"\n`,
  
  // SQL - Testing
  sql_test_sqlconnection: (block) => `Test-SqlConnection -ServerInstance "${block.getFieldValue('SERVER')}"\n`,
  sql_get_sqlinstance: (block) => `Get-SqlInstance -ServerInstance "${block.getFieldValue('SERVER')}"\n`
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
    console.log('Toolbox should now be visible with Core blocks');
    
  } catch (error) {
    console.error('FATAL ERROR during initialization:', error);
    alert('Critical error: ' + error.message);
  }
});