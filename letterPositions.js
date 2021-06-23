const assertArraysEqual = (actual, expected) => {
  try {
    const everyActualEquals = actual.every((element, index) => element === expected[index]);
	  const everyExpectedEquals = expected.every((element, index) => element === actual[index]);

      if (everyActualEquals && everyExpectedEquals) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } catch (error) {
    console.log('😬 Something broke')
    console.log(`\t ${error.name}: ${error.message}`)
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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
  const output ={}
  const processed = string.split(' ').join('').toLowerCase();
  for (let i = 0; i < processed.length; i++) {
    if (output[processed[i]]) {
      output[processed[i]].push(i)
    } else {
      output[processed[i]] = [i];
    }
  }
  return output
}

/* REFACTOR */


/* TEST */
const result = letterPositions('hello')

assertArraysEqual(result['e'], [1])
assertArraysEqual(result['l'], [2,3])
assertEqual(result['x'], undefined)
