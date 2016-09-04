/*
 Write a JavaScript function calcSupply(age, maxAge, food, foodPerDay) that accepts the following parameters: your

 age (years), your maximum age (years), your favorite food name (e.g. &quot;chocolate&quot;), estimate amount of your
 favorite food per day (a number). The function calculates how many of the food you will eat for the rest of your life.

 Write JS program lifetimeSupplyCalc.js that calculates the amount of a few foods that you will eat. The result should

 be printed on the console. Run the program through Node.js. Note: we assume that there are no leap years.
* */

// first test
calcSupply(38, 118, 'chocolate', 0.5);
// expected output: 14600kg of chocolate would be enough until I am 118 years old.

// second test
calcSupply(20, 87, 'fruits', 2);
// expected output: 48910kg of fruits would be enough until I am 87 years old.

// third test
calcSupply(16, 102, 'nuts', 1.1);
// expected output: 34529kg of nuts would be enough until I am 102 years old.

function calcSupply(age, maxAge, food, foodPerDay) {
    var yearsLeft = maxAge - age;
    var daysLeft = 365 * yearsLeft;
    var foodSupplyNeeded = daysLeft * foodPerDay;

    console.log(foodSupplyNeeded + "kg of " + food + " would be enough until i am " + maxAge + " years old.")
}