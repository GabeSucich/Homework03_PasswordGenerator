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

  // Each of the four possible character sets.
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercase = lowercase.map(letter => letter.toUpperCase())
  var numericals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '<', '<', '?'];

  // An object for each criterion.
  var has_lowercase = { include: false, charSet: lowercase, charNum: 0 };
  var has_uppercase = { include: false, charSet: uppercase, charNum: 0 };
  var has_numericals = { include: false, charSet: numericals, charNum: 0 };
  var has_specials = { include: false, charSet: specials, charNum: 0 };


  function criteriaPrompt(criteria_name, criteria_object) {
    // Takes in the name of the criteria for display, and the associated criteria object. This function will prompt the user to include or exclude each of the four criteria.

    response = prompt("Would you like your password to include " + criteria_name + "? Type 'yes' or 'no'.");

    if (response.toLowerCase() === 'yes') {
      criteria_object.include = true;
      criteria_number += 1;
    }

    else if (response.toLowerCase() === 'no') {
      criteria_object.include = false;
    }

    else {
      alert("That is not a valid response. Please type 'yes' or 'no'.")
      criteriaPrompt(criteria_name, criteria_object)
    };


  };



}




// Add event listener to generate button
document.getElementById("generate").addEventListener("click", writePassword);
