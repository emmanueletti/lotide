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
  return arr.slice(1);
};

module.exports = tail;
