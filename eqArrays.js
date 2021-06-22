const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

/* STEPS */
// compare two arrays
// evaluate for perfect equality in type and value
// return true or false

/* PSEUDOCODE */
/*
function with input array1 and array2

Loop starting at index 0 till end of array 1

    If array 1 element does not equal element in the same index in array 2:
      return false
    Otherwise:
      return true
    End if

  End Loop

End function
*/

/* INITIAL SOLUTION */
// const eqArrays = (arr1, arr2) => {
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] !== arr2[i]) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

/* REFACTOR */

const eqArrays = (arr1, arr2) => {
	return arr1.every((element, index) => element === arr2[index]);
};

// TESTS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
// assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), false);
