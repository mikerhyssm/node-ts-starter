import Account from './Account';
export default class Bank {

  accounts: Array<Account>;

  constructor() {
    this.accounts = [];
  }

  createAccount(name: string, initialAmount?: number): Account {
    const account = new Account(this.accounts.length + 1, name, initialAmount);
    this.accounts.push(account);

    return account;
  }

  transfer(amount: number, source: Account, destination: Account): boolean {
    try {
      source.withdraw(amount);
      destination.deposit(amount);
      return true;
    } catch (err) {
      return false;
    }
  }

  lookupAccountById(id: number) : Array<Account> {
    return this.performLookup(id, 'id');

  }

  lookupAccountByName(name: string): Array<Account> {
    return this.performLookup(name, 'name');
  }

  private performLookup(searchTerm: string | number, field: string): Array<Account> {
    const accounts = this.accounts.filter(account => account[field] === searchTerm);

    if(accounts.length !== 0) {
      return accounts;
    } else {
      throw(new Error('account not found'));
    }
  }

}
