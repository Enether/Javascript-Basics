/*
 You are given a sequence of text lines, holding small Latin letters. Your task is to reveal all triangles in the text by

 changing their letters with &#39;*&#39;. Triangles consist of equal letters in the form of triangle:
 Triangles can span different sizes: 2 lines, 3 lines, 4 lines, etc. Triangles can overlap (some letters can take part in

 several triangles).
* */
// all code is in this function due to the way the automated test system in judge.softuni.bg works
// 100/100 !
function solve(args) {
    // args is an array, each index holding a line of a string
    var matrix = fillMatrix(args);
    // parse with JSON otherwise we get a reference to matrix
    var matrixToPrint = JSON.parse(JSON.stringify(matrix)); // this is the matrix where we'll replace triangles with stars (*)

    for(var row = 0; row < matrix.length; row++){
        for(var col = 0; col < matrix[row].length; col++){
            var symbol = matrix[row][col];
            var bottomRow = row + 1;

            if(bottomRow < matrix.length && col < matrix[bottomRow].length){
                //if we're not at the last row and if we have a col underneath ours
                // start searching in the bottom row for a triangle
                if(matrix[bottomRow][col] == symbol){
                    // if there's a match, start searching laterally to see if we have a triangle
                    if(col != 0 && col != matrix[bottomRow].length - 1){  // check to see if we won't go over borders
                        if(matrix[bottomRow][col-1] == symbol && matrix[bottomRow][col+1] == symbol){
                            // we've found a 2 line triangle, modify the matrixToPrint
                            matrixToPrint = replaceTrianglesWithStars(matrixToPrint, row, col);
                        }
                    }
                }
            }
        }
    }
    printMatrix(matrixToPrint)

    function printMatrix(matrix) {
        for(var row = 0; row < matrix.length; row++){
            var strToPrint = '';
            for(var col=0; col < matrix[row].length; col++){
                strToPrint += matrix[row][col];
            }
            console.log(strToPrint)
        }
    }
    
    function replaceTrianglesWithStars(repMatrix, row, col) {
        /* row and col are the tip of the triangle
        *  so we paint [row,col], [row+1, col-1], [row+1,col], [row+1,col+1]
        * */
        repMatrix[row][col] = '*';
        repMatrix[row+1][col-1] = '*';
        repMatrix[row+1][col] = '*';
        repMatrix[row+1][col+1] = '*';

        return repMatrix;
    }
    
    function fillMatrix(input) {
        /* This function fills our matrix with the program's input*/
        var matrix = [];  // this is going to be our two-dimensional array

        input.forEach(function(entry){
            matrix.push(entry.split(''));
        });

        return matrix;
    }
}