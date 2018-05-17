'use strict';

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isString(value) {
  return typeof value === 'string'
}

function summationReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = {
  randomInt: randomInt,
  isString: isString,
  summationReducer: summationReducer
};
