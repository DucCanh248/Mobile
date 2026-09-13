interface Vehicle {
  brand: string;
  start(): void;
}

class Car implements Vehicle {
  constructor(public brand: string) {}
  start(): void {
    console.log(`${this.brand}: Nổ máy ô tô`);
  }
}

class Bike implements Vehicle {
  constructor(public brand: string) {}
  start(): void {
    console.log(`${this.brand}: Đạp xe khởi động`);
  }
}

const car1 = new Car("Honda");
const bike1 = new Bike("Giant");
car1.start();
bike1.start();