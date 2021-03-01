//Beginner level: Problem - 4

//Taking the input from the user for the length and breadth of the polygon
const lengthOfPolygon = prompt(`Enter the length of the polygon :`);
const breadthOfPolygon = prompt(`Enter the breadth of the polygon :`);

//Calculating the area and perimeter of the polygon
let areaOfSquare = lengthOfPolygon * breadthOfPolygon;
let perimeterOfRectangle = (lengthOfPolygon * 2) + (breadthOfPolygon * 2);

/*Putting the if-else control structure to figure out the output.
The condition of the if statement checks for the equality between the lengths and gives the output on the console.
The else statement gives the output otherwise.*/
if (lengthOfPolygon === breadthOfPolygon) {
    console.log(`The polygon is a square with it's area = ${areaOfSquare} square units.`);
} else {
    console.log(`The polygon is a rectangle with it's perimeter = ${perimeterOfRectangle} units.`);
}

//END OF THE PRGRAM.