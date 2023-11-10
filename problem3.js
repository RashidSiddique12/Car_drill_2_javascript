function carModelAlph(invertory) {
  const carModels = invertory.map((inv) => {
    return inv.car_model.toUpperCase();
  });

  return carModels.sort();
}

module.exports = carModelAlph;
