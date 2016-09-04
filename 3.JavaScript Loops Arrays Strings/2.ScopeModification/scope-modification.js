/*
* You are given an array of numbers. Your tasks are to first filter out all valid exam scores (between 0 and 400)
* and afterwards scale them downwards by removing 20% out of each score. Finally you should print out the changed
* scores sorted in ascending order.
* */
input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
// output should be [ 18.4, 53.6, 96, 136, 160, 169.6, 280 ]
modifyScope(input)

function modifyScope(arr){
    var valid_numbers = [];

    for(var index in arr){
        var num = arr[index]
        if(num >= 0 && num <= 400){
            // remove 20%
            num -= (num * 0.2);
            valid_numbers.push(num);
        }
    }

    valid_numbers.sort(function(a, b){return a-b});
    console.log(valid_numbers);
}