/*
 A "double rakiya number" is an integer that contains a sequence of 2 digits twice (without overlapping).
 For example "23156312" is a "double rakiya number" because it contains "31" twice.
 Other examples of "double rakiya numbers" are: 1212, 3333, 203103, 5210217, 21212121, and 55555.
 Examples of non-"double rakiya numbers" are: 333, 5, 111222, 1234567131, and 12213114.
 Write a JavaScript function that takes as input two numbers (start and end) and prints at the console a HTML list
 holding all numbers in the range [start…end], along with a link to view details about all "double-rakiya numbers" in that range.
*/
// all the code is in this function due to the way the automated testing over at www.judge.softuni.bg works
// 100/100!
function solve(args){
    var start = parseInt(args[0]);
    var end = parseInt(args[1]);

    console.log("<ul>");
    for(var i = start; i <= end; i++){
        // if the number is a DRN, build the link, otherwise have it be an empty string
        var link = checkIfNumberIsDRN(i) ? '<a href="view.php?id=' + i +'>View</a>' : '';
        // consequently, if we've built the link(have a DRN number), have the span class be 'rakiya', otherwise 'num'
        var spanClass = link ? 'rakiya' : 'num';
        console.log("<li><span class='" + spanClass + "'>" + i + "</span>" + link + "</li>");
    }
    console.log("</ul>");


    function checkIfNumberIsDRN(num) {
        // checks if the number is a double rakia number
        // Splits the string into all possible double consecutive characters
        // Checks if those same characters are found later in the string
        var numStr = String(num)
        for(var i = 0; i < numStr.length - 2; i++){
            doubleRakiya = numStr[i] + numStr[i+1];

            lastIndex = numStr.lastIndexOf(doubleRakiya);

            if(lastIndex > i+1){ // i+1 because we don't want overlapping numbers
                return true;
            }
        }
        return false;
    }
}