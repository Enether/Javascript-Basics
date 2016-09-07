/*
 You’re be given a solution for a sample exam problem from Programming Basics May 2014 – Problem 03.

 Write a JavaScript function newString(symbol, count) that accepts a character and count and returns a string
 consisting of the character repeated ‘count’ times. (Similar to the string(char c, int count) overloaded constructor in C#.
 After defining the function, replace any repeating code in the sample solution in order to avoid repetition and make it more maintainable.

* */

function solve(input){
    var n = Number(input[0]),
        stars = n,
        dots = 0,
        i, j, k,
        output = "";
    for (i = 0; i < n / 2; i++) {

        output += newString('.', dots);
        output += newString('*', stars);
        output += newString('.', dots);

        output += "\n";
        stars -= 2;
        dots++;
    }
    dots--;
    stars += 2;
    for (i = 0; i < n / 2 - 1; i++) {
        dots--;
        stars += 2;

        output += newString('.', dots);
        output += newString('*', stars);
        output += newString('.', dots);

        output += "\n"
    }
    return output;

    function newString(character, count) {
        return character.repeat(count);
    }
}
console.log(solve(['7']));