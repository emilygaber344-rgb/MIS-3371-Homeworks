/*
Name: Emily Gaber
 File: MIS3371Brains.js
 Date Created: 6/23/2026 (technically old code but im using it for a new clinic)
 Date Updated: 6/27/2026
 Purpose: To creat logic for the website to validate
 */

function ValidateFirstName() {
  const fname = document.getElementById("FirstName").value;
  const FNStatus = document.getElementById("FNStatus");
  if (fname == "") {
    FNStatus.textContent = ("You must enter your first name.");
    FNStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (!/^[a-zA-Z]+$/.test(fname)) {
    FNStatus.textContent = "Only letters, apostrophes, and hyphens are allowed in the first name.";
    FNStatus.style.color = "yellow";
    document.getElementById("Submit").disabled = true;
  }
  else {
    FNStatus.textContent = "";
    document.getElementById("Submit").disabled = false;
    return true;
  }
}
//Validates Middle Initial
function ValidateMname() {
  const mname = document.getElementById("MiddleInitial").value;
  const MNStatus = document.getElementById("MNStatus");
  if (mname == "") {
    MNStatus.textContent = ("You must enter your middle name.");
    MNStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (!/^[a-zA-Z]+$/.test(mname)) {
    MNStatus.textContent = "Only letters are allowed in the middle initial.";
    MNStatus.style.color = "yellow";
    document.getElementById("Submit").disabled = true;
  }
  else {
    MNStatus.textContent = "";
    document.getElementById("Submit").disabled = false;
    return true;
  }
}
//Validates Last Name
function ValidateLastName() {
  const lname = document.getElementById("LastName").value;
  const LNStatus = document.getElementById("LNStatus");
  if (lname == "") {
    LNStatus.textContent = ("You must enter your last name.");
    LNStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (!/^[a-zA-Z-' ]+$/.test(lname)) {
    LNStatus.textContent = "Only letters, apostrophes, and hyphens are allowed in the last name.";
    LNStatus.style.color = "yellow";
    document.getElementById("Submit").disabled = true;
  }
  else {
    LNStatus.textContent = "";
    document.getElementById("Submit").disabled = false;
    return true;
    
  }
}
//here we go....lets try this again! I will try to validate the birthday field 
function RealBirthdays() {
  const BDStatus = document.getElementById("BDStatus");
  const today = new Date();
  if (document.getElementById("birthday").value === "") {
    BDStatus.textContent = "You must enter your birthday.";
    BDStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (new Date(document.getElementById("birthday").value) > today) {
    BDStatus.textContent = "You cannot enter a future date.";
    BDStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else {
    document.getElementById("Submit").disabled = false;
    BDStatus.textContent = "";
  }
  }
//validate the SSN. Credit to Jonny Roller! https://codepen.io/jonny_roller I go the idea to format the SSN from his code. (not an exact replica but i took the parts  i liked
function ValidateSSN() {
  const ssn = document.getElementById("SSN").value;
  const SSNStatus = document.getElementById("SSNStatus");
  let SSFormat = document.getElementById("SSN").value.replace(/[^0-9]/g, '');
 if (ssn == "" || ssn.length < 9) {
    SSNStatus.textContent = ("You must enter the 9 digits of your Social Security Number.");
    SSNStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (!/^[0-9]-+$/.test(ssn)) {
    SSNStatus.textContent = "Only numbers are allowed in the Social Security Number.";
    SSNStatus.style.color = "yellow";
    document.getElementById("Submit").disabled = true;
  }
  else {
    SSFormat.substr(0, 3) + '-' + SSFormat.substr(3, 2) + '-' + SSFormat.substr(5, 4);
    SSNStatus.textContent = "";
    document.getElementById("Submit").disabled = false;
    return true;
  }
  
}


//validates the email
function ValidateEmail() {
  const email = document.getElementById("EmailAddress").value;
  const EmailStatus = document.getElementById("EmailStatus");
  if (email == "") {
    EmailStatus.textContent = "You must enter your email address.";
    EmailStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (!/[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,32}$/.test(email)) {
    EmailStatus.textContent = "Please enter a valid email address. Must contain an @ symbol and a domain name. Example: ProfMake@Hu.edu";
    EmailStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else {
    EmailStatus.textContent = "";
    document.getElementById("Submit").disabled = false;
    return true;
  }
}
//validate the phone number
function ValidatePhone() {
  const phone = document.getElementById("PhoneNum").value;
  const PhoneStatus = document.getElementById("PhoneStatus");
  if (phone == "") {
    PhoneStatus.textContent = "You must enter your phone number.";
    PhoneStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
    PhoneStatus.textContent = "Please enter a valid phone number. Example: (123) 456-7890";
    PhoneStatus.style.color = "red";
    document.getElementById("Submit").disabled = true;
  }
  else {
    PhoneStatus.textContent = "";
    document.getElementById("Submit").disabled = false;
    return true;
  }
}
//Credit to W3Schools 
function Reveal() {
  let x = document.getElementById("SSN");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  let y = document.getElementById("Password");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
  let z = document.getElementById("ConfirmPassword");
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
}
// Credit to Technical Rajni and W3schools for the tutorial! I did change it however
function ValidatePassword(){
  const uname = document.getElementById("uname").value;
  const Password = document.getElementById("Password").value;
  const ConfirmPassword = document.getElementById("ConfirmPassword").value;
  const Status = document.getElementById("Status");

   
    if (Password == ""|| Password === uname) {
      Status.textContent = "Please add a valid password. Password cannot be the same as username.";
      Status.style.color = "yellow";
      document.getElementById("Submit").disabled = true;
  } else if (Password !== ConfirmPassword) {
      Status.textContent = "Passwords do not match.";
      Status.style.color = "red";
      document.getElementById("Submit").disabled = true;
  } else {
      Status.textContent = "Passwords match.";
      Status.style.color = "green";
      document.getElementById("Submit").disabled = false;
  } 
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
