#  TACOCAT: A Coding Project 
 Taco Cat is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. Write a program that checks if the phrase entered is a palindrome. 
 
- CSS and Bootstrap Layout
- JavaScript Fundamentals
- JavaScript Loops
- JavaScript Functions
- JavaScript DOM Manipulation
- JavaScript If/Then/Else
- JavaScript Boolean Logic

## Functions


### getValue()
Resets the results box by adding invisible class. Sets userString variable as value of input box. Passes input to checkForPalindrome() then returns the result via the displayMessage() function.

### checkForPalindrome()
Transforms text to lowercase and removes any special characters. Creates an empty array and object for returning values. The function then reverse loops through the user input and compares it with the initial input, returning a message depending on the result.

### displayMessage()
Passes the user input result and the return message to the hidden HTML, removing the invisible class to display the alert message.