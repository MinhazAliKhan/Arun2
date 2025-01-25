let numbers = [2, 1, 3, 4, 2, 1, 7, 8, 12, 2, 5];
// let filteredNumbered = numbers.filter((number, index, arr) => {
//   //   console.log(arr.indexOf(number));
//   //   console.log(index);
//   return arr.indexOf(number) === index;
// });
// console.log(filteredNumbered);
// console.log(new Set(numbers));
let uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);
console.log([uniqueNumbers]);
console.log([...uniqueNumbers]);
