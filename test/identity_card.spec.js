'use strict';

const IdentityCard = require('../index').IdentityCard;
const expect = require('chai').expect;

describe('IdentityCard', function () {

  describe('#isValid', function () {

    it('should return true for valid identity card number', function () {
      expect(IdentityCard.isValid('ABA300000')).to.be.true;
    });

    it('should return false for invalid identity card number', function () {
      expect(IdentityCard.isValid('ABA400000')).to.be.false;
    })

  });

});
