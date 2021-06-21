const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

/* ORIGINAL VERSION */
// const tail = (arr) => {
// 	let result = [];

// 	if (arr.length > 1) {
// 		for (let i = 1; i < arr.length; i++) {
// 			result.push(arr[i]);
// 		}
// 	} else {
// 		// return empty array if only 1 element in array
// 		return result;
// 	}

// 	return result;
// };

/* REFACTORED VERSION */
const tail = (arr) => {
	return arr.slice(1, arr.length);
};

// TESTS
original = [1, 2, 3, 4, 5];
result = tail(original);
assertEqual(result[0], 2);
assertEqual(result.length, 4);
assertEqual(original.length, 5);
//
empty = tail([]);
assertEqual(empty.length, 0);
assertEqual(empty[0], undefined);
//
oneElement = tail([1]);
assertEqual(oneElement.length, 0);
assertEqual(oneElement[0], undefined);
