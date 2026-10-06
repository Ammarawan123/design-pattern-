const physicalProduct = {
    name: "Laptop",
    price: 1000,
    accept: visitor => visitor.visitPhysical(physicalProduct)
};

const digitalProduct = {
    name: "E-book",
    price: 100,
    accept: visitor => visitor.visitDigital(digitalProduct)
};
const taxVisitor = {
    visitPhysical: product => product.price * 0.10,
    visitDigital: product => product.price * 0.05
};
console.log(physicalProduct.accept(taxVisitor));
console.log(digitalProduct.accept(taxVisitor));