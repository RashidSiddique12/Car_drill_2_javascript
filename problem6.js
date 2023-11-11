const BMWandAudi = (inventory) => {
  return inventory.filter((inv) => {
    return inv.car_make === "Audi" || inv.car_make === "BMW";
  });
};

module.exports = BMWandAudi;
