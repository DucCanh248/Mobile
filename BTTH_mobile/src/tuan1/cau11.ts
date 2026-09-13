class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name}: Gâu gâu!`);
  }
}

class Cat extends Animal {
  meow(): void {
    console.log(`${this.name}: Meo meo!`);
  }
}

const d1 = new Dog("Milu");
const c1 = new Cat("Mimi");
d1.bark();
c1.meow();