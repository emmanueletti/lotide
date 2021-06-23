const assertEqual = function(actual, expected) {
  try {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } catch (error) {
    console.log('😬 Something broke');
    console.log(`\t ${error.name}: ${error.message}`);
  }
};

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
      return keys
    } 
  }
  return undefined;
}

/* REFACTOR */



// TEST
const topPlacesToVisit = {
  country: 'Switzerland',
  city: 'Toronto',
  restaurant: 'Tacofino',
  beach: 'Cancun',
}

const result = findKeyByValue(topPlacesToVisit, 'switzerland')
const noResult = findKeyByValue(topPlacesToVisit, 'ERROR')

assertEqual(result, 'country')
assertEqual(noResult, undefined)

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);