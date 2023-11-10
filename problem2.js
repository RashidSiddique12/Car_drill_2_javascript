function lastCarDetails(inventory) {
  const lastIndex = inventory.length - 1;

  return inventory.filter((inven, i) => {
    return i === lastIndex;
  });
}

module.exports = lastCarDetails;
