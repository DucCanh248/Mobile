class Product {
  constructor(public name: string, public price: number) {}
}

class Order {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  totalPrice(): number {
    return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

const order = new Order();
order.addProduct(new Product("Sách", 50000));
order.addProduct(new Product("Bút", 10000));
order.addProduct(new Product("Cặp", 200000));

console.log(`Tổng tiền: ${order.totalPrice()}`);