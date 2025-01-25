let products = [
  {
    name: "Apple",
    price: 123,
  },
  {
    name: "Mango",
    price: 80,
  },
  {
    name: "Grape",
    price: 90,
  },
  {
    name: "Orange",
    price: 100,
  },
];
const filteredProducts = products.filter((product) => {
  return product.price > 100;
});
console.log(filteredProducts);
console.log(filteredProducts[0]);
console.log(filteredProducts[0].name);
