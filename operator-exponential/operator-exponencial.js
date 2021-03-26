import { circleArea, squareArea } from "./modules/calcArea.js"; // ES2015-ES6

let r = 2;
const area = 3.14 * r * r;

console.log(area);

let l = 2;
const areaTwo = 3.14 * Math.pow(l, 2);

console.log(areaTwo);

// ES2016

let rr = 2;
const areas = 3.14 * (r ** rr);

console.log(areas);

// Modules - ES2015-ES6
console.log(circleArea(2));
console.log(squareArea(2));