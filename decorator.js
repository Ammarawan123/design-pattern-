
function getPrice(product) {
  return product.price;
}
function withTax(getPriceFn) {
  return function (product) {
    const basePrice = getPriceFn(product);
    return basePrice + basePrice * 0.10; 
  };
}

function withDiscount(getPriceFn) {
  return function (product) {
    const currentPrice = getPriceFn(product);
    return currentPrice - currentPrice * 0.05; 
  };
}
const product = { name: 'Shirt', price: 500 };

console.log('Base Price:', getPrice(product)); 
const getPriceWithTax = withTax(getPrice);
console.log('With 10% Tax:', getPriceWithTax(product)); 
const getPriceWithDiscount = withDiscount(getPrice);
console.log('With 5% Discount:', getPriceWithDiscount(product)); 
const getFinalPrice = withDiscount(withTax(getPrice));
console.log('With Tax + Discount:', getFinalPrice(product)); 
