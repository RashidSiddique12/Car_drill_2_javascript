// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot.
//Help the dealer find out which car has an id of 33 by calling a function that will return
//the data for that car. Then log the car's year, make, and model in the console log in the format of:
//"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

const inventory = require("../invertoryData");
const carDetail = require("../problem1");

const carId = 33;
const carDetail33 = carDetail(inventory, carId);

console.log(
  `Car 33 is ${carDetail33[0].car_year} ${carDetail33[0].car_make} ${carDetail33[0].car_model}`
);
