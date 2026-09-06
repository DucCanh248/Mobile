class Animal {
  makeSound(): void {
    console.log("Động vật phát ra âm thanh");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Gâu gâu!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meo meo!");
  }
}

const animals: Animal[] = [new Animal(), new Dog(), new Cat()];

animals.forEach(a => a.makeSound());