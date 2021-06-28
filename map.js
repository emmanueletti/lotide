// input: array and callback function
// output array with each element transformed by callback function
const map = (arr, callback) => {
  const output = [];

  for (const item of arr) {
    output.push(callback(item));
  }

  return output;
};

module.exports = map;
