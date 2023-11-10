// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than
//the year 2000. Using the array you just obtained from the previous problem,
// find out how many cars were made before the year 2000 and return the array
// of older cars and log its length.
// const 
const alotCarYear = require("./testProblem4");
const carBefore2000 = require('../problem5');

const carBefore2000old = carBefore2000(alotCarYear);
console.log(`Number of car before 2000s ${carBefore2000old.length}`);
