// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the 
//website. Execute a function to Sort all the car model names into 
//alphabetical order and log the results in the console as it was returned.

const invertory = require('../invertoryData');
const carModelAlph = require('../problem3');

const carModel = carModelAlph(invertory);

carModel.map((carMod)=>{
    console.log(carMod);
})
