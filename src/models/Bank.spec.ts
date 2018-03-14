const assert = require('assert');
import  Bank  from "./Bank";


describe('a bank', () => {

  it('should exist', () => {
    const bank = new Bank();

    assert.notEqual(bank, undefined);
  });

  it('should have zero accounts initially', () => {
    const bank = new Bank();

    assert.equal(bank.accounts.length, 0);
  });

  it('should allow for account creation', () => {
    const bank = new Bank();

    const newAccount = bank.createAccount(10);

    assert.equal(bank.accounts.length, 1);
    assert.equal(newAccount.balance, 10);
  })



  describe('transfer', () => {
    it('should transfer an amount between accounts', () => {
      const bank = new Bank()
      const account = bank.createAccount(100);
      const other = bank.createAccount();

      bank.transfer(50, account, other);

      assert.equal(account.balance, 50);
      assert.equal(other.balance, 50);
    });

    it('should return false if transfer fails', () => {
      const bank = new Bank()
      const account = bank.createAccount(100);
      const other = bank.createAccount();

      const result = bank.transfer(150, account, other);

      assert.equal(false, result);

    });

    it('should not transfer money to another account if balance is less than transfer amount', () => {
      const bank = new Bank()
      const account = bank.createAccount(100);
      const other = bank.createAccount();

      bank.transfer(150, account, other);

      assert.equal(account.balance, 100);
      assert.equal(other.balance, 0);

    });
  });

});

