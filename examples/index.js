const PESEL = require('../index').PESEL;
const REGON = require('../index').REGON;
const IdentityCard = require('../index').IdentityCard;

console.log('Is PESEL `83071503434` valid?', PESEL.isValid('83071503434'));
console.log('Is REGON `975124224` valid?', REGON.isValid('975124224'));
console.log('Is identity card number `ABA300000` valid?', IdentityCard.isValid('ABA300000'));
