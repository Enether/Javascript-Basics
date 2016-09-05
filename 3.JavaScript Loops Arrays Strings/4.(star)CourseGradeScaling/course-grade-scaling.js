/*
 You are given a JSON string containing an array of Students (Objects). Your task is to scale their scores upwards by
 increasing them with 10%. After that you should add a field that shows whether the student has passed or failed the exam
 (passed exam means 100 or more points at the exam).
  Finally you should filter out only the students that have passed the exam and print them out sorted alphabetically.
* */
students =    [
    {'name' : 'Пешо', 'score' : 91},
    {'name' : 'Лилия', 'score' : 290},
    {'name' : 'Алекс', 'score' : 343},
    {'name' : 'Габриела', 'score' : 400},
    {'name' : 'Жичка', 'score' : 70}];
// expected output:
//   [ { name: 'Алекс', score: 377.3, hasPassed: true },
//     { name: 'Габриела', score: 440, hasPassed: true },
//     { name: 'Лилия', score: 319, hasPassed: true },
//     { name: 'Пешо', score: 100.1, hasPassed: true } ]

// increase scores by 10%
students.map(function(stud){
    stud['score'] += stud['score'] * 0.1
});
// add the hasPassed field
students.forEach(function(stud){
    stud['hasPassed'] = true ? stud['score'] >= 100 : false;
});
// filter out the ones who've failed
students = students.filter(function(stud){
    return stud['hasPassed'];
});
// sort them alphabetically by name
students.sort(function(studA, studB){
    return studA['name'] > studB['name'];
});
console.log(students);