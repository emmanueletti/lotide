# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @emmanueletti/lotide`

**Require it:**

`const _ = require('@emmanueletti/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArrayEqual(arr1, arr2)`: checks if two arrays are equal
- `assertEqual(value1, value2)`: checks if two primitative values are equal
- `assertObjectsEqual(obj1, obj2)`: checks if two objects are equal
- `countLetters('hello world')`: returns a histogram object tabulating all occurances of letters in a string
- `countOnly(arr, obj)`: given an array and an object, function will return an object containing counts of everything that the input object listed
- `findKey(obj, callbackFn)`: takes in an object and a callback function. Scans the object and return the first key for which the callback returns a truthy value. If no key is found, then returns undefined.
- `findKeyByValue(obj, value)`: takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `flatten(arr)`: re-cursively flattens out an array nested to any level down to 1 level
- `head(arr)`: returns the first index position of an array
- `letterPositions(arr)`: takes a string and returns an object detailing the index positions of each letter
- `map(arr, callbackFn)`: implementation of [Javascripts map function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- `middle(arr)`: takes an array and returns the middle element. If array is even numbered in length, function will return the middle 2 elements.
- `tail(arr)`: returns the elements after the first array index
- `takeUntil(arr, callback)`: will keep collecting items from a provided array until the callback provided returns a truthy value
- `without(arr1, arr2)`: will return a subset of a given array (arr1), removing specified unwanted elements (arr2)
