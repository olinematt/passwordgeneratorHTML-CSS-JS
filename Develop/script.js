// Assignment code here

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numericCheckbox = document.getElementById("numeric");
const specialCheckbox = document.getElementById("special");
const passwordDisplay = document.getElementById("password");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numericChars = "0123456789";
const specialChars = "!@#$%^&*_-+=";

// Function to generate a random character from a given character set
function getRandomCharacter(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
}

// Function to generate a password
function generatePassword() {
  let characters = "";
  
  // Include characters based on selected checkboxes
  if (uppercaseCheckbox.checked) {
    characters += uppercaseChars;
  }
  if (lowercaseCheckbox.checked) {
    characters += lowercaseChars;
  }
  if (numericCheckbox.checked) {
    characters += numericChars;
  }
  if (specialCheckbox.checked) {
    characters += specialChars;
  }

  if (characters === "") {
    return "Please select at least one character type.";
  }

  const passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return "Invalid password length. Please enter a number between 8 and 128.";
  }
//  im trying  to use let more instead of var for good practice 
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(characters);
  }

  return password;
}

// Function to display the generated password
function writePassword() {
  const password = generatePassword();
  passwordDisplay.value = password; // Use .value to set the content of a textarea
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
