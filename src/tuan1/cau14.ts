class Employee {
  constructor(public name: string, public salary: number) {}
}

class Manager extends Employee {
  manageTeam(): void {
    console.log(`${this.name} đang quản lý team`);
  }
}

class Developer extends Employee {
  writeCode(): void {
    console.log(`${this.name} đang viết code`);
  }
}

const m1 = new Manager("Anh Tuấn", 20000000);
const dev1 = new Developer("Chị Lan", 15000000);
m1.manageTeam();
dev1.writeCode();