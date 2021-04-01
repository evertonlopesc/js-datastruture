export default function initMatrixTwoDimensional() {
    console.log(" ");
    console.log("ARRAYS TWO-DIMENSIONAL");
    
    // Day 1
    let averangeTemp = [];
    averangeTemp[0] = [72, 75, 79, 79, 81, 81];
    averangeTemp[1] = [81, 79, 75, 75, 73, 72];

    // Other Day 1
    let averangeTempDay = [];
    averangeTempDay[0] = [];
    averangeTempDay[0][0] = 72;
    averangeTempDay[0][1] = 75;
    averangeTempDay[0][2] = 79;
    averangeTempDay[0][3] = 79;
    averangeTempDay[0][4] = 81;
    averangeTempDay[0][5] = 81;

    // Day 2
    averangeTempDay[1] = [];
    averangeTempDay[1][0] = 81;
    averangeTempDay[1][1] = 79;
    averangeTempDay[1][2] = 75;
    averangeTempDay[1][3] = 75;
    averangeTempDay[1][4] = 73;
    averangeTempDay[1][5] = 73;

    function printMatrix(myMatrix) {
        for (let l = 0; l < myMatrix.length; l++) {
            console.log(l + ": ");
            for (let c = 0; c < myMatrix[l].length; c++) {
                console.log(c +": " + myMatrix[l][c]);                
            };
        };
    };

    console.table(averangeTempDay);
    printMatrix(averangeTempDay);
}

export function initMatrixMultDimensional() {
    console.log(" ");
    console.log("ARRAYS TWO-DIMENSIONAL");
    
    // Day 1
    let averangeTemp = [];
    averangeTemp[0] = [72, 75, 79, 79, 81, 81];
    averangeTemp[1] = [81, 79, 75, 75, 73, 72];

    console.log(averangeTemp);

    // Other Day 1
    let averangeTempDay = [];
    averangeTempDay[0] = [];
    averangeTempDay[0][0] = 72;
    averangeTempDay[0][1] = 75;
    averangeTempDay[0][2] = 79;
    averangeTempDay[0][3] = 79;
    averangeTempDay[0][4] = 81;
    averangeTempDay[0][5] = 81;

    // Day 2
    averangeTempDay[1] = [];
    averangeTempDay[1][0] = 72;
    averangeTempDay[1][1] = 75;
    averangeTempDay[1][2] = 79;
    averangeTempDay[1][3] = 79;
    averangeTempDay[1][4] = 81;
    averangeTempDay[1][5] = 81;

    console.log(averangeTempDay);
}