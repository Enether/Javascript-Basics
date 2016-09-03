/*
 Write a script that enters the coefficients a, b and c of a quadratic equation a*x 2 + b*x + c = 0 and calculates and

 prints its real roots. Note that quadratic equations may have 0, 1 or 2 real roots.
* */
quadraticEquation(2, 5, -3)
console.log()
quadraticEquation(2, -4, 2)
console.log()
quadraticEquation(4, 2, 1)

function quadraticEquation(a, b, c){
    var x1 = ((b*-1) - Math.sqrt((b*b) - 4*a*c))/(2*a)
    var x2 = ((b*-1) + Math.sqrt((b*b) - 4*a*c))/(2*a)

    if (isNaN(x1) || isNaN(x2)){
        console.log("No real roots.")
    }
    else{
        if (x1 == x2){
            console.log("X = " + x1)
        }
        else{
            console.log("X1 = " + x1)
            console.log("X2 = " + x2)
        }
    }
}