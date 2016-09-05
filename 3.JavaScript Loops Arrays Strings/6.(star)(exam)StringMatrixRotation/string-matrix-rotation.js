/*
 You are given a sequence of text lines. Assume these text lines form a matrix of characters (pad the missing positions with spaces to build a rectangular matrix).
  Write a program to rotate the matrix by 90, 180, 270, 360, … degrees. Print the result at the console as sequence of strings. 
* */

// everything is written in this function due to the way the automated testing works over at judge.softuni.bg
// 100/100 !
function solve(args){
    var rotateStr = args[0];
    // get the degrees we need to rotate at
    var degrees = parseInt(rotateStr.substring(7, rotateStr.length-1));
    var degrees = degrees % 360; // ex 810 % 360 = 90, meaning we need to rotate in 90 degrees only :)

    var matrix = [];
    // fill the matrix
    for(var i = 1; i < args.length; i++){
        matrix.push(args[i].split(''));
    }

    switch(degrees){
        case 0:
            rotate0(matrix);
            break;
        case 90:
            rotate90(matrix);
            break;
        case 180:
            rotate180(matrix);
            break;
        case 270:
            rotate270(matrix);
            break;
    }

    function rotate0(matrix) {
        for(var row = 0; row < matrix.length; row++){
            tempStr = '';
            for(var col = 0; col < matrix[row].length; col++){
                tempStr += matrix[row][col];
            }
            console.log(tempStr);
        }
    }

    function rotate90(matrix){
        // create a copy of the matrix so we're not sorting it as a reference
        var matrixCopy = JSON.parse(JSON.stringify(matrix));
        // this expression gets us the longest array in our matrix
        var longest = matrixCopy.sort(function (a, b) { return b.length - a.length; })[0];

        for(var row = 0; row < longest.length; row++){
            var tempStr = '';
            for(var col = matrix.length-1; col >= 0; col--){
                if(row < matrix[col].length){
                    // if such a row and col exists
                    tempStr += matrix[col][row];
                }
                else{
                    tempStr += ' ';
                }
            }
            console.log(tempStr);
        }
    }
    
    function rotate180(matrix){
        // create a copy of the matrix so we're not sorting it as a reference
        var matrixCopy = JSON.parse(JSON.stringify(matrix));
        // this expression gets us the longest array in our matrix
        var longest = matrixCopy.sort(function (a, b) { return b.length - a.length; })[0];
        
        // traverse the matrix in reverse
        for(var row = matrix.length-1; row >= 0; row--){
            tempStr = ''
            for(var col = longest.length-1; col >= 0; col--){
                // using our longest array, start building strings and adding white spaces where the other arrays do not
                // have characters
                if(matrix[row].length > col){
                    tempStr += matrix[row][col];
                }
                else{
                    tempStr += ' ';
                }
            }
            console.log(tempStr);
        }
    }

    function rotate270(matrix) {
        // create a copy of the matrix so we're not sorting it as a reference
        var matrixCopy = JSON.parse(JSON.stringify(matrix));
        // this expression gets us the longest array in our matrix
        var longest = matrixCopy.sort(function (a, b) { return b.length - a.length; })[0];

        for(var row = longest.length - 1; row >= 0; row--){
            var tempStr = '';
            for(var col = 0; col < matrix.length; col++){
                if(row < matrix[col].length) {
                    tempStr += matrix[col][row];
                }
                else{
                    tempStr += ' ';
                }
            }
            console.log(tempStr);
        }
    }
}
