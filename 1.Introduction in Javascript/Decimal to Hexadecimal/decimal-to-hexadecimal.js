/*
 Write a JavaScript code in a Web page dec2hex.html that enters a positive integer number num and converts and

 converts it to a hexadecimal form. The input should be entered as JavaScript prompt window. The output should be

 shown as browser popup window (alert). Examples:
* */

number = parseInt(prompt("Enter a number"));
if (isNaN(number)){
    alert("Please enter a valid number.")
}
else{
    alert(decToHex(number));
}

function decToHex(i) {
    return i.toString(16).toUpperCase();
}