const assertArraysEqual = require('../assertArraysEqual');
const { expect } = require('chai');
const findMiddle = require('../middle');

/* TEST */
// assertArraysEqual(findMiddle([1]), []);
// assertArraysEqual(findMiddle([1, 2]), []);
// assertArraysEqual(findMiddle([1, 2, 3]), [2]);
// assertArraysEqual(findMiddle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(findMiddle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(findMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe('Find Middle Function', () => {
  it('returns [] for [1]', () => {
    expect(findMiddle([1])).to.deep.equal([]);
  });

  it(`returns [] for [1,2]`, () => {
    expect(findMiddle([1, 2])).to.deep.equal([]);
  });

  it(`returns [2] for [1,2,3]`, () => {
    expect(findMiddle([1, 2, 3])).to.deep.equal([2]);
  });

  it(`returns [3] for [1,2,3,4,5]`, () => {
    expect(findMiddle([1, 2, 3, 4, 5])).to.deep.equal([3]);
  });

  //
});
