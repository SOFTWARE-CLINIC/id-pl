'use strict';

const utils = require('./utils');

const PESEL_REGEXP = /^\d{11}$/;
const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];

function decode(value) {
  const birthday = decodeBirthday(value);

  return {
    ordinal: +value.substring(6, 10),
    checksum: +value[10],
    sex: (value[9] % 2 === 0 ? 'F' : 'M'),
    year: birthday.year,
    month: birthday.month,
    day: birthday.day
  };
}

function decodeBirthday(value) {
  const digits = value.split('').map(function (character) {
    return parseInt(character);
  });
  let year = 1900 + digits[0] * 10 + digits[1];

  if (digits[2] >= 2 && digits[2] < 8) {
    year += Math.floor(digits[2] / 2) * 100;
  }

  if (digits[2] >= 8) {
    year -= 100;
  }

  const month = (digits[2] % 2) * 10 + digits[3];
  const day = digits[4] * 10 + digits[5];

  return {
    year: year,
    month: month,
    day: day
  }
}

function isValid(value) {
  if (!PESEL_REGEXP.test(value)) {
    return false;
  }
  const sum = value.split('')
    .map(function (character) {
      return parseInt(character);
    }).map(function (digit, index) {
      return digit * WEIGHTS[index];
    }).reduce(utils.summationReducer, 0);

  return sum % 10 === 0;
}

module.exports = {
  decode: decode,
  isValid: isValid
};
