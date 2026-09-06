class Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 10);
console.log(`Diện tích: ${rect.area()}`);
console.log(`Chu vi: ${rect.perimeter()}`);