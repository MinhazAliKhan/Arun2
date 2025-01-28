// To avoid call by reference and create a true copy of the object, we can use method like Object.assign() or the spread operator(...)

// Object.assign() is used to copy proprties form one or more source objects to a target object.
let obj = { id: 101, name: "Minhaz" };
let obj1 = Object.assign({}, obj);
obj1.name = "johney";
console.log(obj1);
console.log(obj);
