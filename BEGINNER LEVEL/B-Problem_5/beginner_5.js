//BEGINNER LEVEL: PROBLEM-5

//declaring the upper and lower limit
const lowerLimit = prompt("Enter the Smaller Number : ");
const upperLimit = prompt("Enter the Larger Number : ");

// function to print the range from upper limit to lower limit
function limit(lowerLimit, upperLimit) {
    for (let i = lowerLimit; i <= upperLimit; i++) {
        console.log(i);
    }
}

//calling the function
console.log(limit(lowerLimit, upperLimit));

//END OF CODE