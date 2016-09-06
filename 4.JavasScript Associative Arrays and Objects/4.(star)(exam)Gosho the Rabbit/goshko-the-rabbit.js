/*
 The input is passed to the first JavaScript function found in your code as array of strings.
 The first string of the input is representing a set of directions describing the path Goshko moved on. It will be in the format:
 'direction, direction, direction, direction,…'
 The next n strings from the input represent a rectangular matrix describing the garden.
 Each cell of the matrix will contain a string representing the vegetables and the other items that are in this cell.
  Every matrix cell is separated from the others by a ', ' (a comma and an interval).
  The vegetables will be in following format: carrots – {!}, cabbage – {*}, lettuce – {&}, turnip – {#}.
  All other strings are non-vegetable items (example: 'askjd{!}mnci{*}aiwj!nw#id').
 The matrix input is in the following format:
 'matrixCell, matrixCell, matrixCell, matrixCell,…'
 See the examples below for more clarity.
 Goshko is jumping one cell at a time depending on the direction.
  At the beginning he is at the first row and the first column of the matrix.
  The garden is surrounded by walls so if a direction leads Goshko out of the garden’s bounds
  he hits the wall and remains at the same position. You must count how many times Goshko hits the walls.
   After Goshko jumps in a cell he eats all the vegetables there and leaves @ at their places.
   If Goshko stays at the same position because he hits a wall he doesn’t eat from the same cell again.
   The input data will always be valid and in the format described. There is no need to check it explicitly.
 right, up, up, down



* */
// solve(["right, up, up, down", "asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj",
// "tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip", "poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne"]);
// solve(["up, right, left, down", "as{!}xnk"]);
// everything is in this function due to the way the automated testing works over at judge.softuni.bg
// 100/100 !

function solve(args){
    var directions = args[0].split(", ");
    var matrix = [];
    // fill the matrix
    for(var row = 1; row < args.length; row++){
        matrix.push(args[row].split(", "));
    }

    // our coordinates
    var row = 0,
        col = 0;
    var cellsVisited = [] // holds the strings of the cells we've visited
    var results = {"&":0, "*":0, "#":0, "!":0, "wall hits":0};

    for(idx in directions){
        direction = directions[idx];
        var vegs = []; // this holds the vegetables we've eaten in this move

        switch(direction){
            case 'left':
                var hitWall = checkWallHit(row, col-1, matrix);
                if(!hitWall) {
                    col -= 1;
                    move(row, col, matrix, vegs, results, cellsVisited);
                }
                break;
            case 'right':
                var hitWall = checkWallHit(row, col+1, matrix);
                if(!hitWall) {
                    col += 1;
                    move(row, col, matrix, vegs, results, cellsVisited);
                }
                break;
            case 'up':
                var hitWall = checkWallHit(row - 1, col, matrix);
                if(!hitWall) {
                    row -= 1;
                    move(row, col, matrix, vegs, results, cellsVisited);
                }
                break;
            case 'down':
                var hitWall = checkWallHit(row + 1, col, matrix);
                if(!hitWall) {
                    row += 1;
                    move(row, col, matrix, vegs, results, cellsVisited);
                }
                break;
        }
        
        if(hitWall)
            results["wall hits"]++;
    }

    // print the results
    console.log('{"&":' + results['&'] + ',"*":' + results['*']
        + ',"#":' + results['#'] + ',"!":' + results['!']
        + ',"wall hits":' + results['wall hits'] + '}');

    // print the cells we've visited, if we haven't visited any: print no
    if(cellsVisited.length > 0)
        console.log(cellsVisited.join("|"));
    else{
        console.log("no");
    }

    function move(row, col, matrix, vegs, results, cellsVisited) {
        // we don't return anything because the things we're modifying are passed by reference
        vegs = eatVegetables(row, col, matrix);
        updateVegetables(vegs, results);
        cellsVisited.push(matrix[row][col]);
    }

    function updateVegetables(vegs, results) {
        /*
        vegs is an array holding strings of which vegetables we've eaten, the strings are the same as the keys in our
        results object.
        this function makes use of the fact that Objects are passed by reference and directly updates the amount
        we've eaten*/
        if(vegs.length > 0){
            for(var i = 0; i < vegs.length; i++){
                results[vegs[i]]++;
            }
        }
    }

    function eatVegetables(x, y, matrix) {
        /* checks if there is a vegetable and returns an array with strings associated with the vegetables if there are any,
        * otherwise, returns an empty array*/
        // we'll do this without regex, just because we can
        vegetables = []; // this holds the vegetables we've eaten, ex: ['!', '#', '!']
        cell = matrix[x][y];

        // search for every symbol and replace in the string where appropriate. also add them to the array
        var carrotSymbol = '{!}'
        cell = searchForSymbol(carrotSymbol, cell, vegetables);

        var cabbageSymbol = '{*}';
        cell = searchForSymbol(cabbageSymbol, cell, vegetables);

        var lettuceSymbol = '{&}';
        cell = searchForSymbol(lettuceSymbol, cell, vegetables);

        var turnipSymbol = '{#}';
        cell = searchForSymbol(turnipSymbol, cell, vegetables);

        matrix[x][y] = cell; // update the cell with the eaten vegetables
        return vegetables;
    }

    function searchForSymbol(symbol, cellString, vegetables) {
        /* this function searches for a symbol in a string, if it finds it, it adds the symbol without the curly
        * brackets into the vegetables array and replaces the symbol in the string with "@" because it's eaten.
        * it does so for every symbol
        * We do not return the array because it automatically gets modified by reference*/
        var eatenSymbol = '@';
        var symbolWithoutBrackets = symbol[1];
        var symbolIndex = cellString.indexOf(symbol);

        while(symbolIndex >= 0){
            cellString = cellString.replace(symbol, eatenSymbol);
            vegetables.push(symbolWithoutBrackets);
            symbolIndex = cellString.indexOf(symbol);
        }

        return cellString;
    }
    
    function checkWallHit(x, y, matrix) {
        // checks if we've hit a wall
        if(x >= matrix.length || x < 0
        || y >= matrix[x].length || y < 0)
            return true;
        
        return false;
    }
}