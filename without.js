const assertArraysEqual = (arr1, arr2) => {
	const equal = arr1.every((element, index) => element === arr2[index]);
	if (equal) {
		console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
	}
};

// Implement without which will return a subset of a given array, removing unwanted elements.

// This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

// Here are a couple examples, but please don't limit your testing to just these scenarios:

/* STEPS */
// recieve two arrays as input
// see if source array contains items from itemsToRemove array
// create a new array where items from source array not found in itemsToRemove array are stored
// contraint: do not affect the source array
// return the new array

/* PSEUDOCODE */
/* 
function with source array and items to remove array as inputs
  
  initialize empty result array
  initalize a variable to keep track of whether to add or not
  loop from index 1 to end of source array
    loop from index 1 to end of remove array
      if any elements from remove array matches element at current index of source array
        update variable with a sign not to add the source item
    end loop
    if variable track tell us to add source item to output array
      push source item to output

  end loop
  return result array
end function
*/

/* INITIAL SOLUTION */
// const without = (source, itemsToRemove) => {
// 	const output = [];
// 	let addToOutput;
// 	for (let i = 0; i < source.length; i++) {
// 		for (let j = 0; j < itemsToRemove.length; j++) {
// 			if (itemsToRemove[j] === source[i]) {
// 				addToOutput = false;
// 			}

// 			if (addToOutput) {
// 				output.push(source[i]);
// 			}
// 		}
// 	}
// 	return output;
// };

/* REFACTOR */
// return a new array of elements that are NOT included in the items to remove array
const without = (source, itemsToRemove) => {
	return source.filter((element) => !itemsToRemove.includes(element));
};

//TEST
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([], []), []);
assertArraysEqual(without(['1', '2', '3'], []), ['1', '2', '3']);
assertArraysEqual(without(['1', '2', '3', '4'], ['2']), ['1', '3', '4']);
assertArraysEqual(without([], ['2']), []);
assertArraysEqual(without(['1', '2', '3', '4'], ['2']), ['1', '3', '4']);
assertArraysEqual(without(['1', '2', true, '3', '4'], [true]), ['1', '2', '3', '4']);

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
