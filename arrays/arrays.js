// Create and Initialize arrays

let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array(
    "Monday", "Sunday", "Tuesdays", "Wednesday", "Thursday", "Friday", "Saturday"
);

for (let index = 0; index < daysOfWeek.length; index++) {
    daysOfWeek[index];
};
console.log("DAYS OF WEEK");
console.log(daysOfWeek);
let daysOfWeekTwo = [];
let daysOfWeekThree = [
    "Monday", "Sunday", "Tuesdays", "Wednesday", "Thursday", "Friday", "Saturday"
];

for (let index = 0; index < daysOfWeekThree.length; index++) {
    //console.log(daysOfWeek[index]);  
};

const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let index = 3; index < 20; index++) {
    fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];

};
for (let index = 1; index < fibonacci.length; index++) {
    fibonacci[index];
};

fibonacci.shift();
console.log("FIBONACCI");
console.log(fibonacci);

console.log("NEW ARRAY NUMBERS");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

console.log("INSERT LAST POSITION - .LENGTH");
numbers[numbers.length] = 10;
console.log(numbers);

console.log("INSERT LAST POSITION - PUSH()");
numbers.push(11);
console.log(numbers);

console.log("INSERT FIRST POSITION - EVERTON");
function insertFirstIndex(array, value) {
    let arrayAux = [];
    arrayAux[0] = value;
    for (let index = 0; index < array.length; index++) {
        arrayAux[index + 1] = array[index];
    }
    return array = arrayAux;
};

numbers = insertFirstIndex(numbers, (-1));
console.log(numbers);

console.log("INSERT FIRST POSITION - LOIANE");
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1]; 
    }
    this[0] = value;
};

numbers.insertFirstPosition(-2);
console.log(numbers);

console.log("INSERT FIRST POSITION - UNSHIFT()");
numbers.unshift(-3);
console.log(numbers);

console.log("INSERT FIRST POSITION - UNSHIFT WHIT TWO NUMBERS");
numbers.unshift(-5, -4);
console.log(numbers);

console.log("REMOVE LAST POSITION - POP()");
numbers.pop();
console.log(numbers);

console.log("REMOVE FIRST POSITION");
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}
console.log(numbers);

console.log("REMOVE FIRST POSITION - EVERTON");
function removeGarbageArray(array) {
    const cleanArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== undefined) {
            cleanArray[i] = array[i];
        };
    };
    return array = cleanArray;
};

function removingFirstPosition(array) {
    const arrayAux = [];
    for (let i = 0; i < array.length; i++) {
        arrayAux[i] = array[i + 1];
    };
    array = arrayAux
    return removeGarbageArray(array);
};

numbers = removingFirstPosition(numbers);
console.log(numbers);

console.log("REMOVE FIRST POSITION");
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}
console.log(numbers);

console.log("REMOVE FIRST POSITION - LOIANE");
Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    };
    return newArray;
};

Array.prototype.removeFirstPosition = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
        
    };
    return this.reIndex(this);
};

numbers = numbers.removeFirstPosition();
console.log(numbers);

console.log("REMOVE FIRST POSITION - SHIFT()");
numbers.shift();
console.log(numbers);

console.log("IN PROJECT USE UNSHIFT, PUSH, SHIFT AND POP");

