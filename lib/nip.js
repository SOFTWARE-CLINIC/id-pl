'use strict';

const utils = require('./utils');

const NIP_REGEXP = /^\d{10}$/;

const WEIGHTS = [6, 5, 7, 2, 3, 4, 5, 6, 7];
const MODULO = 11;

function isValid(value) {
  if (!NIP_REGEXP.test(value)) {
    return false;
  }
  const sum = value.substring(0, 9).split('')
    .map(function (character) {
      return parseInt(character);
    }).map(function (digit, index) {
      return digit * WEIGHTS[index];
    }).reduce(utils.summationReducer, 0);

  return sum % MODULO === parseInt(value.charAt(9));
}

function random() {
  let i, sum = 0, checksum, digits = [];

  for (i = 0; i < WEIGHTS.length; i++) {
    digits.push(utils.randomInt(1, 9));
    sum += digits[i] * WEIGHTS[i];
  }

  checksum = sum % MODULO;
  if (checksum === 10 || checksum === 0) {
    return this.random();
  }

  return digits.join('') + checksum;
}

module.exports = {
  isValid: isValid,
  random: random
};
