// (two object different reference checking here)
let obj = { id: 101, name: "Minhaz" };
let obj1 = { id: 101, name: "Minhaz" };
const value = obj == obj1 ? "true" : "false";
console.log(value);

// (two object copy reference checking here)

let obj2 = { id: 101, name: "Minhaz" };
let obj3 = obj2;

const myValue = obj2 == obj3 ? "true" : "false";
console.log(myValue);
