const person = {
  id: 101,
  name: "Minhaz",
  age: 24,
  greet: function () {
    console.log("Hello JavaScript Object");
  },
  job: "Web Development",
};

console.log(person.name);
console.log(person["name"]);
person.name = "Johney";
console.log(person.name);
person["age"] = 44;
console.log(person);
// console.log(person.greet());
person.greet();
