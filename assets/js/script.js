// Assignment code here
var upperCaseEl = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCaseEl = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numberEl = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var symbolsEl = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '<', '>', '/', '?'];

var selChars = [];

var minLength = 8

var maxLength = 128

var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var password = "";

  selChars = [];

  var pwLength = window.prompt("How many characters do you want your password to be?")
  console.log(pwLength)

  if (pwLength < minLength || pwLength > maxLength) {

    window.alert("Your password must be at least " + minLength + " and no more than " + maxLength + ".")
    generatePassword();

  }

  var upperCase = window.confirm("Do you want to use uppercase letters?")
  var lowerCase = window.confirm("Do you want to use lower case letters?")
  var number = window.confirm("Do you want to use numbers?")
  var symbols = window.confirm("Do you want to use symbols?")
  console.log(upperCase, lowerCase, number, symbols)

  if (upperCase) {

    selChars.push(...upperCaseEl)
  }

  if (lowerCase) {

    selChars.push(...lowerCaseEl)
  }

  if (number) {

    selChars.push(...numberEl)
  }

  if (symbols) {

    selChars.push(...symbolsEl)
  }

  if (selChars.length == 0) {

    window.alert("You must select at least one type of character input.")

    generatePassword()
  }

  for (var i = 0; i < pwLength; i++) {

    var randomIndex = Math.floor(Math.random() * selChars.length);

    var password = password + selChars[randomIndex];

  }


  return password;




}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




