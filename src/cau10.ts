class Account {
  public username: string;
  private password: string;
  readonly accountId: string;

  constructor(username: string, password: string, accountId: string) {
    this.username = username;
    this.password = password;
    this.accountId = accountId;
  }

  checkPassword(input: string): boolean {
    return input === this.password;
  }
}

const acc1 = new Account("canh123", "matkhau123", "ACC-001");
console.log(acc1.username);           // OK - public
console.log(acc1.checkPassword("matkhau123")); // true
// acc1.password  → lỗi vì private
// acc1.accountId = "ACC-002" → lỗi vì readonly