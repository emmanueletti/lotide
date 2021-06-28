const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

// TEST
const topPlacesToVisit = {
  country: 'Switzerland',
  city: 'Toronto',
  restaurant: 'Tacofino',
  beach: 'Cancun',
};

const result = findKeyByValue(topPlacesToVisit, 'switzerland');
const noResult = findKeyByValue(topPlacesToVisit, 'ERROR');

assertEqual(result, 'country');
assertEqual(noResult, undefined);

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
