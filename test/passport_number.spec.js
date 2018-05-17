'use strict';

const PassportNumber = require('../index').PassportNumber;
const expect = require('chai').expect;

describe('PassportNumber', function () {

  describe('#isValid', function () {

    it("should return false for invalid passport number's regexp", function () {
      expect(PassportNumber.isValid('123456789')).to.be.false;
    });

    it("should return true for valid passport number's checksum", function () {
      expect(PassportNumber.isValid('CC7999486')).to.be.true;
    });

    it("should return false for invalid passport number's checksum", function () {
      expect(PassportNumber.isValid('CC7999480')).to.be.false;
    });

  });

});
