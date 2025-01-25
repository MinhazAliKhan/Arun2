let numbers = [2, 3, 1, 4, 5, 6, 1, 8];
let squareNumbers = numbers.map((number) => {
  return number * number;
});
let myNumber = squareNumbers.find((num) => {
  return num > 1;
});
console.log(squareNumbers);
console.log(`My number is:${myNumber}`);
