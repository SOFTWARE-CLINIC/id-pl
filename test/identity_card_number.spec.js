'use strict';

const IdentityCardNumber = require('../index').IdentityCardNumber;
const expect = require('chai').expect;

describe('IdentityCardNumber', function () {

  describe('#isValid', function () {

    it('should return true for valid identity card number', function () {
      expect(IdentityCardNumber.isValid('ABA300000')).to.be.true;
    });

    it('should return false for invalid identity card number', function () {
      expect(IdentityCardNumber.isValid('ABA400000')).to.be.false;
    })

  });

});
