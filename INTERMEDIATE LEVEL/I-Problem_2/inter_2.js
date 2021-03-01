//Intermeidate Level: Problem -2

//initialized the staring point
const initialPosition = 0;

//taking input from the user for various directions and their respective distance
const upDistance = prompt("Enter the Distance moved UP : ");
const downDistance = prompt("Enter the Distance moved DOWN : ");
const rightDistance = prompt("Enter the Distance moved RIGHT : ");
const leftDistance = prompt("Enter the Distance moved LEFT : ");

//calculating the vertical and horizaontal distance
const verticalDistance = initialPosition + upDistance - downDistance;
const horizontalDistance = initialPosition + leftDistance - rightDistance;

//final distance
const finalDist = ((verticalDistance ** 2) + (horizontalDistance ** 2)) ** 0.5;

//result
console.log("The distance between the final position and the initial position is:");
console.log(parseInt(finalDist));

//END OF CODE