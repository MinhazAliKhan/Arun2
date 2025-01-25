let country1 = {
  name: "USA",
  state: 33,
};
let country2 = {
  popu: 2333,
  lang: "English",
};

let result = { ...country1, ...country2 };

console.log(result);

// const uniqueNumber = new Set(price);
// console.log(uniqueNumber);
// console.log([...uniqueNumber]);
