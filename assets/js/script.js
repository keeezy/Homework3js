// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared global scope variables
var lowerCaseChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCaseChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'

];

var numericalChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var specialChar = [ 
  '!',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
  '"'
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

function generatePassword() {
 // Series of prompts for user selection
  var numberChars = parseInt(prompt("Enter number of characters for password, must be between 8 and 128 characters "))
  if (Number.isNaN(numberChars)) {
    alert("You must enter a number")
    return "Please enter a number between 8 and 128"
  }else if (numberChars < 8) {
    alert("Minimum 8 characters needed.")
    return "Please enter a number between 8 and 128"
  }else if (numberChars > 128) {
    alert("Cannot exceed more than 128")
    return "Please enter a number between 8 and 128"
  }

// Declared variable for prompt windows, user options and generated password
  var userLowerCase = confirm("Include lower case characters?");
  var userUpperCase = confirm("Include upper case characters?");
  var userNumerical = confirm("Include numbers?");
  var userSpecial = confirm("Include special characters?");
  var userOptions = [];
  var password = "";

  if(!userLowerCase && !userUpperCase && !userNumerical && !userSpecial) {
    alert("You need to select at least one character type")
    return "Please select at least one character type"
  }
  if (userLowerCase) {
    userOptions = userOptions.concat(lowerCaseChar);
  }
  if (userUpperCase) {
    userOptions = userOptions.concat(upperCaseChar);
  }
  if (userLowerCase) {
    userOptions = userOptions.concat(numericalChar);
  }
  if (specialChar) {
    userOptions = userOptions.concat(specialChar);
  }
  for (let i = 0; i < numberChars; i++) {
    var randomIndex = Math.floor(Math.random() * userOptions.length);
    password += userOptions[randomIndex]
  }
  return password

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
