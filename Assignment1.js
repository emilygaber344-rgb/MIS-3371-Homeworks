/* 
Name: Emily Gaber
File: Assignment2.js
Date Created: 2/23/2026
Date Updated: 2/27/2026
Purpose: Learning html
*/

function validateFName() {
 let x = document.forms["form"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
	  
function SetToday(){
     document.getElementById("today").innerHTML = new Date().toLocaleDateString();
                     var today = new Date().toISOString().split('T')[0];
	     document.getElementById('birthday').setAttribute('max', today); 
}
/*credit to w3schools
	 
*/
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
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
//credit w3schools tyty
function clear() {
  document.getElementById("Intake").reset();

 // Source - https://stackoverflow.com/a/47023276
// Posted by doubleOrt, modified by community. THank you!!!!!!
// Retrieved 2026-04-06, License - CC BY-SA 3.0

function checkPass() {
	
var get_elem = document.getElementById,
pass1 = document.getElementById('Password'),
pass2 = document.getElementById('RePassword'),
message = document.getElementById('confirmMessage'),
colors = {
goodColor: "#fff",
goodColored: "#087a08",
badColor: "#fff",
badColored:"#ed0b0b"
},
strings = {
"confirmMessage": ["good", "bad"]
};

if(Password.value === RePassword.value && (Password.value + RePassword.value) !== "") {
RePassword.style.backgroundColor = colors["goodColor"];
message.style.color = colors["goodColored"];
message.innerHTML = strings["confirmMessage"][0];
}
else if(!(RePassword.value === "")) {
RePassword.style.backgroundColor = colors["badColor"];
message.style.color = colors["badColored"];
message.innerHTML = strings["confirmMessage"][1];
}
else {
message.innerHTML = "";	
}

}  
   // credit to geeksforgeeks and you professor
    
        const d = new Date();
        let text = d.toLocaleDateString();
        document.getElementById("today").innerHTML = text;

          const dp = document.getElementById('date');
        dp.setAttribute('min', '1909-01-01');
        dp.setAttribute('max', 'today');
        const minDate = dp.getAttribute('min');
        const maxDate = dp.getAttribute('max');
        document.getElementById('dateRange').textContent = 
            'Accepted Date Range: ' + minDate + ' to ' + maxDate;
        dp.addEventListener('change', function () {
            const dateSelect = dp.value;
            document.getElementById('selectedDate').textContent = 
                'Selected Date: ' + dateSelect;
        });
  }
}
