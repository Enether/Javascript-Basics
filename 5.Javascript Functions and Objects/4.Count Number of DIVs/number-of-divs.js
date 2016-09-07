/*
 Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML fragment passed as string.
  Write a JS program countOfDivs.js that invokes your function and prints the output at the console.
* */

var input = '<!DOCTYPE html>\n' +
'<html>\n' +
'<head lang="en">\n' +
'   <meta charset="UTF-8">\n' +
'   <title>index</title>\n' +
'   <script src="/yourScript.js" defer></script>\n' +
'</head>\n' +
'<body>\n' +
'<div id="outerDiv">\n' +
'     <div\n' +
'class="first">\n' +
'    <div><div>hello</div></div>\n' +
'    </div>\n' +
'    <div>hi<div></div></div>\n' +
'    <div>I am a div</div>\n' +
'</div>\n' +
'</body>\n' +
'</html>';
// expected output: 7
console.log(countDivs(input));

function countDivs(html) {
    // counts the opening div statements through regex and returns the count of the matches.
    // if there aren't any matches, html.match returns null so we use a boolean operator ([] is truthy) to get an empty
    // array, whose length is 0 and return that we have found 0 divs
    return (html.match(/<div/g) || []).length;
}