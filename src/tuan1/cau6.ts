class Book {
  constructor(public title: string, public author: string, public year: number) {}

  showInfo(): void {
    console.log(`"${this.title}" - ${this.author} (${this.year})`);
  }
}

const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
book1.showInfo();