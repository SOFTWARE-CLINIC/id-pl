'use strict';

const utils = require('./utils');
const IDENTITY_CARD_NUMBER_REGEXP = /^[A-Z]{3}\d{6}$/;

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

const WEIGHTS = [7, 3, 1, 0, 7, 3, 1, 7, 3];

function isValid(cardNumber) {
  if (!IDENTITY_CARD_NUMBER_REGEXP.test(cardNumber)) {
    return false;
  }
  const sum = cardNumber.split('')
    .map(function (character, index) {
      return index < 3 ? LETTER_TO_NUMERICAL_VALUE[character] : parseInt(character);
    }).map(function (digit, index) {
      return digit * WEIGHTS[index];
    }).reduce(utils.summationReducer, 0);
  return sum % 10 === parseInt(cardNumber.charAt(3));
}

module.exports = {
  isValid: isValid
};
