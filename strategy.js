
const shippingStrategies = {
  standard: (weight) => weight * 5,
  express: (weight) => weight * 10,
  overnight: (weight) => weight * 20
};

function calculateShipping(weight, method) {
return (shippingStrategies[method] && shippingStrategies[method](weight)) 
    || 'Invalid shipping method';
}
console.log(calculateShipping(10, 'standard'));  
console.log(calculateShipping(10, 'express'));   
console.log(calculateShipping(10, 'over')); 

