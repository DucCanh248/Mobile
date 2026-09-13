class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}`);
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age); // gọi constructor của lớp cha
    this.grade = grade;
  }

  displayAll(): void {
    console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Lớp: ${this.grade}`);
  }
}
const s1 = new Student("Trần Đức Cảnh", 19, "DHKTPM19BTT");
s1.displayAll();