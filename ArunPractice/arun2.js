let cart = [5, 2, 3, 5, 1, 5, 8, 5];
let uniqueNumber = cart.filter((item, index, arr) => {
  //   console.log(arr.indexOf(item));
  //   console.log(index);
  return arr.indexOf(item) === index;
});
console.log(uniqueNumber);
