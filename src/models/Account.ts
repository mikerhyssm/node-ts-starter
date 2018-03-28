export default class Account {
  balance: number

  constructor(public id: number, public name: string, initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if(amount <= this.balance) {
      this.balance -= amount;

    } else {
      throw(new Error('account is overdrawn'));
    }
  }

}
