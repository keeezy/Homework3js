// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared Variables
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
  var optionsSelected = getUserSelection()
  if (optionsSelected === undefined) {
    return;
  }
}


// Series of prompts for user selection
function getUserSelection() {
  var numberSelection = parseInt(prompt("Enter number of characters for password, must be between 8 and 128 characters "))
  if (Number.isNaN(numberSelection)) {
    alert("You must enter a number")
  }else if (numberSelection < 8) {
    alert("Minimum 8 characters needed.")
  }else if (numberSelection > 128) {
    alert("Cannot exceed more than 128")
  }

var useLowerCase = confirm("Include lower case characters?")
var useUpperCase = confirm("Include upper case characters?")
var useNumerical = confirm("Include numbers?")
var useSpecial = confirm("Include special characters?")

if(!useLowerCase && !useUpperCase && !useNumerical && !useSpecial) {
  alert("You need to select at least of one character type")
}

}




}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
