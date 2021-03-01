//Intermediate level: Problem - 1

//Dimensions of cuboid 1
const lenCub1 = prompt("Enter the length of cuboid 1 : ");
const bthCub1 = prompt("Enter the breadth of cuboid 1 : ");
const hgtCub1 = prompt("Enter the height of cuboid 1 : ");

//Dimensions of cuboid 2
const lenCub2 = prompt("Enter the length of cuboid 2 : ");
const bthCub2 = prompt("Enter the breadth of cuboid 2 : ");
const hgtCub2 = prompt("Enter the height of cuboid 2 : ");

//volume of cuboids

const cubVol1 = lenCub1 * bthCub1 * hgtCub1;
const cubVol2 = lenCub2 * bthCub2 * hgtCub2;
const diff = Math.abs(cubVol1 - cubVol2);

//differnce
console.log(`The dimensions of cuboid 1 : [${lenCub1},${bthCub1},${hgtCub1}]`);
console.log(`The dimensions of cuboid 2 : [${lenCub2},${bthCub2},${hgtCub2}]`);
console.log(`The difference between the volume of the cuboids is : ${diff}. `);

//END OF CODE