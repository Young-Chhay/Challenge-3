// Assignment Code and set Arrays 
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialCharArray = ["`", "~", "!", "@", "#", "$", "%", "&", "(", ")",]
var numbArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function generatePassword() {
  // Prompt user for password length
  var passwordLength = window.prompt("Choose the password length ( Between 8 to 128 )");
  // Convert password length input to integer
  passwordLength = parseInt(passwordLength);
  // set variable for the generated password to be an empty string at first
  let generatedPassword = '';

  // Check if the password length is valid (between 8 - 128 long)
  if (passwordLength >= 8 && passwordLength <= 128) {
    let userSelection = [];
    // Ask user for Char type selection
    var hasUpperCase = window.confirm(" Do you want to include UpperCase Character ?");
    var hasLowerCase = window.confirm(" Do you want to include LowerCase Character ?");
    var hasNumeric = window.confirm(" Do you want to include Numeric value ?");
    var hasSpecialChar = window.confirm(" Do you want to include Special Character ?");
    // If user chose to have lowercase char, then push/concatenate the lowerCase array elements to the userSelection array
    if (hasLowerCase) {
      userSelection = userSelection.concat(lowerCaseArray)
    }
    if (hasUpperCase) {
      userSelection = userSelection.concat(upperCaseArray)
    }
    if (hasNumeric ) {
      userSelection = userSelection.concat(numbArray)
    }
    if (hasSpecialChar) {
      userSelection = userSelection.concat(specialCharArray)
    }
    // Check if user selected at least one Char Type
    if (userSelection.length > 0) {
      // Loop through the password length
      for (let i = 0; i < passwordLength; i++) {
        // Generate randomized character by choosing from one of the element in the userSelection array
        const randomized = userSelection[Math.floor(Math.random() * userSelection.length - 1)];
        // concatenate the randomized char to the generatedPassword
        generatedPassword += randomized;
      }
    } else {
      // If the user doesn't select at lest one Char Type, then alert them
      window.alert("!!!! Must choose at least one Character Type !!!!")
    }
  } else { 
    // If the password length input from the user is not valid, show them the alert 
    window.alert(" Error!! Length must be between 8 to 128 only !");
  } 

 // Return the generated password string
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  // Get generated password by walking through the prompt and confirmations
  var password = generatePassword();
  // Select the password textArea
  var passwordText = document.querySelector("#password");
  // Assign the password string to the textArea
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);