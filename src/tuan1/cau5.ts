class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Nạp ${amount}. Số dư hiện tại: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Số dư không đủ!");
      return;
    }
    this.balance -= amount;
    console.log(`Rút ${amount}. Số dư hiện tại: ${this.balance}`);
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(5000); 