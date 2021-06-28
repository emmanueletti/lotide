/* PROBLEM */
// document the index positions that letter occurs at

/* BREAKDOWN */
// accept a string as input
// create an empty array to store output
// loop through each char of the array in a way that can access the index
// if we havent seen the char yet, initialize the obj to an empty array with the index char
// if we have seen the char before and its now in the output obj, push the curent index into the array
// at the end of the loop, return the output

/* PSEUDOCODE */

/* INITIAL VERSION */

const letterPositions = (string) => {
  const output = {};
  const processed = string.split(' ').join('').toLowerCase();
  for (let i = 0; i < processed.length; i++) {
    if (output[processed[i]]) {
      output[processed[i]].push(i);
    } else {
      output[processed[i]] = [i];
    }
  }
  return output;
};

/* REFACTOR */

module.exports = letterPositions;
