//Pass by value
let myValue = 5;
let newValue = myValue;
console.log(newValue);
console.log(myValue);
//pass by value
let number = 3;
let myFunction = (x) => x + 3;
console.log(myFunction(number));
console.log(number);
// pass by reference
let a = [2, 3, 4];
let b = a;
b[0] = 100;
console.log(b);
console.log(a);
// pass by reference
let obj = { id: 101, name: "minhaz" };
let obj1 = obj;
obj1.name = "johney";
console.log(obj1);
console.log("original:", obj);
