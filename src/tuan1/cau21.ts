class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

interface Product {
  name: string;
  price: number;
}

const productRepo = new Repository<Product>();
productRepo.add({ name: "Laptop", price: 15000000 });
productRepo.add({ name: "Chuột", price: 150000 });

console.log(productRepo.getAll());