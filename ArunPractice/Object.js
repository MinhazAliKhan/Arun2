let student = {
  id: 101,
  name: "Minhaz",
  age: 44,
  display: () => {
    return "Hello";
  },
};
let jsonData = JSON.stringify(student);
console.log(student);
console.log(jsonData);
let newObjData = JSON.parse(jsonData);
console.log(newObjData);
