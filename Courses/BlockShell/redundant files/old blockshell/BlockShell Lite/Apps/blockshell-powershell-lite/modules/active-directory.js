/**
 * Active Directory Module
 * All AD blocks from the original file
 */

(function() {
  console.log('Loading Active Directory module...');
  
  // Define ALL AD blocks exactly as in your original
  const adBlocks = [
    {
      "type": "create_ad_user",
      "message0": "Create AD User (Name: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Creates a new Active Directory user account.\n\nPowerShell: New-ADUser -Name \"value\" -Enabled $true",
      "helpUrl": ""
    },
    {
      "type": "get_ad_user",
      "message0": "Get AD User Info (User: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Retrieves information about an AD user. PowerShell: Get-ADUser",
      "helpUrl": ""
    },
    {
      "type": "remove_ad_user",
      "message0": "Remove AD User (Name: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Deletes an AD user account. PowerShell: Remove-ADUser",
      "helpUrl": ""
    },
    {
      "type": "set_user_properties",
      "message0": "Set User Properties (User: %1 Email: %2 Department: %3)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_input", "name": "EMAIL", "text": "jdoe@example.com" },
        { "type": "field_input", "name": "DEPARTMENT", "text": "IT" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Sets common user properties like email and department. PowerShell: Set-ADUser",
      "helpUrl": ""
    },
    {
      "type": "move_ad_user",
      "message0": "Move AD User %1 to OU %2",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_input", "name": "OU", "text": "StaffOU" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Moves a user to a different Organizational Unit. PowerShell: Move-ADObject",
      "helpUrl": ""
    },
    {
      "type": "rename_ad_user",
      "message0": "Rename AD User %1 to %2",
      "args0": [
        { "type": "field_input", "name": "OLDNAME", "text": "jdoe" },
        { "type": "field_input", "name": "NEWNAME", "text": "johndoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Renames an existing user account. PowerShell: Rename-ADObject",
      "helpUrl": ""
    },
    {
      "type": "create_user_from_template",
      "message0": "Create User From Template (New User: %1 Template User: %2)",
      "args0": [
        { "type": "field_input", "name": "NEWUSER", "text": "jsmith" },
        { "type": "field_input", "name": "TEMPLATEUSER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Creates a new user by copying properties from a template user.",
      "helpUrl": ""
    },
    {
      "type": "create_ad_group",
      "message0": "Create AD Group (Name: %1)",
      "args0": [{ "type": "field_input", "name": "GROUP", "text": "HRGroup" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Creates a new security or distribution group. PowerShell: New-ADGroup",
      "helpUrl": ""
    },
    {
      "type": "add_user_to_group",
      "message0": "Add User %1 to Group %2",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_input", "name": "GROUP", "text": "HRGroup" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Adds a user to an AD group. PowerShell: Add-ADGroupMember",
      "helpUrl": ""
    },
    {
      "type": "remove_user_from_group",
      "message0": "Remove User %1 from Group %2",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_input", "name": "GROUP", "text": "HRGroup" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Removes a user from an AD group. PowerShell: Remove-ADGroupMember",
      "helpUrl": ""
    },
    {
      "type": "copy_ad_group_members",
      "message0": "Copy Members from Group %1 to Group %2",
      "args0": [
        { "type": "field_input", "name": "SOURCE_GROUP", "text": "SourceGroup" },
        { "type": "field_input", "name": "TARGET_GROUP", "text": "TargetGroup" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Copies all members from one group to another.",
      "helpUrl": ""
    },
    {
      "type": "get_group_members",
      "message0": "Get Members of Group %1 Export to CSV? %2",
      "args0": [
        { "type": "field_input", "name": "GROUP", "text": "HRGroup" },
        { "type": "field_checkbox", "name": "EXPORT", "checked": false }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Lists all members of a group with option to export to CSV.",
      "helpUrl": ""
    },
    {
      "type": "nested_group_membership",
      "message0": "Get Nested Group Membership for %1 Include Transitive? %2",
      "args0": [
        { "type": "field_input", "name": "GROUP", "text": "ITGroup" },
        { "type": "field_checkbox", "name": "TRANSITIVE", "checked": true }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Gets nested group memberships.",
      "helpUrl": ""
    },
    {
      "type": "create_ou",
      "message0": "Create OU (Name: %1)",
      "args0": [{ "type": "field_input", "name": "OU", "text": "StaffOU" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Creates a new Organizational Unit. PowerShell: New-ADOrganizationalUnit",
      "helpUrl": ""
    },
    {
      "type": "search_ad_objects",
      "message0": "Search AD for %1 Filter by %2",
      "args0": [
        { "type": "field_input", "name": "SEARCHTERM", "text": "*Smith*" },
        { "type": "field_dropdown", "name": "OBJECTTYPE", "options": [
          ["All Objects", "All"],
          ["Users", "User"],
          ["Groups", "Group"],
          ["Computers", "Computer"],
          ["OUs", "OrganizationalUnit"]
        ]}
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Searches AD for objects matching criteria.",
      "helpUrl": ""
    },
    {
      "type": "get_inactive_computers",
      "message0": "Find Inactive Computer Accounts Days Inactive: %1",
      "args0": [
        { "type": "field_number", "name": "DAYS", "value": 90, "min": 1, "max": 365 }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Finds computer accounts not recently active.",
      "helpUrl": ""
    },
    {
      "type": "set_user_password",
      "message0": "Set AD User Password (User: %1 Password: %2)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_input", "name": "PASSWORD", "text": "P@ssword123" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Sets a user's password. PowerShell: Set-ADAccountPassword",
      "helpUrl": ""
    },
    {
      "type": "force_password_change",
      "message0": "Force Password Change at Next Login (User: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Forces user to change password at next login.",
      "helpUrl": ""
    },
    {
      "type": "unlock_ad_account",
      "message0": "Unlock AD Account (User: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Unlocks a locked user account.",
      "helpUrl": ""
    },
    {
      "type": "enable_ad_account",
      "message0": "Enable AD Account (User: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Enables a disabled account.",
      "helpUrl": ""
    },
    {
      "type": "disable_ad_account",
      "message0": "Disable AD Account (User: %1)",
      "args0": [{ "type": "field_input", "name": "USER", "text": "jdoe" }],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Disables a user account.",
      "helpUrl": ""
    },
    {
      "type": "export_group_membership",
      "message0": "Export User %1 Group Memberships to CSV",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Exports a user's group memberships to CSV.",
      "helpUrl": ""
    },
    {
      "type": "check_password_expiry",
      "message0": "Check Password Expiry for %1 Days Until Expiry: %2",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_number", "name": "DAYS", "value": 14, "min": 0, "max": 90 }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Checks if password will expire soon.",
      "helpUrl": ""
    },
    {
      "type": "check_locked_accounts",
      "message0": "Check for Locked Accounts Filter by OU: %1",
      "args0": [
        { "type": "field_input", "name": "OU", "text": "Users" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Finds locked accounts in an OU.",
      "helpUrl": ""
    },
    {
      "type": "reset_account_lockout",
      "message0": "Reset Account Lockout Counter for %1",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Resets bad password count.",
      "helpUrl": ""
    },
    {
      "type": "generate_user_report",
      "message0": "Generate User Report Type: %1 Output to: %2",
      "args0": [
        { "type": "field_dropdown", "name": "REPORTTYPE", "options": [
          ["Last Logon", "LastLogon"],
          ["Account Status", "AccountStatus"],
          ["Password Age", "PasswordAge"],
          ["Group Memberships", "Groups"]
        ]},
        { "type": "field_dropdown", "name": "OUTPUT", "options": [
          ["CSV", "CSV"],
          ["Console", "Console"]
        ]}
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Generates a comprehensive user report for auditing and compliance.",
      "helpUrl": ""
    }
  ];
  
  // Register all AD blocks with Blockly
  console.log('Registering', adBlocks.length, 'AD blocks with Blockly...');
  Blockly.defineBlocksWithJsonArray(adBlocks);
  
  // Register code generators for each block type
  const registerGenerators = () => {
    // Create AD User
    BlockShell.registerCodeGenerator('create_ad_user', function(block) {
      const user = block.getFieldValue('USER') || 'jdoe';
      return `# Create Active Directory User\nNew-ADUser -Name "${user}" -SamAccountName "${user}" -GivenName "${user}" -Surname "User" -DisplayName "${user}" -Enabled $true -AccountPassword (ConvertTo-SecureString "TempP@ss123!" -AsPlainText -Force) -PasswordNeverExpires $false -ChangePasswordAtLogon $true`;
    });
    
    // Get AD User
    BlockShell.registerCodeGenerator('get_ad_user', function(block) {
      const user = block.getFieldValue('USER') || 'jdoe';
      return `# Get AD User Information\nGet-ADUser -Identity "${user}" -Properties * | Format-List Name, SamAccountName, Enabled, EmailAddress, Department, Title, Manager, Office, TelephoneNumber`;
    });
    
    // Remove AD User
    BlockShell.registerCodeGenerator('remove_ad_user', function(block) {
      const user = block.getFieldValue('USER') || 'jdoe';
      return `# Remove AD User\nRemove-ADUser -Identity "${user}" -Confirm:$false`;
    });
    
    // Set User Properties
    BlockShell.registerCodeGenerator('set_user_properties', function(block) {
      const user = block.getFieldValue('USER') || 'jdoe';
      const email = block.getFieldValue('EMAIL') || 'user@example.com';
      const department = block.getFieldValue('DEPARTMENT') || 'IT';
      return `# Set User Properties\nSet-ADUser -Identity "${user}" -EmailAddress "${email}" -Department "${department}" -Company "Example Corp" -Title "Employee" -Office "Main Office"`;
    });
    
    // Move AD User
    BlockShell.registerCodeGenerator('move_ad_user', function(block) {
      const user = block.getFieldValue('USER') || 'jdoe';
      const ou = block.getFieldValue('OU') || 'StaffOU';
      return `# Move User to Different OU\nGet-ADUser -Identity "${user}" | Move-ADObject -TargetPath "OU=${ou},DC=example,DC=com"`;
    });
    
    // Rename AD User
    BlockShell.registerCodeGenerator('rename_ad_user', function(block) {
      const oldName = block.getFieldValue('OLDNAME') || 'jdoe';
      const newName = block.getFieldValue('NEWNAME') || 'johndoe';
      return `# Rename AD User\nRename-ADObject -Identity (Get-ADUser "${oldName}").DistinguishedName -NewName "${newName}"`;
    });
    
    // Add more generators as needed...
    BlockShell.registerCodeGenerator('create_ad_group', function(block) {
      const group = block.getFieldValue('GROUP') || 'NewGroup';
      return `# Create AD Group\nNew-ADGroup -Name "${group}" -SamAccountName "${group}" -GroupCategory Security -GroupScope Global -DisplayName "${group}" -Description "Created by BlockShell"`;
    });
    
    BlockShell.registerCodeGenerator('add_user_to_group', function(block) {
      const user = block.getFieldValue('USER') || 'jdoe';
      const group = block.getFieldValue('GROUP') || 'HRGroup';
      return `# Add User to Group\nAdd-ADGroupMember -Identity "${group}" -Members "${user}"`;
    });
    
    console.log('Registered code generators for AD blocks');
  };
  
  // Add all AD blocks to search index
  const addToSearchIndex = () => {
    console.log('Adding AD blocks to search index...');
    
    adBlocks.forEach(block => {
      // Extract block name from message0
      const name = block.message0
        .replace(/\([^)]*\)/g, '')
        .replace(/%\d+/g, '')
        .trim();
      
      // Determine category based on colour
      let category = 'Other';
      switch(block.colour) {
        case 180: category = 'User Management'; break;
        case 210: category = 'Group Management'; break;
        case 160: category = 'Organization'; break;
        case 230: category = 'Security'; break;
        case 130: category = 'Reports'; break;
        case 100: category = 'System Commands'; break;
      }
      
      // Extract keywords from tooltip and name
      const keywords = [];
      const text = (name + ' ' + (block.tooltip || '')).toLowerCase();
      
      if (text.includes('user')) keywords.push('user', 'account');
      if (text.includes('group')) keywords.push('group', 'team');
      if (text.includes('create')) keywords.push('create', 'new', 'add');
      if (text.includes('get')) keywords.push('get', 'find', 'search', 'list');
      if (text.includes('remove') || text.includes('delete')) keywords.push('remove', 'delete', 'destroy');
      if (text.includes('set')) keywords.push('set', 'update', 'modify', 'configure');
      if (text.includes('move')) keywords.push('move', 'transfer', 'relocate');
      if (text.includes('rename')) keywords.push('rename', 'change', 'modify');
      if (text.includes('password')) keywords.push('password', 'security', 'auth');
      if (text.includes('export')) keywords.push('export', 'csv', 'report');
      if (text.includes('report')) keywords.push('report', 'audit', 'compliance');
      if (text.includes('ou')) keywords.push('ou', 'organizational', 'unit');
      if (text.includes('computer')) keywords.push('computer', 'machine', 'device');
      if (text.includes('lock')) keywords.push('lock', 'unlock', 'security');
      
      // Add to search index
      BlockShell.addToSearchIndex({
        name: name,
        category: category,
        type: block.type,
        description: block.tooltip ? block.tooltip.split('\n')[0] : '',
        keywords: [...new Set(keywords)] // Remove duplicates
      });
    });
    
    console.log('Added', adBlocks.length, 'AD blocks to search index');
  };
  
  // Initialize when BlockShell is ready
  const initADModule = () => {
    if (typeof BlockShell !== 'undefined' && BlockShell.isInitialized) {
      registerGenerators();
      addToSearchIndex();
      console.log('Active Directory module fully loaded');
    } else {
      // Wait for BlockShell to be ready
      setTimeout(initADModule, 100);
    }
  };
  
  // Start initialization
  initADModule();
  
  console.log('Active Directory module script loaded');
})();