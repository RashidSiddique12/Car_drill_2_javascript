const inventory = require('./invertoryData')

const carBefore2000 = (alotCarYear) => {
  const yearOfCar =  alotCarYear.filter((car) => car < 2000);
  return yearOfCar;
  
};


module.exports = carBefore2000;