/*
Name: Emily Gaber
 File: MIS3371Brains.js
 Date Created: 6/23/2026 (technically old code but im using it for a new clinic)
 Date Updated: 6/27/2026
 Purpose: To creat logic for the website to validate
 */


 
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
//ok credit geeksforgeeks BUT I basically didnt even use their code, more like inpiration. maybe it would work if i took it
/*function ValidateInput(){
  const fname = document.getElementById("fname").value;
  const LastName = document.getElementById("LastName").value;
  const birthday = document.getElementById("birthday").value;
  const SSN = document.getElementById("SSN").value;
  const Email = document.getElementById("Email").value;
  const PhoneNum = document.getElementById("PhoneNum").value;
  const AddressLine = document.getElementById("AddressLine").value;
  const City = document.getElementById("City").value;
  const Zcode = document.getElementById("Zcode").value;
  const State = document.getElementById("State").value;
    const uname = document.getElementById("uname").value;
  const Password = document.getElementById("Password").value;
  const ConfirmPassword = document.getElementById("ConfirmPassword").value;
  let isValid = true;
            if (fname === "" ) {
                ErrorMsg.textContent = "Please enter your name properly.";
                isValid = false;
            }
            if (LastName === "" ) {
                ErrorMsg.textContent = "Please enter your name properly.";
                isValid = false;
            }
            if (birthday === "" ) {
                ErrorMsg.textContent = "Error";
                isValid = false;
            }
            if (SSN === "" ) {
                ErrorMsg.textContent = "Error";
                isValid = false;
            }
           
            if (Email === "" || !email.includes("@") || !email.includes(".")) {
                ErrorMsg.textContent = "Please enter a valid email address.";
                isValid = false;
            }
            if (PhoneNum === "" || pass.length < 6) {
                ErrorMsg.textContent = "Error";
                isValid = false;
            } if (AddressLine === "") {
                ErrorMsg.textContent = "Please enter a valid address.";
                isValid = false;
            }
            if (City === "") {
                ErrorMsg.textContent = "Please select your city.";
                isValid = false;
            }
            if (Zcode === "" ) {
                ErrorMsg.textContent = "Please enter your name properly.";
                isValid = false;
            }
            if (State === "" ) {
                ErrorMsg.textContent = "Please enter your name properly.";
                isValid = false;
            }
            if (uname ==="") {
                ErrorMsg.textContent = "Please enter a password";
                isValid = false;
            }
            if (Password ==="") {
                ErrorMsg.textContent = "Please enter a password";
                isValid = false;
            }
            }*/
        
function RealBirthdays() {
  let today = new Date();
	  document.getElementById('birthday').setAttribute('max', today);
}
// Credit to W3Schools!!!!! I altered it to fit my code but they produced the original
function Passwordmessage(){
    let UserPassword = document.getElementById("Password");
    let SpecialChars = document.getElementById("SpecialChars");
    let capital = document.getElementById("capital");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
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
        let hasCapital = /[A-Z]/.test(password);
        let hasSpecial = /[^A-Za-z0-9\s]/.test(password); // Matches punctuation/symbols
        let hasNumber = /[0-9]/.test(password);
        let isLongEnough = password.length >= 8;
        
        // Capital letter check
          if (hasCapital) {
            capital.className = "valid";
          } else {
            capital.className = "invalid";
          }

          // Special character check
          if (hasSpecial) {
            special.className = "valid";
          } else {
            special.className = "invalid";
          }

          // Number check
          if (hasNumber) {
            number.className = "valid";
          } else {
            number.className = "invalid";
          }

          // Length check
          if (isLongEnough) {
            length.className = "valid";
          } else {
            length.className = "invalid";
          }
        }
      }
    }
//Credit to Professor Jake! (i made some tweaks dont worry! I must add that I used Google GEmini (You mentioned we can use it somewhat) to help me figure out why i coulnt get it to function)
function returndata() {
  let formcontents = document.getElementById("Intake");
  let Review = document.getElementById("Review");
  let formoutput;
  let datatype;
  let i;
  Review.onclick = function() {
    if (document.getElementById("returndata")) {
      document.getElementById("returndata").style.display = "block";
    }

    formoutput = "<table class='form'><tr><th>Title</th><th>Input</th></tr>";

    for (i = 0; i < formcontents.length; i++) {
      datatype = formcontents.elements[i].type;

      switch (datatype) {
        case "checkbox":
          if (formcontents.elements[i].checked) {
            formoutput  = formoutput + "<tr><td>" + formcontents.elements[i].name + "</td>";               
            formoutput  = formoutput + "<td class='returndata'>Checked</td></tr>";
          }
          break;

        case "radio":
          if (formcontents.elements[i].checked) {
            formoutput  = formoutput + "<tr><td>" + formcontents.elements[i].name + "</td>";
            formoutput  = formoutput + "<td class='returndata'>" + formcontents.elements[i].value + "</td></tr>";
          }
          break;
        default:
          formoutput  = formoutput + "<tr><td>" + formcontents.elements[i].name + "</td>";
          formoutput  = formoutput + "<td class='returndata'>" + formcontents.elements[i].value + "</td></tr>";
          break;
      }
    }
    if (formoutput.length > 0) { 
      formoutput  = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
    }
  };
} 
  returndata();