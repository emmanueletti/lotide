const countOnly = (allItems, itemsToCount) => {
  const output = {};

  for (const items of allItems) {
    if (itemsToCount[items]) {
      if (output[items]) {
        output[items] += 1;
      } else {
        output[items] = 1;
      }
    }
  }
  return output;
};

module.exports = countOnly;
