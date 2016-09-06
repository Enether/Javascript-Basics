/*
 Write a JavaScript function groupBy('criteria') that groups an array of people by age, first or last name.
 Create a Person constructor to add every person in the person array. The groupBy('criteria') function must
 return an object, with keys – the groups (age, firstName and lastName) and values – arrays with people in this group.
  Print on the console every entry of the returned object. Use function overloading (i.e. just one function).
 You may need to find how to use constructors
* */

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Johns", 57),
    new Person("Jon", "Skeet", 38)
];
console.log("Grouped by age:");
console.log(groupBy(people, 'age'));
console.log("Grouped by first name:");
console.log(groupBy(people, 'firstName'));
console.log("Grouped by last name:");
console.log(groupBy(people, 'lastName'));


function groupBy(arr, criteria){
    var group = {};

    for(var i = 0; i < arr.length; i++){
        var groupName = getGroupName(arr[i], criteria);
        var personName = arr[i].firstName + " " + arr[i].lastName + "(age " + arr[i].age + ")";

        if(!group[groupName]){
            group[groupName] = [];  // if it doesnt exist, create the array
        }

        group[groupName].push(personName);
    }

    return group;
}

function getGroupName(person, criteria) {
    groupName = "Group ";

    switch(criteria){
        case 'age':
            groupName += person.age;
            break;
        case 'firstName':
            groupName += person.firstName;
            break;
        case 'lastName':
            groupName += person.lastName;
            break;
    }

    return groupName;

}