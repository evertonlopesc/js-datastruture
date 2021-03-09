var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num % 3;
console.log("num == 1 : " + (num == 1));
console.log("num === 1 : " + (num === 1));
console.log("num != 1 : " + (num != 1));
console.log("num > 1 : " + (num > 1));
console.log("num < 1 : " + (num < 1));
console.log("num >= 1 : " + (num >= 1));
console.log("num <= 1 : " + (num <= 1));
console.log("true && false : " + (true && false));
console.log("true || false : " + (true || false));
console.log("!true : " + !true);

// Error of precission - Do not work with float plus price etc., in Javascript
let decimal = 0.1 + 0.2;
let decimalThree = 0.3;
console.log("decimal = 0.1 + 0.2 : " + decimal);
console.log("decimalThree = 0.3 : " + decimalThree);

console.log("decimal == decimalThree : " + (decimal == decimalThree));
console.log("decimal === decimalThree : " + (decimal === decimalThree));
console.log(
    "typeof(decimal) == typeof(decimalThree) : " +
        (typeof decimal == typeof decimalThree)
);

let number = 10 / 100 + 20 / 100;
let numberThree = 30 / 100;
console.log("number = ((10 / 100) + (20 / 100)): " + number);
console.log("numberThree = (30 / 100) : " + numberThree);
console.log("number == numberThree : " + (number == numberThree));
console.log("number === numberThree : " + (number === numberThree));

// bit a bit (bitwise)
console.log("5 & 1: ", 5 & 1);
console.log("5 | 1: ", 5 | 1);
console.log("~ 5: ", ~5);
console.log("5 ^ 1: ", 5 ^ 1);
console.log("5 << 1: ", 5 << 1);
console.log("5 >> 1: ", 5 >> 1);

// typeof
console.log("typeof num: ", typeof num);
console.log("typeof Packt: ", typeof "Packt");
console.log("typeof true: ", typeof true);
console.log("typeof [1,2,3]: ", typeof [1, 2, 3]);
console.log("typeof {name: John}", typeof { name: "John" });

// delete

var myObj = { name: "John", age: 26 };
console.log(myObj);
delete myObj.age;
console.log(myObj);
