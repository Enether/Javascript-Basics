/*
 Write a JavaScript function removeItem(value) that accept as parameter a number or string.
 The function should remove all elements with the given value from an array.
 Attach the function to the Array type. You may need to read about prototypes in JavaScript and how to attach methods to object types.
 You should return as a result the modified array. Write a sample program to demonstrate that your function works correctly for the examples below:
* */

// extending built-in types is bad practice, refrain from doing this!
Array.prototype.removeItem = function (item) {
    /* removes all instances of an item in the array */

    // iterate though the array
    for(index in this){
        // whenever we find an element that matches our item, remove it
        if(item === this[index]){
            this.splice(index, 1);
        }
    }

}

// test A
var inputA = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
inputA.removeItem(1);
// expected output: [2, 4, 3, 4, 111, 3, 2, '1']
console.log(inputA);

// test B
var inputB = ['hi', 'bye', 'hello' ];
inputB.removeItem('bye');
// expected output: ['hi', 'hello']
console.log(inputB);