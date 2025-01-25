let fruites = ["Apple", "orange", "Banana"];
let sortedFruits = fruites.sort();
console.log(sortedFruits);
console.log(sortedFruits.reverse());
let numbers = [2, 33, 4, 1, 6, 44];
let sortedNumbers = numbers.sort((a, b) => {
  //   return a - b;
  //   return b - a;
  //   if (a > b) return -1;
  //   if (b > a) return 1;
  if (a > b) return 1;
  if (b > a) return -1;
});
console.log(sortedNumbers);
