/*
Name: Emily Gaber
 File: MIS3371Brains.js
 Date Created: 6/23/2026 (technically old code but im using it for a new clinic)
 Date Updated: 6/23/2026
 Purpose: To creat logic for the website to validate
 */

// Credit to W3Schools!!!!! I altered it to fit my code but they produced the original.

let UserPassword = document.getElementById("Password");
//let SpecialChars = document.getElementById("SpecialChars");
let capital = document.getElementById("capital");;
let number = document.getElementById("number");
let length = document.getElementById("length");
 
// Credit to Technical Rajni and W3schools for the tutorial! I did change it however
function ValidatePassword(){
  const uname = document.getElementById("uname").value;
  const Password = document.getElementById("Password").value;
  const ConfirmPassword = document.getElementById("ConfirmPassword").value;
  const Status = document.getElementById("Status");

   
    if (Password == ""|| Password === uname) {
      Status.textContent = "Please add a valid password. Password cannot be the same as username.";
      Status.className = "Invalid";
      Status.style.color = "yellow";
      document.getElementById("Submit").disabled = true;
  } else if (Password !== ConfirmPassword) {
      Status.textContent = "Passwords do not match.";
      Status.className = "Mismatch";
      Status.style.color = "red";
      document.getElementById("Submit").disabled = true;
  } else {
      Status.textContent = "Passwords match.";
      Status.className = "Match";
      Status.style.color = "green";
      document.getElementById("Submit").disabled = false;
  } 
}
function RealBirthdays() {
  const today = new Date();
	  document.getElementById('birthday').setAttribute('max', today);
}

function Passwordmessage(){
// When the user clicks on the password field, show the message box
UserPassword.onfocus = function() {
  document.getElementById("Passwordmessage").style.display = "block";
}
UserPassword.onblur = function() {
  document.getElementById("Passwordmessage").style.display = "none";
}
// When the user starts to type something inside the password field
UserPassword.onkeyup = function() {
// Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(UserPassword.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");

  let SpecialChars = /^(?=.*\d)(?!.*\s)/g;
  if(UserPassword.value.match(SpecialChars)) {  
    SpecialChars.classList.remove("invalid");
    SpecialChars.classList.add("valid");
  } else {
    SpecialChars.classList.remove("valid");
    SpecialChars.classList.add("invalid");
  } 
  // Validate numbers
  let numbers = /[0-9]/g;
  if(UserPassword.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(UserPassword.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
}
//Credit to Professor Jake! (i made some tweaks dont worry)
function returndata() {
  
  let formcontents = document.getElementById("Intake");
  let formoutput;
  let datatype;
  let i;
  Review.onclick = function() {
  document.getElementById("extra").style.display = "block";
  formoutput = "<table class='form'><th>Dataname</th><th>Value</th>";}
  for (i = 0; i < formcontents.length; i++) {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";               
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td >"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                  break;
                default:
                  formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
        

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}

}