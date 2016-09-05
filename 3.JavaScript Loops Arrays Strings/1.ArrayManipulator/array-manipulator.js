/*
 You are given an array of objects. Your task is to write a JavaScript code that filters out the numbers of that array
 (removes all non-number objects). Then you should: 1. Find the Min number,
 2. Find the Max number, 3. Find the most frequent number. Finally you should print out the numbers you have found and
 the filtered array sorted in descending order.
* */

input = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]
// expected output is :Min number: 0
// Max number: 12
// Most frequent number: 2
//     [12, 9, 2, 2, 0]

filteredInput = input.filter(function(element){
    return typeof(element) == "number";
});
// use a spread operator on the min/max functions
var minNumber = Math.min(...filteredInput);
var maxNumber = Math.max(...filteredInput);
var mostFrequentNumber = getMostFrequentElement(filteredInput)

console.log("Min number: " + minNumber);
console.log("Max number: " + maxNumber);
console.log("Most frequent number: " + mostFrequentNumber);
console.log(filteredInput.sort(function(a,b){ return b - a}));

function getMostFrequentElement(array)
{
    var numberMap = {};  // using a map hlding the number of occurences
    var maxEl = array[0],
        maxCount = 1;

    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(numberMap[el] == null)
            numberMap[el] = 1;
        else
            numberMap[el]++;
        if(numberMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = numberMap[el];
        }
    }
    return maxEl;
}