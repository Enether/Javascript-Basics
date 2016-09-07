/*
 Write a JavaScript function clone(obj) that accepts as parameter an object of reference type.
 The function should return a deep copy of the object. Write a second function compareObjects(obj, objCopy)
 that compare the two objects by reference and print on the console the output given below.
 Read in Internet about "deep copy" of an object and how to create it.
* */

var a = {name: 'Pesho', age: 21}
var b = clone(a); // a deep copy
// expected output: a == b --> false
compareObjects(a, b);

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
// expected output: a == b --> true
compareObjects(a, b);


function clone(a) {
    /* returns a deep copy of an object, using the most efficient way - JSON.parse*/
    return JSON.parse(JSON.stringify(a));
}

function compareObjects(a, b){
    console.log("a == b --> " + (a == b));
}

