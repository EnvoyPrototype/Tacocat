//Get input from app.html
//Controller function
function getValue() {
  //Reset message
  document.getElementById("alert").classList.add("invisible");

  // Get user string
  let userString = document.getElementById("userString").value;

  // Check for palindrome
  let returnObj = checkForPalindrome(userString);

  //Display message to windows
  displayMessage(returnObj);
}

//Check for a palindrome
//Logic function
function checkForPalindrome(userString) {
  //Convert to lower case
  userString = userString.toLowerCase();

  //Remove spaces and special characters
  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let revString = [];
  let returnObj = {};

  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  if (revString == userString) {
    returnObj.msg = "Well done! You entered a palindrome!";
  } else {
    returnObj.msg = "Sorry! You didn't enter a palindrome!";
  }

  returnObj.reversed = revString;

  return returnObj;
}

//Display a message to UI
//View function
function displayMessage(returnObj) {
  document.getElementById("alertHeader").innerHTML = returnObj.msg;
  document.getElementById(
    "msg"
  ).innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
  document.getElementById("alert").classList.remove("invisible");
}
