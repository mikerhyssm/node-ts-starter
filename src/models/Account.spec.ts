import { assert } from 'chai';
import  Account  from "./Account";


describe('an account', () => {

  it('should exist', () => {
    const account = new Account(123, 'Dan');

    assert.notEqual(account, undefined);
  });

  it('should be able to create an account with an id and name', () => {
    const id = 123;
    const account = new Account(id, 'Dan');

    assert.notEqual(account, undefined);
    assert.equal(account.id, id);
    assert.equal(account.name, 'Dan');
  });

  it('should have a balance of zero when created', () => {
    const account = new Account(123, 'Dan');
    assert.equal(account.balance, 0);

  });

  it('should accept an initial balance', () => {
    const account = new Account(123, 'Dan', 500);

    assert.equal(account.balance, 500);
  });

  it('should increase balance when a deposit is made', () => {
    const account = new Account(123, 'Dan');

    account.deposit(100);

    assert.equal(account.balance, 100);
  });

  it('should decrease balance when a withdrawal is made', () => {
    const account = new Account(123, 'Dan', 500);

    account.withdraw(100);

    assert.equal(account.balance, 400);
  });

  it('should raise an error if withdrawal is greater than balance', () => {
    const account = new Account(123, 'Dan', 500);

    assert.throws( () => {account.withdraw(600)}, 'account is overdrawn');

  });

  it('should not reduce balance if withdrawal is greater than balance', () => {
    const account = new Account(123, 'Dan', 500);

    try {
      account.withdraw(600);
    } catch (err) {
    }

    assert.equal(account.balance, 500);
  });

});

