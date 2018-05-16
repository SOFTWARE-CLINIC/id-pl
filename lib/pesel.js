'use strict';

const util = require('./util');

const WEIGHTS = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
const LENGTH = 11;
const MODULO = 10;

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
  var digits = value.split('').map(function (char) {
    return parseInt(char);
  });
  var year = 1900 + digits[0] * 10 + digits[1];

  if (digits[2] >= 2 && digits[2] < 8) {
    year += Math.floor(digits[2] / 2) * 100;
  }

  if (digits[2] >= 8) {
    year -= 100;
  }

  var month = (digits[2] % 2) * 10 + digits[3];
  var day = digits[4] * 10 + digits[5];

  return {
    year: year,
    month: month,
    day: day
  }
}

function isValid(value) {
  if (util.isString(value) && value.length === LENGTH) {
    let i, sum = 0, checksum, digits = [];
    for (i = 0; i < WEIGHTS.length; i++) {
      digits.push(+value[i]);
      sum += digits[i] * WEIGHTS[i];
    }
    checksum = (10 - sum % MODULO) % 10;
    return checksum === (+value[LENGTH - 1]);
  }
  return false;
}

module.exports = {
  decode: decode,
  isValid: isValid
};
