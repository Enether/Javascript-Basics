/*
 Write a JavaScript function findYoungestPerson(array) that accepts as parameter an array of people, finds the
 youngest person that has a smartphone and returns his full name.
 Write a JS program youngestPerson.js to execute your function for the below examples and print the result at the console.
* */

// predefined array
var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);
// expected output: The youngest person is Vasil Kovachev

function findYoungestPerson(ppl){
    // finds the youngest person with a smartphone from an array with People objects

    // filter out the people who do not have smartphones
    people = people.filter(function (a) {
        return a.hasSmartphone;
    });
    // sort them so the youngest person is first in the array!
    people = people.sort(function (a, b) {
        return a.age > b.age;
    });

    if(people.length > 0){
        youngestPerson = people[0];
        youngestPersonFullName = youngestPerson.firstname + " " + youngestPerson.lastname;
        console.log("The youngest person is " + youngestPersonFullName);
    }
    else
        console.log("Nobody has a smartphone!")
}