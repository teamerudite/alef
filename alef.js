// alef.js - Created by Team Erudite.
'use strict';

function alef(commandIn) {
  var commandSplit = commandIn.split(">");
  if (commandSplit[0] !== null || "") {
    commandSplit[0],"help"===commandSplit[0]?console.log("Need help? Don't worry! You can read the help text here: 'github.com/teamerudite/alef/blob/master/HELP.md'"):"test"===commandSplit[0]&&console.log("Yes! alef.js is working properly.");

  }
}
