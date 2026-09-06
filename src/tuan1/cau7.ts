class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim().length === 0) {
      console.log("Tên không được để trống!");
      return;
    }
    this._name = newName;
  }
}

const u1 = new User("Trần Đức Cảnh");
console.log(u1.name);       // gọi getter
u1.name = "Cảnh Trần";      // gọi setter
console.log(u1.name);
u1.name = "";                // test validate