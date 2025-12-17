// ad-powershell.js
// Full Active Directory module for BlockShell Lite (ported from blockshell-active-directory-lite.html)

export function registerAdModule(engine) {
  const blocks = [
    {
      "type": "create_ad_user",
      "message0": "Create AD User (Name: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Creates a new Active Directory user account.\n\nPowerShell: New-ADUser -Name \"value\" -Enabled $true",
      "helpUrl": ""
    },
    {
      "type": "remove_ad_user",
      "message0": "Remove AD User (Name: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Deletes an Active Directory user account.\n\nPowerShell: Remove-ADUser -Identity \"value\" -Confirm:$false",
      "helpUrl": ""
    },
    {
      "type": "get_ad_user",
      "message0": "Get AD User Info (User: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Retrieves information about an Active Directory user.\n\nPowerShell: Get-ADUser -Identity \"user\" -Properties * | Format-List",
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
      "tooltip": "Sets common properties for an Active Directory user.\n\nPowerShell: Set-ADUser -Identity \"user\" -EmailAddress \"email\" -Department \"dept\"",
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
      "tooltip": "Renames an existing Active Directory user account.\n\nPowerShell: Rename-ADObject -Identity (Get-ADUser \"oldname\").DistinguishedName -NewName \"newname\"",
      "helpUrl": ""
    },
    {
      "type": "create_user_from_template",
      "message0": "Create User %1 from Template %2",
      "args0": [
        { "type": "field_input", "name": "NEWUSER", "text": "new.user" },
        { "type": "field_input", "name": "TEMPLATE", "text": "template.user" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 180,
      "tooltip": "Creates a new user based on a template user.\n\nPowerShell: Get-ADUser template | New-ADUser with copied properties",
      "helpUrl": ""
    },

    // GROUPS

    {
      "type": "create_ad_group",
      "message0": "Create AD Group (Name: %1)",
      "args0": [
        { "type": "field_input", "name": "GROUP", "text": "HRGroup" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Creates a new security or distribution group in Active Directory.\n\nPowerShell: New-ADGroup -Name \"value\" -GroupScope Global -GroupCategory Security",
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
      "tooltip": "Adds a user to an Active Directory group.\n\nPowerShell: Add-ADGroupMember -Identity \"group\" -Members \"user\"",
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
      "tooltip": "Removes a user from an Active Directory group.\n\nPowerShell: Remove-ADGroupMember -Identity \"group\" -Members \"user\" -Confirm:$false",
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
      "tooltip": "Copies all members from one group to another.\n\nPowerShell: Get-ADGroupMember -Identity \"source\" | ForEach-Object { Add-ADGroupMember -Identity \"target\" -Members $_.distinguishedName }",
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
      "tooltip": "Lists all members of an Active Directory group with option to export to CSV.\n\nPowerShell: Get-ADGroupMember -Identity \"group\" | Export-Csv (if enabled)",
      "helpUrl": ""
    },
    {
      "type": "nested_group_membership",
      "message0": "Get Nested Group Memberships for User %1",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 210,
      "tooltip": "Gets nested group memberships for a user.\n\nPowerShell: Get-ADPrincipalGroupMembership and follow MemberOf recursively",
      "helpUrl": ""
    },

    // ORG / OUs

    {
      "type": "create_ou",
      "message0": "Create OU (Name: %1)",
      "args0": [
        { "type": "field_input", "name": "OU", "text": "StaffOU" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Creates a new Organizational Unit in Active Directory.\n\nPowerShell: New-ADOrganizationalUnit -Name \"value\"",
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
      "tooltip": "Moves a user to a different Organizational Unit.\n\nPowerShell: Get-ADUser \"user\" | Move-ADObject -TargetPath \"OU=value,DC=domain,DC=com\"",
      "helpUrl": ""
    },
    {
      "type": "search_ad_objects",
      "message0": "Search AD for %1 Filter by %2",
      "args0": [
        { "type": "field_input", "name": "SEARCHTERM", "text": "*Smith*" },
        {
          "type": "field_dropdown",
          "name": "OBJECTTYPE",
          "options": [
            ["All Objects", "All"],
            ["Users", "User"],
            ["Groups", "Group"],
            ["Computers", "Computer"],
            ["OUs", "OrganizationalUnit"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Searches Active Directory for objects matching a pattern.\n\nPowerShell: Get-ADObject -Filter \"Name -like 'pattern'\"",
      "helpUrl": ""
    },
    {
      "type": "get_inactive_computers",
      "message0": "Get Inactive Computers (OU: %1 Inactive for days: %2)",
      "args0": [
        { "type": "field_input", "name": "OU", "text": "ComputersOU" },
        { "type": "field_number", "name": "DAYS", "value": 90, "min": 1, "max": 365 }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 160,
      "tooltip": "Finds computer accounts that haven't been active for a specified number of days.\n\nPowerShell: Get-ADComputer with LastLogonTimeStamp filter",
      "helpUrl": ""
    },

    // SECURITY

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
      "tooltip": "Sets a user's Active Directory password.\n\nPowerShell: Set-ADAccountPassword -Identity \"user\" -NewPassword (ConvertTo-SecureString \"password\" -AsPlainText -Force)",
      "helpUrl": ""
    },
    {
      "type": "force_password_change",
      "message0": "Force Password Change at Next Login (User: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Forces user to change password at next login.\n\nPowerShell: Set-ADUser -Identity \"user\" -ChangePasswordAtLogon $true",
      "helpUrl": ""
    },
    {
      "type": "unlock_ad_account",
      "message0": "Unlock AD Account (User: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Unlocks a locked user account.\n\nPowerShell: Unlock-ADAccount -Identity \"user\"",
      "helpUrl": ""
    },
    {
      "type": "enable_ad_account",
      "message0": "Enable AD Account (User: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Enables a disabled user account.\n\nPowerShell: Enable-ADAccount -Identity \"user\"",
      "helpUrl": ""
    },
    {
      "type": "disable_ad_account",
      "message0": "Disable AD Account (User: %1)",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Disables a user account in Active Directory.\n\nPowerShell: Disable-ADAccount -Identity \"user\"",
      "helpUrl": ""
    },
    {
      "type": "export_group_membership",
      "message0": "Export Group Memberships for User %1 to CSV Path %2",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_input", "name": "PATH", "text": ".\\groups.csv" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Exports a user's group memberships to CSV.\n\nPowerShell: Get-ADPrincipalGroupMembership | Export-Csv",
      "helpUrl": ""
    },
    {
      "type": "check_password_expiry",
      "message0": "Check Password Expiry for User %1 Warning if less than %2 days",
      "args0": [
        { "type": "field_input", "name": "USER", "text": "jdoe" },
        { "type": "field_number", "name": "DAYS", "value": 14, "min": 1, "max": 365 }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Checks if password will expire soon.\n\nPowerShell: Get-ADUser with PasswordLastSet and maxPwdAge",
      "helpUrl": ""
    },
    {
      "type": "check_locked_accounts",
      "message0": "Find Locked Accounts in OU %1",
      "args0": [
        { "type": "field_input", "name": "OU", "text": "StaffOU" }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 230,
      "tooltip": "Finds locked accounts in an OU.\n\nPowerShell: Search-ADAccount -LockedOut",
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
      "tooltip": "Resets the bad password attempt counter for a user.\n\nPowerShell: Set-ADUser -Replace @{badPwdCount=0}",
      "helpUrl": ""
    },

    // REPORTS

    {
      "type": "generate_user_report",
      "message0": "Generate User Report Type: %1 Output to: %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "REPORTTYPE",
          "options": [
            ["Last Logon", "LastLogon"],
            ["Account Status", "AccountStatus"],
            ["Password Age", "PasswordAge"],
            ["Group Memberships", "Groups"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "OUTPUT",
          "options": [
            ["CSV", "CSV"],
            ["Console", "Console"]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": 130,
      "tooltip": "Generates a comprehensive user report for auditing and compliance.\n\nPowerShell: Custom report based on selected type and output format",
      "helpUrl": ""
    }
  ];

  const gen = {
    // USERS
    create_ad_user(block) {
      const user = block.getFieldValue('USER');
      return `New-ADUser -Name "${user}" -Enabled $true\n`;
    },
    remove_ad_user(block) {
      const user = block.getFieldValue('USER');
      return `Remove-ADUser -Identity "${user}" -Confirm:$false\n`;
    },
    get_ad_user(block) {
      const user = block.getFieldValue('USER');
      return `Get-ADUser -Identity "${user}" -Properties * | Format-List\n`;
    },
    set_user_properties(block) {
      const user = block.getFieldValue('USER');
      const email = block.getFieldValue('EMAIL');
      const dept = block.getFieldValue('DEPARTMENT');
      return `Set-ADUser -Identity "${user}" -EmailAddress "${email}" -Department "${dept}"\n`;
    },
    rename_ad_user(block) {
      const oldName = block.getFieldValue('OLDNAME');
      const newName = block.getFieldValue('NEWNAME');
      return `Rename-ADObject -Identity (Get-ADUser "${oldName}").DistinguishedName -NewName "${newName}"\n`;
    },
    create_user_from_template(block) {
      const newUser = block.getFieldValue('NEWUSER');
      const template = block.getFieldValue('TEMPLATE');
      return `# Create new user from template\n` +
             `$template = Get-ADUser "${template}" -Properties *\n` +
             `New-ADUser -Name "${newUser}" -GivenName $template.GivenName -Surname $template.Surname -Department $template.Department -Enabled $true\n`;
    },

    // GROUPS

    create_ad_group(block) {
      const group = block.getFieldValue('GROUP');
      return `New-ADGroup -Name "${group}" -GroupScope Global -GroupCategory Security\n`;
    },
    add_user_to_group(block) {
      const user = block.getFieldValue('USER');
      const group = block.getFieldValue('GROUP');
      return `Add-ADGroupMember -Identity "${group}" -Members "${user}"\n`;
    },
    remove_user_from_group(block) {
      const user = block.getFieldValue('USER');
      const group = block.getFieldValue('GROUP');
      return `Remove-ADGroupMember -Identity "${group}" -Members "${user}" -Confirm:$false\n`;
    },
    copy_ad_group_members(block) {
      const src = block.getFieldValue('SOURCE_GROUP');
      const tgt = block.getFieldValue('TARGET_GROUP');
      return `# Copy members from ${src} to ${tgt}\n` +
             `Get-ADGroupMember -Identity "${src}" | ForEach-Object {\n` +
             `    Add-ADGroupMember -Identity "${tgt}" -Members $_.distinguishedName\n` +
             `}\n`;
    },
    get_group_members(block) {
      const group = block.getFieldValue('GROUP');
      const exportCsv = block.getFieldValue('EXPORT') === 'TRUE';
      if (exportCsv) {
        return `Get-ADGroupMember -Identity "${group}" | Export-Csv -Path ".\\\\${group}-members.csv" -NoTypeInformation\n`;
      }
      return `Get-ADGroupMember -Identity "${group}"\n`;
    },
    nested_group_membership(block) {
      const user = block.getFieldValue('USER');
      return `# Get nested group memberships for ${user}\n` +
             `Get-ADPrincipalGroupMembership -Identity "${user}" | Select-Object Name, DistinguishedName\n`;
    },

    // ORG / OUs

    create_ou(block) {
      const ou = block.getFieldValue('OU');
      return `New-ADOrganizationalUnit -Name "${ou}"\n`;
    },
    move_ad_user(block) {
      const user = block.getFieldValue('USER');
      const ou = block.getFieldValue('OU');
      return `Get-ADUser "${user}" | Move-ADObject -TargetPath "OU=${ou},DC=example,DC=com"\n`;
    },
    search_ad_objects(block) {
      const term = block.getFieldValue('SEARCHTERM');
      const type = block.getFieldValue('OBJECTTYPE');
      let filter = `Name -like "${term}"`;
      if (type !== 'All') {
        filter = `ObjectClass -eq "${type.toLowerCase()}" -and ${filter}`;
      }
      return `Get-ADObject -Filter '${filter}' -Properties *\n`;
    },
    get_inactive_computers(block) {
      const ou = block.getFieldValue('OU');
      const days = block.getFieldValue('DAYS');
      return `# Get inactive computers in OU ${ou} for ${days} days\n` +
             `$cutoff = (Get-Date).AddDays(-${days})\n` +
             `Get-ADComputer -SearchBase "OU=${ou},DC=example,DC=com" -Filter * -Properties LastLogonTimeStamp |\n` +
             `    Where-Object { [DateTime]::FromFileTime($_.LastLogonTimeStamp) -lt $cutoff }\n`;
    },

    // SECURITY

    set_user_password(block) {
      const user = block.getFieldValue('USER');
      const pwd = block.getFieldValue('PASSWORD');
      return `Set-ADAccountPassword -Identity "${user}" -NewPassword (ConvertTo-SecureString "${pwd}" -AsPlainText -Force)\n`;
    },
    force_password_change(block) {
      const user = block.getFieldValue('USER');
      return `Set-ADUser -Identity "${user}" -ChangePasswordAtLogon $true\n`;
    },
    unlock_ad_account(block) {
      const user = block.getFieldValue('USER');
      return `Unlock-ADAccount -Identity "${user}"\n`;
    },
    enable_ad_account(block) {
      const user = block.getFieldValue('USER');
      return `Enable-ADAccount -Identity "${user}"\n`;
    },
    disable_ad_account(block) {
      const user = block.getFieldValue('USER');
      return `Disable-ADAccount -Identity "${user}"\n`;
    },
    export_group_membership(block) {
      const user = block.getFieldValue('USER');
      const path = block.getFieldValue('PATH');
      return `Get-ADPrincipalGroupMembership -Identity "${user}" | Select-Object Name, DistinguishedName | Export-Csv -Path "${path}" -NoTypeInformation\n`;
    },
    check_password_expiry(block) {
      const user = block.getFieldValue('USER');
      const days = block.getFieldValue('DAYS');
      return `# Check password expiry for ${user}\n` +
             `$user = Get-ADUser "${user}" -Properties PasswordLastSet\n` +
             `$domain = Get-ADDomain\n` +
             `$max = $domain.MaxPasswordAge\n` +
             `$pwdSet = $user.PasswordLastSet\n` +
             `$pwdExpiry = $pwdSet + $max\n` +
             `if ($pwdExpiry -lt (Get-Date).AddDays(${days})) {\n` +
             `    Write-Host "Password for ${user} will expire within ${days} days: $pwdExpiry" -ForegroundColor Yellow\n` +
             `} else {\n` +
             `    Write-Host "Password for ${user} is not expiring within ${days} days. Expiry: $pwdExpiry"\n` +
             `}\n`;
    },
    check_locked_accounts(block) {
      const ou = block.getFieldValue('OU');
      return `# Find locked accounts in OU ${ou}\n` +
             `Search-ADAccount -LockedOut -SearchBase "OU=${ou},DC=example,DC=com" -UsersOnly | Select-Object Name, SamAccountName, LockedOut\n`;
    },
    reset_account_lockout(block) {
      const user = block.getFieldValue('USER');
      return `# Reset the account lockout counter for a user\n` +
             `$PDC = (Get-ADDomain).PDCEmulator\n` +
             `$user = Get-ADUser "${user}"\n` +
             `Set-ADUser -Identity $user.DistinguishedName -Replace @{badPwdCount=0} -Server $PDC\n` +
             `Write-Host "Reset bad password count for ${user}"\n` +
             `$userAfter = Get-ADUser "${user}" -Properties LockedOut\n` +
             `if ($userAfter.LockedOut) {\n` +
             `    Unlock-ADAccount -Identity $user.DistinguishedName\n` +
             `    Write-Host "Unlocked account for ${user}"\n` +
             `} else {\n` +
             `    Write-Host "Account was not locked."\n` +
             `}\n` +
             `Write-Host "Account lockout counter has been reset for ${user}"\n`;
    },

    // REPORTS

    generate_user_report(block) {
      const type = block.getFieldValue('REPORTTYPE');
      const output = block.getFieldValue('OUTPUT');
      let baseCmd = `Get-ADUser -Filter * -Properties *`;
      let projection = '';
      let reportName = '';

      switch (type) {
        case 'LastLogon':
          projection = `| Select-Object Name, SamAccountName, @{Name='LastLogon';Expression={[DateTime]::FromFileTime($_.LastLogonTimeStamp)}}`;
          reportName = 'UserLastLogonReport';
          break;
        case 'AccountStatus':
          projection = `| Select-Object Name, SamAccountName, Enabled, LockedOut`;
          reportName = 'UserAccountStatusReport';
          break;
        case 'PasswordAge':
          projection = `| Select-Object Name, SamAccountName, PasswordLastSet`;
          reportName = 'UserPasswordAgeReport';
          break;
        case 'Groups':
        default:
          projection = `| Select-Object Name, SamAccountName, @{Name='Groups';Expression={(Get-ADPrincipalGroupMembership $_ | Select-Object -ExpandProperty Name) -join ', '}}`;
          reportName = 'UserGroupMembershipReport';
          break;
      }

      let code = `# Generate ${type} report\n`;
      code += `$users = ${baseCmd} ${projection}\n`;
      code += `$processedUsers = $users\n`;

      if (output === 'CSV') {
        code += `$processedUsers | Export-Csv -Path "./${reportName}.csv" -NoTypeInformation\n`;
        code += `Write-Host "Report exported to ./${reportName}.csv"\n`;
      } else {
        code += `$processedUsers | Format-Table -AutoSize\n`;
        code += `Write-Host "Report generated and displayed in console"\n`;
      }

      return code;
    }
  };

  engine.registerBlocks(blocks, gen);
}
