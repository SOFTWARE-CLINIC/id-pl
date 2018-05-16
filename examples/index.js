const {
  PESEL,
  REGON,
  IdentityCard
} = require('../index');

console.log('Is PESEL `83071503434` valid?', PESEL.isValid('83071503434'));
console.log('Is REGON `975124224` valid?', REGON.isValid('975124224'));
console.log('Is identity card number `ABA300000` valid?', IdentityCard.isValid('ABA300000'));
