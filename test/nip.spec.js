'use strict';

const NIP = require('../index').NIP;
const expect = require('chai').expect;

describe('NIP', function () {

  describe('#random', function () {
    it('should return random NIP', function () {
      const nip1 = NIP.random();
      const nip2 = NIP.random();

      expect(nip1).not.to.equal(nip2);

      expect(NIP.isValid(nip1)).to.be.true;
      expect(NIP.isValid(nip2)).to.be.true;
    });
  });

  describe('#isValid', function () {
    it('should return true for valid NIP', function () {
      expect(NIP.isValid('2372636037')).to.be.true;
    });

    it('should return false for too long NIP', function () {
      expect(NIP.isValid('2372636037' + '00')).to.be.false;
    });

    it('should return true for too short NIP', function () {
      expect(NIP.isValid('23726')).to.be.false;
    });

    it('should return false for NIP with checksum 10', function () {
      expect(NIP.isValid('1234567890')).to.be.false;
    });
  });

});
