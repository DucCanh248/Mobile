class Animal {
  protected makeSound(): void {
    console.log("Âm thanh động vật");
  }

  performSound(): void {
    this.makeSound(); // gọi được trong class dù protected
  }
}

class Dog extends Animal {
  protected makeSound(): void {
    console.log("Gâu gâu!");
  }
}

class Cat extends Animal {
  protected makeSound(): void {
    console.log("Meo meo!");
  }
}

const dog1 = new Dog();
const cat1 = new Cat();
dog1.performSound();
cat1.performSound();
// dog1.makeSound() → lỗi vì protected, không gọi được từ bên ngoài