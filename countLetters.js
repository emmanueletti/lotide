const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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

const countLetters = (string) =>  {
  const output = {};
  const uniformCase = string.toLowerCase();
  for (const char of uniformCase) {
    if (output[char]) {
      output[char] += 1;
    } else {
      output[char] = 1;
    }
  }
  return output;

};

/* REFACTOR */


// TEST
const result = countLetters('lighthouse labs');

assertEqual(result['l'], 2);
assertEqual(result['s'], 2);
assertEqual(result['x'], undefined);
console.log('--case test---');

const casedResult = countLetters('Lighthouse labs');
assertEqual(casedResult['l'], 2);