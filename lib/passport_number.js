'use strict';

const utils = require('./utils');
const PASSPORT_NUMBER_REGEXP = /^[A-Z]{2}\d{7}$/;

const LETTER_TO_NUMERICAL_VALUE = {
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15,
  'G': 16,
  'H': 17,
  'I': 18,
  'J': 19,
  'K': 20,
  'L': 21,
  'M': 22,
  'N': 23,
  'O': 24,
  'P': 25,
  'Q': 26,
  'R': 27,
  'S': 28,
  'T': 29,
  'U': 30,
  'V': 31,
  'W': 32,
  'X': 33,
  'Y': 34,
  'Z': 35
};

const WEIGHTS = [7, 3, 9, 1, 7, 3, 1, 7, 3];

function isValid(passportNumber) {
  if (!PASSPORT_NUMBER_REGEXP.test(passportNumber)) {
    return false;
  }
  const sum = passportNumber.split('')
    .map(function (character, index) {
      return index < 2 ? LETTER_TO_NUMERICAL_VALUE[character] : +character;
    }).map(function (digit, index) {
      return digit * WEIGHTS[index];
    }).reduce(utils.summationReducer, 0);
  return sum % 10 === 0;
}

module.exports = {
  isValid: isValid
};
