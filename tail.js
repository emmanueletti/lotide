const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
	} else {
		console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
	}
};

const tail = (array) => {
	let result = [];

	if (array.length > 1) {
		for (let i = 1; i < array.length; i++) {
			result.push(array[i]);
		}
	} else {
		// return empty array if only 1 element in array
		return result;
	}

	return result;
};

result = tail([1, 2, 3, 4, 5]);
assertEqual(result[0], 2);
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([1]));
console.log(tail([]));
console.log();

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
