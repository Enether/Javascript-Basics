/*
 Write a JavaScript function to extract all hyperlinks (<href=…>) from given text.
 The text comes as array of strings, passed as parameter to your function.
 Print at the console the href values in the text.
 The input text is standard HTML code. It may hold many tags and can be formatted in many different forms
 (with or without whitespace). The <a> elements may have many attributes, not only href. You should extract
  only the values of the href attributes of all <a> elements.

* */

// all the code is written in this solution due to the way the automated testing over at judge.softuni.bg works.
// 50/100 :(
function solution(args) {
    // don't ask how long it took to figure out this pattern, HTML shouldn't be parsed with regex anyway...
    var input = readInput(args);
    var pattern = /(?:<a[^>]*?\s*[^>]*?)href\s*?=\s*("|\s|>|'|)(.+?)\1(\s|>).+?(<\/a>|>)/g;
    var match;

    while(match = pattern.exec(input)){
        var hrefLink = match[2];
        console.log(hrefLink);
    }

    function readInput(input) {
        /* this function reads all the lines of text from the input (which is given as an array) and concatenates
        * them*/
        var readInput = '';

        for(var index in input){
            readInput += input[index] + '\n';
        }

        return readInput;
    }
}