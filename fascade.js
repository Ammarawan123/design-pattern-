function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyTax(amount, taxRate) {
  return amount + (amount * taxRate);
}

function applyDiscount(amount, discount) {
  return Math.max(0, amount - discount);
}

function orderSummary(items, taxRate, discount) {
  const subtotal = calculateTotal(items);
  const totalWithTax = applyTax(subtotal, taxRate);
  const finalTotal = applyDiscount(totalWithTax, discount);

  return {
    subtotal: subtotal,
    finalTotal: Number(finalTotal.toFixed(2))
  };
}

const cartItems = [
  { name: 'Shirt', price: 500, quantity: 2 },
  { name: 'Shoes', price: 1500, quantity: 1 }
];

console.log(orderSummary(cartItems, 0.1, 50));