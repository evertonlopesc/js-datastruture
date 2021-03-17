function verifyMonthTrue(params) {
    if (params === 5) {
        console.log("Month is equal to 1.");
    }
}

function verifyMonthFalse(params) {
    if (params === 0) {
        console.log("Month is equal to 1.");
    } else {
        console.log("Month is not equal to 1, the value of Month is " + params);
    }
}

function verifyMonthSimple(params) {
    params === 5 ? console.log(true) : console.log(false);
}

function verifyNumberComposite(params) {
    if (params === 1) {
        console.log("January");
    } else if (params === 2) {
        console.log("February");
    } else if (params === 3) {
        console.log("March");
    } else {
        console.log("Month is not January, February or March");
    }
}

var month = 5;

verifyMonthTrue(month);
verifyMonthFalse(month);
verifyMonthSimple(month);
verifyNumberComposite(month);
