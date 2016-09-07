/*
 Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean.
 The function sorts all letters in the string in alphabetical order and returns the newly formed string.
 The sorting is ascending if the boolean is true otherwise the sorting is in descending order.
 Note: The sorting is case-insensitive but the output should use the same casing as the input!
* */
outputA = sortLetters("HelloWorld", true);
// expected output: deHllloorW
console.log(outputA);

outputB = sortLetters("HelloWorld", false);
// expected output: WroolllHed
console.log(outputB);

function sortLetters(word, ascending) {
    word = word.split('');  // convert to an array to be able to sort it

    if(ascending){
        word.sort(function (a, b) {
            return a.toLowerCase() > b.toLowerCase();
        });
    }
    else{
        word.sort(function (a, b){
            return a.toLowerCase() < b.toLowerCase();
        })
    }

    word = word.join(''); // convert the array to a proper string
    return word;
}