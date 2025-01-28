const person = {
  id: 101,
  name: "Minhaz",
  age: 24,
  greet: function () {
    console.log("Hello JavaScript Object");
  },
  job: "Web Development",
};
console.log(person);
let jsonData = JSON.stringify(person);
console.log(jsonData);
let myArray = [
  {
    id: 102,
    name: "minhaz",
  },
  {
    id: 103,
    name: "Johney",
  },
];
let jsonmyArray = JSON.stringify(myArray);
console.log(jsonmyArray);
let myObj = JSON.parse(jsonmyArray);
console.log("myObjectFile:", myObj);
