/*The SoftUni forum needs a new functionality – automatic generation of hypertext links to user profiles.
The user names will be denoted by a hashtag (‘#’) in front of them.
 You need to find all matching user names and transform them as anchor tags. The most appropriate language for this task is, of course, JavaScript.
 More information about the problem is in the SoftUniForum.docx file in the same directory as this script
 */
// all our code is in this function due to the way the automated testing over at judge.softuni.bg works
// 80/100
function solve(input) {
    var pattern = /(#[A-Za-z][A-Za-z0-9_@&*-]+[A-Za-z0-9])([\s:?.,!]|$)/g;
    var REPLACE_PLACEHOLDER = '[REPLACETHIS]'
    var bannedUsers = getBannedUsers(input)
    var text = buildText(input);

    // replace all the code tags with placeholders
    var match = /(<code>)(.|\s)*?(<\/code>)/g.exec(text)
    var replaced = []  // store the replaced string here so that we can rebuild the text later
    while(match){
        replaced.push(match[0]);
        text = text.replace(match[0], REPLACE_PLACEHOLDER);
        match = /(<code>)(.|\s)*?(<\/code>)/g.exec(text);
    }

    // match the usernames and either censor or change them with a href link
    var match = pattern.exec(text);
    while(match){
        var name = match[1];

        if(arrContains(bannedUsers, name)){
            // if it's a banned name, censor it!
            text = censorName(text, name);
        } else{
            // replace with hreflink
            modName = name.substring(1);  // get the name without the hashtag in front
            var hrefLink = '<a href="/users/profile/show/' + modName + '">'+ modName +'</a>'
            text = replaceBetween(text, text.indexOf(name), text.indexOf(name) + name.length, hrefLink);
        }

        match = pattern.exec(text);
    }

    // replace the placeholders with their original text
    var place = text.indexOf(REPLACE_PLACEHOLDER);
    var count = 0;
    while(place != -1){
        text = replaceBetween(text, place, place + REPLACE_PLACEHOLDER.length, replaced[count]);
        count++;
        place = text.indexOf(REPLACE_PLACEHOLDER);
    }
    console.log(text);



    function arrContains(arr, name) {
        // check if the array contains the string we've given it
        for (var idx = 0; idx < arr.length; idx++) {
            if (arr[idx] === name) {
                return true;
            }
        }
        return false;
    }

    function replaceBetween(text, start, end, what) {
        return text.substring(0, start) + what + text.substring(end);
    };

    function censorName(text, name) {
        return replaceBetween(text, text.indexOf(name), text.indexOf(name) + name.length, '*'.repeat(name.length-1));
    }

    function getBannedUsers(input) {
        // create an array of all the banned usernames
        var bannedUsers = input[input.length-1].split(' ');
        for(var index in bannedUsers){
            // add a hashtag in front of every banned user
            bannedUsers[index] = '#' + bannedUsers[index];
        }
        return bannedUsers;
    }

    function buildText(input) {
        // concatenates all the strings given as an input to a string and puts new lines in between
        var text = '';

        for(var index in input){
            if(index != input.length-1){
                var line = input[index];
                text += line + '\n';
            }
        }

        return text;
    }
}
solve([
'#1nvalid, #very_invalid_, #4alelele4ala,',
'#gosho, #pesho',
'#vesko_marinov_40',
'gosho pesho',
])