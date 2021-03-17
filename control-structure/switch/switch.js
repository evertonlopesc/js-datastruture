// Switch - do you can work with booleans, Objects, strings and numbers.

let month = 5;

switch (month) {
    case false:
        console.log("January");
        break;
    case false:
        console.log("February");
        break;
    default:
        console.log("Month is not January, February or March");
        break;

}

let word = "Birthday"

switch (word) {
    case "Any day":
        console.log("January");
        break;
    case "Birthday":
        console.log("March");
        break;
    default:
        console.log("Month is not January, February or March");
        break;

}

let bool = true

switch (bool) {
    case true:
        console.log("January");
        break;
    case false:
        console.log("February");
        break;
    default:
        console.log("Month is not January, February or March");
        break;

}

let objct = { name: "Everton", birthday: "March" };

switch (objct.birthday) {
    case "January":
        console.log("January");
        break;
    case "March":
        console.log("March");
        break;
    default:
        console.log("Month is not January, February or March");
        break;

}
