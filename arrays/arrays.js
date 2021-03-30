// Create and Initialize arrays

let daysOfWeek = new Array();
daysOfWeek = new Array(7);
daysOfWeek = new Array(
    "Monday", "Sunday", "Tuesdays", "Wednesday", "Thursday", "Friday", "Saturday"
);

for (let index = 0; index < daysOfWeek.length; index++) {
    console.log(daysOfWeek[index]);  
};

console.log();

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
    console.log(fibonacci[index]);    
};

// Add elements in Array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

numbers[numbers.length] = 10;
 console.log(numbers);

// Push
numbers.push(11);
 console.log(numbers);

// Insert first position of the Array

// My method
// function insertFirstIndex(arrayss, value) {
//     let newArray = [];
//     newArray[0] = value;
//     for (let index = 0; index < arrayss.length; index++) {
//         newArray[index + 1] = arrayss[index];
//     }
//     arrayss = newArray;
// 
//     return console.log(arrayss);
// };

// insertFirstIndex(numbers, (-1));

// Method Book Loiane
Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];   
        console.log(this[i]);
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1);
console.log(numbers);

numbers.unshift(-2);
console.log(numbers);