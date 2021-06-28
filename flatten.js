//  Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

/* STEPS */
// take a nested array as input
// see if each element is an array

/* PSEUDOCODE */

/* INITIAL VERSION */
// const flatten = (num, arr) => {
// 	const output = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] === 'object') {
// 			for (let j = 0; j < arr[i].length; j++) {
// 				output.push(arr[i][j]);
// 			}
// 		} else {
// 			output.push(arr[i]);
// 		}
// 	}
// 	return output;
// };

/* REFACTOR */
// recursively flatten out the array

const flatten = (arr) => {
  let output = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      output = output.concat(flatten(element));
    } else {
      output.push(element);
    }
  }
  return output;
};

// console.log(flatten([1, [2, [3, 4, 5, [[[6]]]]], 7, 8, 9, [10]]));
module.exports = flatten;
