/*
 Write a JavaScript function that accepts a number variable to convert from km/h to knots (knot is a maritime unit

 measuring speed). The result should be printed on the console, rounded up to the second sign after the decimal

 point. Run the program through Node.js.
* */
var KNOT_CONVERSION_RATE = 1.852

console.log(convertKmhToKnot(20))
console.log()
console.log(convertKmhToKnot(112))
console.log()
console.log(convertKmhToKnot(400))

function convertKmhToKnot(kmh){
    // converts the Kilometers per Hour to Knots
    return (kmh/KNOT_CONVERSION_RATE).toFixed(2)
}