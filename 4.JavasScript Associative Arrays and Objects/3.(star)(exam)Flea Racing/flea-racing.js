/*
One relatively lazy day at the office, your boss decided to bring his pet dog with him to work.
Unfortunately it had been infested with fleas that started to jump all over the office. Our creative programmers
decided to catch them and race them for entertainment. Each flea would be examined carefully and its jumping distance
calculated. After that a name would be assigned to it. Programmers would pick the length of the track and align all
fleas on the start line. They would also choose the maximum allowed number of jumps. Alternating, each flea would jump
the distance it can until the maximum jumps have passed for each flea. If no flea has passed the finish line until
this moment the winner will be deemed the one that has gotten the furthest. If multiple fleas have gotten to the same position,
the winner will be the flea (amongst those that have jumped furthest) that has jumped last (There must be only 1 winner, right?).
To compensate for that order of jumping problem programmers decided that if at any point during the race a flea
jumps exactly on the finish line or behind it, it would be deemed winner and all other fleas denied the chance to
jump any more (even if the next flea would have jumped further behind the finish line). Because you are the smartest
and most ambitious programmer in your team, you are assigned the task of creating the system for simulating the races.
The system should print the final state of the track which holds the current position of each flea. If any flea has
jumped behind the finished line and is deemed winner it should be displayed at the last possible position of the track.
Each flea is represented on the track by the capitalized version of the first letter in its name.
Don’t forget these are programmer fleas, so their starting position is 0 not 1. Progress is marked in red in the first example.
* */

// all the code is in this function due to the way the automated testing works over at judge.softuni.bg
// 100/100!
//solve([10, 19, "angel, 9", "boris, 10", "Georgi, 3", "Dimitar, 7"]);
//solve([3, 5, "cura, 1", "Pepi, 1", "UlTraFlea, 1", "BOIKO, 1"]);
//solve([1, 1, "angel, 1"]);
function solve(args){
    var allowedJumps = parseInt(args[0]);
    var trackLength = parseInt(args[1]);
    var fleas = [];
    // fill the fleas array
    for(var i = 2; i < args.length; i++){
        // flea info comes like this - "Fleaname, JumpDistance"
        // split the flea information into two pieces
        var fleaInfo = args[i].split(", ");

        var fleaName = fleaInfo[0];
        var fleaJumpDistance = fleaInfo[1];
        var fleaObj = {};
        fleaObj["name"] = fleaName;
        fleaObj["jumpDistance"] = parseInt(fleaJumpDistance);
        fleaObj["position"] = 0; // this will track how far into the track the flea is
        fleas.push(fleaObj);
    }

    var raceHasFinished = false;
    var winner = '';
    // go through all the allowed jumps
    for(var i = 0; i < allowedJumps; i++){
        // go through the fleas and have each one jump
        for(var fleaIndex = 0; fleaIndex < fleas.length; fleaIndex++){
            var fleaObj = fleas[fleaIndex];
            // jump
            fleaObj.position += fleaObj.jumpDistance;
            // check if we haven't won the race
            if(fleaObj.position >= trackLength-1){
                raceHasFinished = true;
                winner = fleaObj.name;
                break;
            }
        }
        if(raceHasFinished)
            break;
    }
    if(!winner){
        winner = evaluateWinner(fleas);
    }
    printTrack(fleas, trackLength);
    console.log("Winner: " + winner);

    function evaluateWinner(fleas) {
        /* we use this function if no flea has finished the race or if no flea has finished the race and some are on the same position,
        * in which case, the winner is the flea that has jumped the last(highest up in the array).*/
        var maxDist = 0;
        var winner;
        for(var i = 0; i < fleas.length; i++){
            var flea = fleas[i];
            if(flea.position >= maxDist){
                maxDist = flea.position;
                winner = flea.name;
            }
        }
        return winner;
    }

    function printTrack(fleas, trackLength) {
        /*we visualize the track and all the flea's positions*/
        console.log("#".repeat(trackLength));
        console.log("#".repeat(trackLength));

        for(var i = 0; i < fleas.length; i++){
            var flea = fleas[i];
            var fleaInitial = flea.name[0].toUpperCase();
            var fleaPosition = flea.position;
            if(fleaPosition >= trackLength)
                fleaPosition = trackLength-1;
            var track =''
            for(var trackIndex = 0; trackIndex < trackLength; trackIndex++){
                if(trackIndex == fleaPosition)
                    track += fleaInitial;
                else
                    track += '.';
            }
            console.log(track);
        }

        console.log("#".repeat(trackLength));
        console.log("#".repeat(trackLength));
    }
}