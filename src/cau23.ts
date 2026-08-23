interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toán ${amount} bằng tiền mặt`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Thanh toán ${amount} bằng thẻ`);
  }
}

function processPayment(payment: Payment, amount: number): void {
  payment.pay(amount);
}

processPayment(new CashPayment(), 100000);
processPayment(new CardPayment(), 250000);