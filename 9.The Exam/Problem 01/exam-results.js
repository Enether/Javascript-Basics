/*
* You are given N lines with exam results in the following format:
 [Student] [Course] [Exam points] [Course bonuses]
 Your task is to calculate the course points and the gradе (3.00 ... 6.00) for each student.
  Exam points are 80% per course point. Example: 400 exam points = 80 course points, 200 = 40. If exam points are less than 100 the result is failed.

 After you calculate the exam points to course points, you must add the bonus points. Now calculate the grade.
  Minimum points for 6.00 are 80, so the formula is: ((course point / needed points for 6.00(80points)) * 4) + 2.

 * */
//100/100
// all our code is in this functiondue to the way the automated testing over at judge.softuni.bg works
function solve(input){
    var EXAM_POINTS_TO_COURSE_POINTS_CONVERSION_RATE = 5;
    var POINTS_NEEDED_FOR_ACE = 80;
    var wantedAverage = '';
    var averages = {};  // key: exam subject, value: array of scores

    for(var i = 0; i < input.length; i++){
        if(i == input.length-1){
            wantedAverage = input[i].match(/\s*(.+)\s*/)[1];
        }
        else{
            var personResultsInfo = input[i].trim().split(/\s+/g);
            var personName = personResultsInfo[0];
            var examName = personResultsInfo[1];
            var examScore = Number(personResultsInfo[2]);
            var bonusCoursePoints = Number(personResultsInfo[3]);

            // prints the person's results
            handlePersonResults(personName, examName, examScore, bonusCoursePoints);

            if(averages[examName]){
                // add the score to the array
                averages[examName].push(examScore);
            }
            else{
                // create an array and add the examScore in it
                averages[examName] = [examScore];
            }
        }
    }
    handleAverage(averages, wantedAverage);

    function handleAverage(averages, wantedAverage){
        var average = 0;
        if(averages[wantedAverage]){
            var count = averages[wantedAverage].length;
            var sum = 0;
            averages[wantedAverage].map(function (el) {
                sum += el;
            });
            average = parseFloat((sum/count).toFixed(2));
        }
        else{
           average = 0;
        }
        console.log('"' + wantedAverage + '" average points -> ' + average);
    }

    function handlePersonResults(name, exam, score, bonus) {
        if(score < 100){
            // failed
            console.log(name + ' failed at ' + '"' + exam + '"');
        }
        else{
            var coursePoints = (score/EXAM_POINTS_TO_COURSE_POINTS_CONVERSION_RATE) + bonus;
            // round to two digits
            var coursePoints = parseFloat(coursePoints.toFixed(2));

            var grade = ((coursePoints/POINTS_NEEDED_FOR_ACE) * 4) + 2;
            if(grade > 6){
                grade = 6.00;
            }
            var grade = grade.toFixed(2);

            console.log(name + ': Exam - "' + exam + '"; Points - ' + coursePoints + '; Grade - ' + grade);
        }
    }
}
// solve(['Shopa    JavaHah   300  3.3', 'JavaHah']);
solve(['  EDUU    JS-Basics                317          15',
   'RoYaL        HTML5        121         10',
   'ApovBerger      OOP   0    10',
   'Stamat OOP   190 10',
   'MINKA OOP   230 10',
    '   OOP']);