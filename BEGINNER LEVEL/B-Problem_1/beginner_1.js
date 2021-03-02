//BEGINNER LEVEL : PROBLEM -1 

// declaring the variable upto which we need the addtion and taking the input from the user
const inputParameter = parseInt(prompt("Enter a Value", "0"), 10);

// declaring a function and calculating the sum upto n places
function sumUptoInput(inputParameter) {
    return ((inputParameter * inputParameter) + inputParameter) / 2;
}

//checking if the value entered in an integer or not and printing the anser on the console
if (Number.isInteger(inputParameter)) {
    console.log(sumUptoInput(inputParameter));
} else {
    console.log(0);
}

//END OF CODE
