console.log("Hello guys!!!")

function printScreen(param) {
    return console.log(`Array: ${param} | Size: ${param.length}`);
};

function printTitle(param) {
    return console.log("-------------" + param + "-------------");
}

const arrays = [
    "concat", "every", "filter", "forEach", "join", "indexOf", "lastIndexOf", 
    "map","reverse", " slice", "some", "sort", "toString", "valueOf"
];

printScreen(arrays);

// CONCAT
// It need of three elements, array + junction variable + array
printTitle("Concat Method");
const zero = 0;
const poristiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];

let numbers = negativeNumbers.concat(zero, poristiveNumbers);
printScreen(numbers);


// ITERATION FUNCTIONS

// Functions (ES5 - old)
// function isEven(param) {
//     console.log(param);
//     return param % 2 === 0 ? true : false;
// };

// Functions (ES6 - new?)
const isEven = param => param % 2 === 0;

let numbersMixed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let numbersPair = [2,2,2,2,2,2];
let numbersOdd  = [3,3,3,3,3];

// Every Method - if there is an error in the array, the result is false
printTitle("Every Method");
console.log(numbersMixed.every(isEven));
console.log(numbersPair.every(isEven));

// Some method - if there is an error in the array, the result is true
printTitle("Some method");
console.log(numbersMixed.some(isEven));
console.log(numbersOdd.some(isEven));

// forEach Method - function isEven is not used.
printTitle("forEach Method");
numbersMixed.forEach(
    param => console.log(`${param} is pair: ${param % 2 === 0}`)
);

// Map Method - add the result array to a variable
printTitle("Map Method");
const myMap = numbersMixed.map(isEven);
console.log(myMap);

// Filter Method - filter the results array for a variable
printTitle("Filter Method");
const evenNumbers = numbersMixed.filter(isEven);
console.log(evenNumbers);

// Reduce Method - can use conditions as a result of the array to a variable
printTitle("Reduce Method");
console.log(
    numbersMixed.reduce((previous, current) => previous + current)
);

// for...of
printTitle("for...of");
for (const index of numbersMixed) {
    console.log(`${index} is: ${index % 2 === 0 ? "pair" : "odd"}`);
};

// Object @@iterator
printTitle("Object @@iterator");
let iterator = numbersMixed[Symbol.iterator]();
console.log(iterator.next().value);
for (const index of iterator) {
    console.log(index);
};
console.log(iterator.next().value);

// Entries Method
printTitle("Entries Method");
let aEntries = numbersMixed.entries();
console.log(aEntries.next().value);
for (const index of aEntries) {
    console.log(index)
};
console.log(aEntries.next().value);

// Keys Method
printTitle("Keys Method");
let aKeys = numbersMixed.keys();
console.log(aKeys.next());
for (const index of aKeys) {
    console.log(index)
};
console.log(aKeys.next());

// Values Method
printTitle("Values Method");
const aValues = numbersMixed.values();
console.log(aValues.next());
for (const index of aValues) {
    console.log(index)
};
console.log(aValues.next());

// Array.from Method
printTitle("Array.from Method");
let newNumbers = Array.from(numbersMixed);
printScreen(newNumbers);

let evens = Array.from(numbersMixed, index => (index % 2 == 0));
printScreen(evens);

// Array.of Method
printTitle("Array.of Method");
let newArray = Array.of(1);
printScreen(newArray);

let copieArray = Array.of(1,2,3,4,5);
printScreen(copieArray);

let arrayCopie = Array.of(...numbersMixed);
printScreen(arrayCopie);

// Fill Method
printTitle("Fill Method");
let numberCopy = Array.of(1,2,3,4,5);
printScreen(numberCopy);

numberCopy.fill(0); // Initialize everything with 0
printScreen(numberCopy);

numberCopy.fill(2,1);
printScreen(numberCopy);

numberCopy.fill(1,3,5);
printScreen(numberCopy);

let ones = Array(6).fill(1);
console.log(ones);

// CopyWithin Method
printTitle("CopyWithin Method");
let copyArray = [1, 2, 3, 4, 5, 6];
printScreen(copyArray);

copyArray.copyWithin(0, 3);
printScreen(copyArray);

copyArray = [1, 2, 3, 4, 5, 6];
printScreen(copyArray);
copyArray.copyWithin(1, 3, 5);
printScreen(copyArray);

/**
 * Elements ordering
 * Sort, Reverse
 */

// Reserve Method
printTitle("Reserve Method");
let numberRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
printScreen(numberRandom);

numberRandom.reverse();
printScreen(numberRandom);

// Sort Method
printTitle("Sort Method");
numberRandom.sort();
printScreen(numberRandom);

numberRandom.sort((a, b) => a - b);
printScreen(numberRandom);

numberRandom = [12, 9, 3, 10, 5, -6, 7, 8, 1, 4, 11, 2];
printScreen(numberRandom);
numberRandom.sort((prev, next) => prev - next);
printScreen(numberRandom);

function compare(previus, next) {
    if (previus < next) {
        return -1
    } else if ( previus > next) {
        return 1
    } else {
        return 0
    }
};
numberRandom = [12, 9, 3, 10, 5, -6, 7, 8, 1, 4, 11, 2];
printScreen(numberRandom);
numberRandom.sort(compare);
printScreen(numberRandom);

// Custom sorting
printTitle("Custom sorting");
function printArraysObjection(arrayObjecte) {
    for (const iterator of arrayObjecte) {
        console.log(`Name: ${iterator.name}, Age: ${iterator.age}`);
    };
};

const friends = [
    { name: "John", age: 30 },
    { name: "Sebastian", age: 20 },
    { name: "Chris", age: 25 }, // comma at the end: ES2017
];
// console.log(friends);
printArraysObjection(friends);

function comparePerson(prev, next) {
    if (prev.age < next.age) {
        return -1;
    } else if (prev.age > next.age) {
        return 1;
    } else {
        return 0;
    }
};
console.log(" ");

friends.sort(comparePerson);

printArraysObjection(friends);

//Sorting Strings
printTitle("Sorting Strings");

let names = ["Ana", "ana", "john", "John"];
console.log(names.sort());

// Tabel ASCII ( A=65, J=74, a=97, j=106 )
console.log(
    names.sort((prev, next) => {
        if (prev < next) {
            return -1;
        } else if (prev > next) {
            return 1;
        } else {
            return 0;
        };
    })
);

console.log(names.sort((prev, next) => prev.localeCompare(next)));

const names2 = ["Maève", "Maeve", "Maéve"];
console.log(names2.sort((prev, next) => prev.localeCompare(next)));

friends.sort((prev, next) => prev.name.localeCompare(next.name));

printArraysObjection(friends);

// Search
printTitle("Search");

printScreen(numbersMixed);

console.log(numbersMixed.indexOf(10));
console.log(numbersMixed.indexOf(100));

numbersMixed.push(10);

printScreen(numbersMixed);

console.log(numbersMixed.lastIndexOf(10));
console.log(numbersMixed.lastIndexOf(100));

// Find and FindIndex methods
printTitle("Find and FindIndex");

printScreen(numbersMixed);

function multipleOf13(element) {
    return (element % 13 == 0);
};

console.log(numbersMixed.find(multipleOf13));
console.log(numbersMixed.findIndex(multipleOf13));

numbersMixed.splice(12, 1);
printScreen(numbersMixed);

console.log(numbersMixed.find(multipleOf13));
console.log(numbersMixed.findIndex(multipleOf13));



