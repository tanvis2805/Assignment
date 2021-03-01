//BEGINNER LEVEL: PROBLEM-2

//declaring the variable and taking the input value from the user
const enterString = prompt("Enter the string : ");

//declaring a function which converts the given string to UPPERCASE
function upperCase(enterString) {
    return (enterString.toUpperCase());
}

//assigning the result to a variable 
finOutput = upperCase(enterString);

//eliminating the numbers
console.log(finOutput.replace(/\d+/g, ''));

//END OF CODE