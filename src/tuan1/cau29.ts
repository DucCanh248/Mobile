interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void {
    console.log("Xe hơi đang chạy trên đường");
  }
}

class Robot implements Movable {
  move(): void {
    console.log("Robot đang di chuyển bằng bánh xích");
  }
}

const objects: Movable[] = [new Car(), new Robot()];
objects.forEach(o => o.move());