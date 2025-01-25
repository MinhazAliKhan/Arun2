let student = [
  {
    name: "minhazAli",
    address: "BD",
    gpa: 3.5,
  },
  {
    name: "Khan",
    address: "usa",
    gpa: 2.5,
  },
  {
    name: "minhaz",
    address: "Eng",
    gpa: 4.5,
  },
  {
    name: "Arun",
    address: "usa",
    gpa: 1.5,
  },
];

let filtered = student.filter((item) => item.gpa > 3).map((elem) => elem.name);
console.log(filtered);
