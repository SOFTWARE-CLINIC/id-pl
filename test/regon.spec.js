'use strict';

const REGON = require('../index').REGON;
const expect = require('chai').expect;

describe('REGON', function () {

  describe('#random9', function () {
    it('should return random 9 digit REGON', function () {
      const regon1 = REGON.random9();
      const regon2 = REGON.random9();

      expect(regon1).not.to.equal(regon2);

      expect(REGON.isValid(regon1)).to.be.true;
      expect(REGON.isValid(regon2)).to.be.true;
    });
  });

  describe('#random14', function () {
    it('should return random 14 digit REGON', function () {
      const regon1 = REGON.random14();
      const regon2 = REGON.random14();

      expect(regon1).not.to.equal(regon2);
      expect(REGON.isValid(regon1)).to.be.true;
      expect(REGON.isValid(regon2)).to.be.true;
    });
  });

  describe('#isValid', function () {
    it('should return true for valid 9 digit REGON', function () {
      expect(REGON.isValid('550440322')).to.be.true;
    });

    it('should return true for valid 9 digit REGON with checksum equal 10', function () {
      expect(REGON.isValid('386685250')).to.be.true;
    });

    it('should return true for valid 14 digit REGON', function () {
      expect(REGON.isValid('12345678512347')).to.be.true;
    });

    it('should return false for 14 digit REGON with invalid checksum', function () {
      expect(REGON.isValid('12345678512346')).to.be.false;
    });

    it('should return false for too long REGON', function () {
      expect(REGON.isValid('550440322' + '00')).to.be.false;
    });

    it('should return false for too short REGON', function () {
      expect(REGON.isValid('3423')).to.be.false;
    });
  });

});
