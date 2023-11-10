function carDetail(inventory, carId) {
  const data = inventory.filter((inven) => {
    return inven.id == carId;
  });
  return data;
}

module.exports = carDetail;
