/* PROBLEM */
// count number of letters in a string

/* STEPS / PSEUDOCODE */
// accept a string as input
// output an object with each present letter as a property with thier counts as values
// loop through the string
// for each char check if it is present in the obj
// if not present, initialize it to 1
// if present, += 1
// at the end of the loop, reutnr the output

/* INITIAL SOLUTION */

// const countLetters = (string) => {
//   const output = {};
//   //remove spaces and lower case the string
//   const processed = string.split(' ').join('').toLowerCase();
//   for (const char of processed) {
//     if (output[char]) {
//       output[char] += 1;
//     } else {
//       output[char] = 1;
//     }
//   }
//   return output;
// };

/* REFACTOR */

const countLetters = (string) => {
  //remove spaces and lower case the string
  const processed = string.toLowerCase().split(' ').join('');

  // use reduce to create histogram
  return processed.split('').reduce((acc, current) => {
    if (acc[current]) {
      acc[current]++;
      return acc;
    }
    acc[current] = 1;
    return acc;
  }, {});
};

module.exports = countLetters;
