import Account from './Account';
export default class Bank {

  accounts: Array<Account>

  constructor() {
    this.accounts = [];
  }

  createAccount(initialAmount?: number): Account {
    const account = new Account(initialAmount);
    this.accounts.push(account);

    return account;
  }

  transfer(amount: number, source: Account, destination: Account) {
    try {
      source.withdraw(amount);
      destination.deposit(amount);
      return true;
    } catch (err) {
      return false;
    }
  }
}
