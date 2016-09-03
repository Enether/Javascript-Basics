/*
 Write a JavaScript function calcCylinderVol(arr) that accepts the following parameters: radius and the height of a

 straight circular cylinder. The function calculates the volume of the cylinder. Write JS program cylinderVol.js that

 calculates the volume of a few cylinders. The result should be printed on the console. Run the program through

 Node.js.
* */

console.log("Input 1: [2, 4]")
console.log("Output 1: " + calcCylinderVol([2, 4]))
console.log()

console.log("Input 2: [5, 8]")
console.log("Output 2: " + calcCylinderVol([5, 8]))
console.log()

console.log("Input 3: [12, 3]")
console.log("Output 3: " + calcCylinderVol([12, 3]))
console.log()

function calcCylinderVol(arr) {
    // arr is an array, holding the radius and height [1, 2]
    // 1 - radius
    // 2 - height
    var radius = arr[0]
    var height = arr[1]

    var volume = Math.PI * Math.pow(radius, 2) * height

    return volume.toFixed(3)
}