/*
*Write a program that reads file information from the console and groups the files according to their extensions in the
 *  format <file-extension> <[file1, file2, … ]> <total memory in MB>, where total memory is the sum of the sizes of
 *  the respective files.
* */
// our code is in this function because of the way the automated testing over at judge.softuni.bg works
// 88/100 before looking at the tests
function solve(args) {
    // array of objects with a fileExtension,all the names associated to that fileExtension and the accumulated size
    var files = readInput(args);
    files.sort(function (a,b) {
        if(a.extension < b.extension) return -1;
        if(a.extension > b.extension) return 1;
        return 0;
    })
    files.map(function(a){
        // sort the names
        a['names'].sort(function (a,b) {
            return a > b;
        });
        // add two decimal points to the memory
        a['sizes'] = a['sizes'].toFixed(2);//Number(Math.round(a['sizes']+'e2')+'e-2').toFixed(2); // 1.01
    })

    console.log(convertToJSON(files));

    function convertToJSON(sortedArr){
        // this function converts the array of objects into a json string for the output
        var jsonArr = [];
        /*
        * {".bat":{"files":["trojanStopper","winBlock"],"memory":"24.00"},".exe":{"files":
        * ["kindleInstaller","sentinel","skype"],"memory":"180.00"},".msi":{"files":["setup","zoomIt"],"memory":"36.40"}}*/
        for(var index in sortedArr){
            var file = sortedArr[index];
            var fileExtension = file['extension'];
            var fileNames = file['names'];
            var fileMemory = file['sizes'];

            jsonArr.push('"' + fileExtension + '":{"files":' + JSON.stringify(fileNames) + ',"memory":"' + fileMemory + '"}');
        }
        var json = '{' + jsonArr.join() + '}';
        return json;
    }

    function readInput(filesInput) {
        var files = [];
        var extensionToIndex = []; // this holds as key the index of a fileExtension in files and as a value the fileextension as str

        for(var index in filesInput){
            // TODO: handle name with space
            var fileInfo = filesInput[index].split(' ');
            var fileName = fileInfo[0];
            var fileExtension = fileInfo[1];
            var fileSize = fileInfo[2];
            // strip the "MB" from the string and convert it into a float
            fileSize = parseFloat(fileSize.substring(0, fileSize.length-2));

            var extIndex = extensionToIndex.indexOf(fileExtension);
            if(extIndex != -1){
                var tempObject = files[extIndex];
                tempObject['names'].push(fileName);  // add the name to the array of names
                tempObject['sizes'] += fileSize;  // add the size
            }
            else{
                // if we don't have such an index, we create it
                // the index is files.length because we are now adding it to the files array and that's where it will be
                extensionToIndex[files.length] = fileExtension;
                // this object will hold all other objects with the same extension
                files.push({extension: fileExtension,
                            names: [fileName],  // an array to hold all the filenames
                            sizes: fileSize})
            }
        }

        return files;
    }
}