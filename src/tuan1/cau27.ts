class Person {
  constructor(public name: string, public age: number) {}
}

class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }

  introduce(): void {
    console.log(`Tôi là ${this.name}, ${this.age} tuổi, dạy môn ${this.subject}`);
  }
}

const teacher1 = new Teacher("Cô Hoa", 35, "Toán");
teacher1.introduce();