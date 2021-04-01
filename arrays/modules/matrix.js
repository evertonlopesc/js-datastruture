function matrixTwoDimensional() {
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
            for (let c = 0; c < myMatrix[l].length; c++) {   
                // Successfully?           
            };
        };

        console.table(myMatrix);
    };

    printMatrix(averangeTempDay);
}

function matrixMultDimensional() {
    console.log(" ");
    console.log("ARRAYS MULTIDIMENSIONAL");
    
    const matrixM3x3x3 = [];

    for (let linha = 0; linha < 3; linha++) {
        matrixM3x3x3[linha] = [];
        for (let coluna = 0; coluna < 3; coluna++) {
            matrixM3x3x3[linha][coluna] = [];
            for (let profundidade = 0; profundidade < 3; profundidade++) {
                matrixM3x3x3[linha][coluna][profundidade] = linha + coluna + profundidade;
            };
        };
    };

    function printMatrix3x3x3() {
        for (let linha = 0; linha < 3; linha++) {
            for (let coluna = 0; coluna < 3; coluna++) {
                for (let profundidade = 0; profundidade < 3; profundidade++) {
                    // Successfully?
                };
            };
        };

        console.table(matrixM3x3x3);
    };

    printMatrix3x3x3();
};

export default function initMatrix() {
    matrixTwoDimensional();

    matrixMultDimensional();
}
