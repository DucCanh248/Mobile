class Book {
  constructor(public title: string) {}
}

class User {
  constructor(public name: string) {}
}

class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Đã thêm sách: ${book.title}`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`Đã thêm user: ${user.name}`);
  }

  listBooks(): void {
    this.books.forEach(b => console.log(`- ${b.title}`));
  }
}

const lib = new Library();
lib.addBook(new Book("Toán Cao Cấp"));
lib.addBook(new Book("Lập Trình TypeScript"));
lib.addUser(new User("Cảnh"));
lib.listBooks();