// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

// BREAKDOWN
// input: array, callback
// output: array with a "slice" of the previous array from begginning to a truthy value

// STEPS / PSUEDO
// accept arr and callback
// declare output const and initialize to empty array
// loop through arr
// apply callback on each arr
// if return of callback on each arr item is "truthy" then return output
// else push item into output
// end loop
// return output

// INITIAL SOLUTION
const takeUntil = (arr, callback) => {
  const output = [];

  for (const item of arr) {
    if (callback(item)) {
      return output;
    }
    output.push(item);
  }
  return output;
};

module.exports = takeUntil;
