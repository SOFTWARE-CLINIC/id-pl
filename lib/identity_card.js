'use strict';

const IDENTITY_CARD_REGEXP = /^[A-Z]{3}\d{6}$/;

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
  const matched = IDENTITY_CARD_REGEXP.test(cardNumber);
  if (matched) {
    const sum = cardNumber.split('')
      .map(function (letter, index) {
        return index < 3 ? LETTER_TO_NUMERICAL_VALUE[letter] : +letter
      }).map(function (value, index) {
        return value * WEIGHTS[index];
      }).reduce(summationReducer, 0);
    return sum % 10 === +cardNumber.charAt(3);
  }
  return false;
}

function summationReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = {
  isValid: isValid
};
