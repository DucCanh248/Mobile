class Student {
  constructor(public name: string, public grade: string) {}
}

class Teacher {
  constructor(public name: string, public subject: string) {}
}

class School {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  displayInfo(): void {
    console.log("--- Học sinh ---");
    this.students.forEach(s => console.log(`${s.name} - Lớp ${s.grade}`));

    console.log("--- Giáo viên ---");
    this.teachers.forEach(t => console.log(`${t.name} - Dạy ${t.subject}`));
  }
}

const school = new School();
school.addStudent(new Student("Nam", "10A1"));
school.addStudent(new Student("Linh", "11A2"));
school.addTeacher(new Teacher("Thầy Bình", "Vật Lý"));

school.displayInfo();