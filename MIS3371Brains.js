/*
Name: Emily Gaber
 File: MIS3371Brains.js
 Date Created: 6/23/2026 (technically old code but im using it for a new clinic)
 Date Updated: 6/23/2026
 Purpose: To creat logic for the website to validate
 */

// Credit to W3Schools!!!!! I altered it to fit my code but they produced the original.

var myInput = document.getElementById("password");
var SpecialChars = document.getElementById("SpecialChars");
var number = document.getElementById("number");
var length = document.getElementById("length");
ValidatePassword(){

}
 returndata() {

 }
// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("Passwordmessage").style.display = "block";
}
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  // Validate capital letters
  var SpecialChars = /^(?=.*\d)(?!.*\s)/g;
  if(myInput.value.match(SpecialChars)) {  
    SpecialChars.classList.remove("invalid");
    SpecialChars.classList.add("valid");
  } else {
    SpecialChars.classList.remove("valid");
    SpecialChars.classList.add("invalid");
  }
  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
