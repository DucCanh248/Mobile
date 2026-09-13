interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Chim đang bay");
  }
}

class Fish implements Swimmable {
  swim(): void {
    console.log("Cá đang bơi");
  }
}

// Có thể implement nhiều interface cùng lúc, ví dụ vịt vừa bay vừa bơi:
class Duck implements Flyable, Swimmable {
  fly(): void {
    console.log("Vịt đang bay");
  }
  swim(): void {
    console.log("Vịt đang bơi");
  }
}

new Bird().fly();
new Fish().swim();
new Duck().fly();
new Duck().swim();