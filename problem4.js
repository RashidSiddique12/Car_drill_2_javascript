const carYear = (inventory) => {
  return inventory.map((inven) => {
    return inven.car_year;
  });
};

module.exports = carYear;
