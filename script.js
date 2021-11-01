
// Assignment code here
//WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria
var writePassword = function() {
  //description of application
  window.alert("This is a secure password generator")
  //choice of password length
  window.alert("Please select the preferred password length between number values 8-128")
  const aNumber = Number(window.prompt("Type a number between 8-128", ""))
//choice of character type
  window.prompt("Please confirm the character types your would like included in your password")

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", writePassword)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("generate").addEventListener("click", writePassword)
