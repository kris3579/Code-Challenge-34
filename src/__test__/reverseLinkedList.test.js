'use strict';

const ReverseLinkedList = require('../reverseLinkedList');

describe('countCharacters.js', () => {
  test('Returned empty map because of empty string', () => {
    const result = CountCharacters(testEmptyString);
    expect(result.size).toEqual(0);
  });
});
