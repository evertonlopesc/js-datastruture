let x = null;
let y = undefined;

console.log(x == y); //true
console.log(x === y); //false
x = 2;
y = "2";
console.log(x == y); //true
console.log(x === y); //false
x = 2;
y = 4;
console.log(typeof x === typeof y); //true
console.log("John" === true); // false
console.log("John" === "John"); // true
var persona1 = { name: "john" };
var persona2 = { name: "john" };
console.log(persona1 === persona2); // false - object diferent
