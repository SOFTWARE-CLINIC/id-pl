'use strict';

const utils = require('../lib/utils');
const expect = require('chai').expect;

describe('util', function () {

  it('#isString', function () {
    expect(utils.isString('ABC')).to.be.true;
    expect(utils.isString('')).to.be.true;
    expect(utils.isString(null)).to.be.false;
    expect(utils.isString(28)).to.be.false;
    expect(utils.isString(undefined)).to.be.false;
  });

});
