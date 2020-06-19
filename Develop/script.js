// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function randomIndex(item_length) {
  // Helper function which takes in the length of a string or array, and returns a random index of that array.

  var random_float = (item_length) * Math.random()
  var index = Math.floor(random_float)
  return index
};

function randomInserter(string_so_far, new_char) {
  // Takes in an existing string and a new character to insert. It inserts the new character into the string at a random location.

  var length = string_so_far.length
  var index = randomIndex(length)
  return string_so_far.slice(0, index) + new_char + string_so_far.slice(index)
};

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

  // Variable storing the password length.
  var pass_length = 0;

  // Variable storing the number of different character types to be stored in the password.
  var criteria_number = 0;

  // Array which will store the different criteria (as objects) to be included in the password.
  var included_criteria = [];

  // Array which will string-object pairs into the criteriaPrompt function.
  var all_criteria = [['lowercase letters', has_lowercase], ['uppercase letters', has_uppercase], ['numerical characters', has_numericals], ['special characters', has_specials]];

  // The password starts as an empty string, and will addended later in the code.
  var password = '';

  function criteriaPrompt(criteria_name, criteria_object) {
    // Takes in the name of the criteria for display, and the associated criteria object. This function will prompt the user to include or exclude each of the 
    // four criteria.

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

  function setLength() {
    // Function which when called gets the user to set a password length.

    response = prompt('How many characters would you like your password to be? Type a number. (Passwords can be betwen 8 and 128 characters long.');
    response = parseInt(response);


    if (Number.isInteger(response)) {

      if (response > 7 && response < 129) {
        pass_length = response;
      }

      else {
        alert("Password length can be no less than 8 and no greater than 128 characters long.");
        setLength();
      };

    }

    else {
      alert("The length you enter must be a number.");
      setLength();
    };
  };


  // Call the function to prompt the user to set the password length.
  setLength();

  // For loop that causes the user criteria prompts to appear..
  for (i = 0; i < 4; i++) {
    criteriaPrompt(all_criteria[i][0], all_criteria[i][1]);
  };

  // The following if statements will add the criteria to 'included_criteria' if the user prompted to include them.'
  if (has_lowercase.include) {
    included_criteria.push(has_lowercase);
  };

  if (has_uppercase.include) {
    included_criteria.push(has_uppercase);
  };

  if (has_numericals.include) {
    included_criteria.push(has_numericals);
  };

  if (has_specials.include) {
    included_criteria.push(has_specials)
  };

  // These variables control the number of each character set to add.
    var lower_char_num = Math.floor(pass_length / criteria_number);
    var upper_char_num = pass_length - (criteria_number - 1) * (lower_char_num);

  // For loop that sets the number of each character set to include in the password.
  for (i = 0; i < criteria_number; i++) {
    if (i === 0) {
      included_criteria[i].charNum = upper_char_num;
    }

    else {
      included_criteria[i].charNum = lower_char_num;
    };

  };
  
  // This for loop will add the proper number of random characters from each character set to the password at random places.
  for (i = 0; i < included_criteria.length; i++) {
  
    charSet = included_criteria[i].charSet;

    while (included_criteria[i].charNum > 0) {

      charSetIndex = randomIndex(charSet.length);
      new_char = charSet[charSetIndex];
      password = randomInserter(password, new_char);
      included_criteria[i].charNum -= 1;

    };
  };
  return password

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
