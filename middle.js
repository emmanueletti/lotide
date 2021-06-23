const assertArraysEqual = (actual, expected) => {
  // POTENTIAL BUG: calling every() on an empty array will always result in true
  // (e.g [].every() evalutes to true no matter the callback condition passed in)
  // assert function will result in false positive when the array being called on is empty but the array being compared to is not 
  // to prevent a false positive, call every() on both expected and actual arrays, and require a true positive to be a true result from both calls

	const everyActualEquals = actual.every((element, index) => element === expected[index]);
	const everyExpectedEquals = expected.every((element, index) => element === actual[index]);

	if (everyActualEquals && everyExpectedEquals) {
		console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

/* PROBLEM */
// Implement middle which will take in an array and return the middle-most element(s) of the given array.
// arrays with 1 or 2 elements should return an empty array
// arrays with odd number of elements should return the middle array
// arrays with even number of elements should return the middle 2 arrays

/* STEPS / PSEUDOCODE*/
// function should take in an array
// initialize an empty array to store output
// check if array is 1/2 element, odd number of elements, or even number of elements
// if odd, calculate the midpoint index and push that element into the output array
  // odd's length / 2, then round up -> Math.ceil
// if even, calculate the two midpoint index's and push both into output array
  // even's length / 2, then grab +1 and -1
  //eg. 10/2 = 5, grab array[4] and array[6]
  //eg. 4/2 = 2, grab array[1] and array[3]
// if 1/2 element array, return empty output array

/* INITIAL SOLUTION */
// const findMiddle = (arr) => {
//   const output = [];

//   // if less than 2 elements
//   if (arr.length <= 2 ) {
//     return output;
//   // if odd numbered array
//   } else if (arr.length % 2 !== 0) {
//     // subtract 1 to sync with zero based index
//     output.push(arr[Math.ceil(arr.length/2) - 1])
//   // if even numbered array
//   } else if (arr.length % 2 === 0){
//     const midPoint = (arr.length/2)
//     // only subtracting by 1 on the first index due to ... math
//     //console to see that arithmetic pattern gives the correct result
//     output.push(arr[midPoint-1])
//     output.push(arr[midPoint])
//   }
//   return output;
// }

/* REFACTOR */

const findMiddle = (arr) => {

  // if less than 2 elements
  if (arr.length <= 2 ) {
    return [];
  // if odd numbered array
  } else if (arr.length % 2 !== 0) {
    // subtract 1 to sync with zero based index
    const midIndex = Math.ceil(arr.length/2) - 1
    return arr.slice(midIndex, midIndex+1)
  // if even numbered array
  } else if (arr.length % 2 === 0){
    const midPoint = (arr.length/2)
    return arr.slice(midPoint-1, midPoint+1)
  }

}

/* TEST */
assertArraysEqual(findMiddle([1]), []);
assertArraysEqual(findMiddle([1,2]), []);
assertArraysEqual(findMiddle([1,2,3]), [2]);
assertArraysEqual(findMiddle([1,2,3,4]), [2,3]);
assertArraysEqual(findMiddle([1,2,3,4,5]), [3]);
assertArraysEqual(findMiddle([1,2,3,4,5,6]), [3,4]);