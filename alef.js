// alef.js - Created by Team Erudite.

'use strict';

function alef(commandIn, b, c) {
  var commandSplit = commandIn.split(">");
  null!==commandSplit[0]&&(commandSplit[0],"help"===commandSplit[0]&&console.log("Need help? Don't worry! You can read the help text here: 'github.com/teamerudite/alef/blob/master/HELP.md'"),commandSplit[0],"test"===commandSplit[0]&&console.log("Yes! alef.js is working properly."),commandSplit[0],"log"===commandSplit[0]&&console.log(commandSplit[b]),commandSplit[0],"pop"===commandSplit[0]&&alert(commandSplit[b]),"script"===commandSplit[0]&&(document.head.innerHTML=document.head.innerHTML+'<script type="text/javascript" src="'+b+'"></script>'),"style"===commandSplit[0]&&(document.head.innerHTML=document.head.innerHTML+'<style type="text/css" src="'+b+'"></style>'));
  
}
