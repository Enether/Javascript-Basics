function solve(input) {
    var matrix = [];
    var countRequired = 0;
    for(var i = 0; i < input.length; i++){
        if(i == input.length-1){
             // last one
            countRequired = Number(input[i]);
            if(isNaN(countRequired)){
                throw ExceptionInformation("EI |BOKLUK");
            }
        }
        else{
            // TODO: Maybe convert to number?
            matrix.push(input[i].split(/\s+/));
        }
    }

    for(var row = 0; row < matrix.length; row++){
        for(var col = 0; col < matrix[row].length; col++){
            // returns an array [row, col, boolean] if the boolean is true, there are enough consecutives and we
            // need to jump to the passed row/col
            var results = checkConsecutive(matrix, row, col, countRequired);
            if(results[2]){ // TODO: maybe parse booleans differently?
                // skip to the next coordinates, because overlapping is not allowed
                var newRow = parseInt(results[0]);
                var newCol = parseInt(results[1]);
                removeRangeFromMatrix(matrix, row, col, newRow, newCol);
                row = newRow;
                col = newCol;
            }
        }
    }

    function removeRangeFromMatrix(matrix, startRow, startCol, endRow, endCol) {
        // remove first row
        if(endRow !== startRow){
            // remove first row
            for(var col = startCol; col < matrix[startRow].length; col++){
                matrix[startRow][col] = null;
            }

            // remove middle rows, if for instance startRow is 2 and endRow is 4, this will remove the 3rd row
            if((endRow - startRow) > 1){
                for(var roww = startRow+1; roww < endRow; roww++){
                    for(var coll = 0; coll < matrix[roww].length; coll++){
                        matrix[roww][coll] = null;
                    }
                }
            }

            // remove last row
            for(col = 0; col <= endCol; col++){
                matrix[endRow][col] = null;
            }
        }
        else{
            for(var col = startCol; col <= endCol; col++){
                matrix[startRow][col] = null;
            }
        }



    }

    function checkConsecutive(matrix, row, col, reqCount){
        var consecutiveCount = 1;
        var equal = true;
        var originalRow = row,
            originalCol = col;

        while(equal){
            equal = false;
            if(col + 1 < matrix[row].length){
                // search on the same row
                if(matrix[row][col] == matrix[row][col+1]){
                    equal = true;
                    col += 1;
                    consecutiveCount += 1;
                }
            } else if(row + 1 < matrix.length){
                // there is a bottom row
                if(matrix[row][col] === matrix[row+1][0]){
                    equal = true;
                    row += 1;
                    col = 0;
                    consecutiveCount += 1;
                }
            }

            if(consecutiveCount === reqCount)
                break;
        }

        if(consecutiveCount === reqCount){
            return [row, col, true];
        } else{
            return [originalRow, originalCol, false];
        }

    }
    function printResults(matrix) {
        for(var row = 0; row < matrix.length; row++){
            var result = matrix[row].join(' ').trim();
            if(!result)
                console.log("(empty)")
            else
                console.log(result.split(/\s+/).join(' '));
        }
    }
    printResults(matrix);


}


solve([
    'a a 10',
    '10 b 22 c',
    'c 2 3 3 3 2',
    '2'
])