// function simples

function write() {
    console.log("Hello World!");
};

write();

// function with params

let text = "Hello";

function writeWithParams(paramsOne, paramsTwo) {
    console.log(paramsOne, paramsTwo);
};

writeWithParams(text, "World!");

// function with return

function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

let result = sum(1, 2);

console.log("Soma: 1 + 2 = " + result);
