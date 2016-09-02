/*
* Write a JavaScript function calcCircleArea(r) that takes as a parameter the radius of a rectangle and calculates and

 returns its area. Put the function in a file named circle-area.js. Write a HTML page circle-area.html that includes the

 script circle-area.js and calculates and prints in the page body the area of circles of size r=7, r=1.5 and r=20.
* */
var firstInput = 7;
var secondInput = 1.5;
var thirdInput = 20;

document.writeln("<pre>") // to have them display on new lines
document.writeln("r = " + firstInput + "; area = " + calcCircleArea(firstInput));
document.writeln("r = " + secondInput + "; area = " + calcCircleArea(secondInput));
document.writeln("r = " + thirdInput + "; area = " + calcCircleArea(thirdInput));


function calcCircleArea(r){
    return Math.PI * r * r
}