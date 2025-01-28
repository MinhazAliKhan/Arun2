let products = [
  {
    name: "Apple",
    price: 123,
  },
  {
    name: "Orange",
    price: 60,
  },
  {
    name: "Orange",
    price: 60,
  },
];
let updatedProducts = products.map((product) => {
  return product;
});
console.log(updatedProducts);
console.log(updatedProducts[2]);
console.log(updatedProducts[2].price);
