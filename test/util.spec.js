'use strict';

const util = require('../lib/util');
const expect = require('chai').expect;

describe('util', function () {

  it('#isString', function () {
    expect(util.isString('ABC')).to.be.true;
    expect(util.isString('')).to.be.true;
    expect(util.isString(null)).to.be.false;
    expect(util.isString(28)).to.be.false;
    expect(util.isString(undefined)).to.be.false;
  });

});
