
// 100/100 !
// all our code is in the function below due to the way the automated testing works over at judge.softuni.bg
function solve(input) {
    var allTasks = {};

    input.forEach(function (el) {
        var lineInfo = el.split(' & ');
        var taskName = lineInfo[0];
        var taskType = lineInfo[1];
        var taskNumber = lineInfo[2];
        var taskScore = Number(lineInfo[3]);
        var linesOfCode = Number(lineInfo[4]);

        var mainTask = "Task " + taskNumber;
        var subTask = {name: taskName, type: taskType};
        if(allTasks[mainTask]){
            // if we have such a task
            allTasks[mainTask].tasks.push(subTask);
            allTasks[mainTask].average += taskScore;
            allTasks[mainTask].lines += linesOfCode;
        }
        else{
            allTasks[mainTask] = {tasks: [subTask], average: taskScore, lines: linesOfCode};
        }
    })

    
    for(var key in allTasks){
        // calculate averages
        allTasks[key].average /= allTasks[key].tasks.length;
        allTasks[key].average = parseFloat(allTasks[key].average.toFixed(2));
        
        // sort their arrays
        allTasks[key].tasks.sort(function (a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        })
    }
    // get the sorted keys of the object
    var keysSorted = Object.keys(allTasks).sort(function(a,b){if(allTasks[a].average !== allTasks[b].average){
        return allTasks[a].average < allTasks[b].average;
    }
    else{
        return allTasks[a].lines > allTasks[b].lines;
    }});

    var newAllTasks = {};
    for(var i in keysSorted){
        key = keysSorted[i]
        newAllTasks[key] = allTasks[key];
    }

    console.log(JSON.stringify(newAllTasks));
}
solve([
'Array Matcher & strings & 4 & 100 & 38',
'Magic Wand & draw & 3 & 100 & 15',
'Dream Item & loops & 2 & 88 & 80',
'Knight Path & bits & 5 & 100 & 65',
'Basket Battle & conditionals & 2 & 100 & 120',
'Torrent Pirate & calculations & 1 & 100 & 20',
'Encrypted Matrix & nested loops & 4 & 90 & 52',
'Game of bits & bits & 5 &  100 & 18',
'Fit box in box & conditionals & 1 & 100 & 95',
'Disk & draw & 3 & 90 & 15',
'Poker Straight & nested loops & 4 & 40 & 57',
'Friend Bits & bits & 5 & 100 & 81'
]);