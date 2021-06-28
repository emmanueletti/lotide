/* PROBLEM */
// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

/* BREAKDOWN */
// take an obj and value as input
// scan the object to see if there is a matching value
// loop over the object and check if each key's value matches what has been passed in
// once a match has been found, return that key
// if no match found after the loop, return 'no key found'

/* INITIAL SOLUTION */
const findKeyByValue = (obj, val) => {
  for (const keys in obj) {
    if (obj[keys].toLowerCase() === val.toLowerCase()) {
      return keys;
    }
  }
  return undefined;
};

/* REFACTOR */

module.exports = findKeyByValue;
