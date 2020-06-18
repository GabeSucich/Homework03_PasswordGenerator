// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // The main password-generating function.

  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = lowercase.map(letter => letter.toUpperCase())
  var numericals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '<', '<', '?'];

}




// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
