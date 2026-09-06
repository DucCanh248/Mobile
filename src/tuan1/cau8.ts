class Product {
  constructor(public name: string, public price: number) {}
}

const products: Product[] = [
  new Product("Chuột", 150),
  new Product("Bàn phím", 90),
  new Product("Màn hình", 3000),
  new Product("USB", 80),
];

const expensiveProducts = products.filter(p => p.price > 100);
expensiveProducts.forEach(p => console.log(`${p.name}: ${p.price}`));