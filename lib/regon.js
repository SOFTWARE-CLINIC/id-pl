'use strict';

const utils = require('./utils');

const REGON9_REGEXP = /^\d{9}$/;
const REGON14_REGEXP = /^\d{14}$/;
const WEIGHTS_9 = [8, 9, 2, 3, 4, 5, 6, 7];
const WEIGHTS_14 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
const DIVISOR = 11;

function random9() {
  return generateRandomNumber(WEIGHTS_9, DIVISOR);
}

function random14() {
  return generateRandomNumber(WEIGHTS_14, DIVISOR)
}

function isValid(value) {
  let checksum;
  if (REGON9_REGEXP.test(value)) {
    checksum = calculateChecksum(value, WEIGHTS_9, DIVISOR);
    return checksum === parseInt(value.charAt(8));
  }
  if (REGON14_REGEXP.test(value)) {
    checksum = calculateChecksum(value, WEIGHTS_14, DIVISOR);
    return checksum === parseInt(value.charAt(13));
  }
  return false;
}


function calculateChecksum(numberAsString, weights, divisor) {
  let i, sum = 0, digits = [];
  for (i = 0; i < weights.length; i++) {
    digits.push(+numberAsString[i]);
    sum += digits[i] * weights[i];
  }
  return (sum % divisor) % 10;
}

function generateRandomNumber(weights, divisor) {
  let i, sum = 0, checksum, digits = [];

  for (i = 0; i < weights.length; i++) {
    digits.push(utils.randomInt(1, 9));
    sum += digits[i] * weights[i];
  }

  checksum = (sum % divisor) % 10;
  return digits.join('') + checksum;
}

module.exports = {
  isValid: isValid,
  random9: random9,
  random14: random14
};
