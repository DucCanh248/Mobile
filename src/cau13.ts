abstract class Shape {
  abstract area(): number;

  describe(): void {
    console.log(`Diện tích: ${this.area().toFixed(2)}`);
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const sq = new Square(4);
const cir = new Circle(3);
sq.describe();
cir.describe();