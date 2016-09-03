/*
 Write a JavaScript program current-time.js that prints on the console the current time in UTC format. Execute your

 file through Node.js.
* */
dt = new Date();

// get the day
daysInStrings = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
dayString = daysInStrings[dt.getUTCDay() - 1];
// get the date DD format
dateString = dt.getUTCDate();
if (dateString < 10){
    dateString = '0' + dateString;
}
// get the month
monthsInString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
monthString = monthsInString[dt.getUTCMonth() - 1];
// get the year
yearString = dt.getUTCFullYear();

hourString = dt.getUTCHours();
if (hourString < 10) {
    hourString = '0' + hourString;
}
minuteString = dt.getUTCMinutes();
if (minuteString < 10){
    minuteString = '0' + minuteString;
}
secondString = dt.getUTCSeconds();
if (secondString < 10){
    secondString = '0' + secondString;
}

console.log(dayString + ", " + dateString + " " + monthString + " " + yearString + " " + hourString
    + ":" + minuteString + ":" + secondString + " GMT");