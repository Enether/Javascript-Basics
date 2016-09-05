/*
 Write a JavaScript function replaceATag(str) that replaces in a HTML document given as string all the tags <a href="…">…</a>
 with the corresponding tags [URL=…]…/URL].
 Write a JS program aTagReplacer.js that invokes your function with the sample input data below and prints the output at the console.
* */
input = "Input\nOutput \n<ul> \n<li>\n<a href=http://softuni.bg>SoftUni</a> \n</li> \n</ul>";
input = input.replace("<a", "[URL").replace("</a>", "[/URL]");
console.log(input)