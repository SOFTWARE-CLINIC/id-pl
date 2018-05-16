'use strict';

const PESEL = require('../index').PESEL;
const expect = require('chai').expect;

describe('PESEL', function () {

  describe('#isValid', function () {
    it('should return true for valid PESEL', function () {
      expect(PESEL.isValid('83071503434')).to.be.true;
    });

    it('should return false for too long PESEL', function () {
      expect(PESEL.isValid('83071503434' + '00')).to.be.false;
    });
  });

  describe('#decode', function () {
    it('should return decoded properties', function () {
      const decoded = PESEL.decode('83071503434');
      expect(decoded.ordinal).to.equal(343);
      expect(decoded.checksum).to.equal(4);
      expect(decoded.sex).to.equal('M');
      expect(decoded.year).to.equal(1983);
      expect(decoded.month).to.equal(7);
      expect(decoded.day).to.equal(15);
    });
  });

});
