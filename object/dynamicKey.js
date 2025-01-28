let id = "CollageId";
let student = {
  [id]: "aaa102",
  name: "Minhaz",
  age: 44,
  isStudent: true,
  greet: function () {
    return `Hello ${student.name}, your ${id} is ${student[id]}`;
  },
};
console.log(student.greet());
