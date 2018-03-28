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

  describe('account creation ', () => {
    it('should allow for account creation', () => {
      const bank = new Bank();

      const newAccount = bank.createAccount('Dan');

      assert.equal(bank.accounts.length, 1);
      assert.equal(newAccount.balance, 0);
      assert.equal(newAccount.name, 'Dan');
    });

    it('should allow for account creation with initial amount', () => {
      const bank = new Bank();

      const newAccount = bank.createAccount('Dan', 10);

      assert.equal(bank.accounts.length, 1);
      assert.equal(newAccount.balance, 10);
    });

    it('should give accounts increasing Ids', () => {
      const bank = new Bank();

      const newAccountOne = bank.createAccount('Dan', 10);

      assert.equal(bank.accounts.length, 1);
      assert.equal(newAccountOne.id, 1);


      const newAccountTwo = bank.createAccount('Dan', 10);

      assert.equal(bank.accounts.length, 2);
      assert.equal(newAccountTwo.id, 2);
    })
  });

  describe('search ', () => {
    it('should lookup account by id', () => {
      const bank = new Bank();
      const expectedAccount = bank.createAccount('Dan');

      const actualAccount = bank.lookupAccountById(1);

      assert.notEqual(actualAccount, undefined);
      assert.equal(actualAccount[0].id, expectedAccount.id);
    });

    it('should throw an error if account doesn\'t exist with the id', () => {
      const bank = new Bank();

      assert.throws(() => {bank.lookupAccountById(1)}, 'account not found');
    });

    it('should lookup a single account by owner name', () => {
      const bank = new Bank();
      const expectedAccount = bank.createAccount('Mike');

      const actualAccounts = bank.lookupAccountByName('Mike');

      assert.equal(actualAccounts.length, 1);
      assert.equal(actualAccounts[0].id, expectedAccount.id);
    });

    it('should lookup multiple accounts by owner name', () => {
      const bank = new Bank();
      const expectedAccount1 = bank.createAccount('Mike');
      const expectedAccount2 = bank.createAccount('Mike');

      const actualAccounts = bank.lookupAccountByName('Mike');

      assert.equal(actualAccounts.length, 2);
      assert.equal(actualAccounts[0].id, expectedAccount1.id);
      assert.equal(actualAccounts[1].id, expectedAccount2.id);
    });

    it('should throw an error if account doesn\'t exist with the owner name', () => {
      const bank = new Bank();

      assert.throws(() => {bank.lookupAccountByName('Mike')}, 'account not found');
    });
  });

  describe('transfer', () => {
    it('should transfer an amount between accounts', () => {
      const bank = new Bank()
      const account = bank.createAccount('Dan', 100);
      const other = bank.createAccount('Dan');

      bank.transfer(50, account, other);

      assert.equal(account.balance, 50);
      assert.equal(other.balance, 50);
    });

    it('should return false if transfer fails', () => {
      const bank = new Bank()
      const account = bank.createAccount('Dan', 100);
      const other = bank.createAccount('Dan');

      const result = bank.transfer(150, account, other);

      assert.equal(false, result);

    });

    it('should not transfer money to another account if balance is less than transfer amount', () => {
      const bank = new Bank()
      const account = bank.createAccount('Dan', 100);
      const other = bank.createAccount('Dan');

      bank.transfer(150, account, other);

      assert.equal(account.balance, 100);
      assert.equal(other.balance, 0);

    });
  });

});

