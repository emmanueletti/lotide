const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

// TEST
const result = countLetters('lighthouse labs');

assertEqual(result['l'], 2);
assertEqual(result['s'], 2);
assertEqual(result['x'], undefined);
console.log('--case test---');

const casedResult = countLetters('Lighthouse labs');
assertEqual(casedResult['l'], 2);
