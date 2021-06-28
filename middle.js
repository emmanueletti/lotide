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
  if (arr.length <= 2) {
    return [];
    // if odd numbered array
  } else if (arr.length % 2 !== 0) {
    // subtract 1 to sync with zero based index
    const midIndex = Math.ceil(arr.length / 2) - 1;
    return arr.slice(midIndex, midIndex + 1);
    // if even numbered array
  } else if (arr.length % 2 === 0) {
    const midPoint = arr.length / 2;
    return arr.slice(midPoint - 1, midPoint + 1);
  }
};

module.exports = findMiddle;
