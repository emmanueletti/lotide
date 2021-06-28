const flatten = require('../flatten');
const { expect } = require('chai');

//TEST
// console.log(flatten([1, 2, [3, 4], 5, [6], [[7]]]));

describe(`Flatten Function`, () => {
  it(`return [1,2,3,4] for [1,2,[3],4]`, () => {
    expect(flatten([1, 2, [3], 4])).to.deep.equal([1, 2, 3, 4]);
  });

  it(`return [1,2,3,4] for [1,[2,[3]],4]`, () => {
    expect(flatten([1, [2, [3]], 4])).to.deep.equal([1, 2, 3, 4]);
  });

  it(`return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for [1, [2, [3, 4, 5, [[[6]]]]], 7, 8, 9, [10]]`, () => {
    expect(flatten([1, [2, [3, 4, 5, [[[6]]]]], 7, 8, 9, [10]])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
