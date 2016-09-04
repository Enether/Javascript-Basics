/*
 Write a JavaScript function that takes as input an array of two numbers (start and end) and prints at the console a

 HTML table of 3 columns. The first column should hold a number num, changing from start to end. The second

 column should hold num*num. The third column should hold &quot;yes&quot; if num is Fibonacci number or &quot;no&quot; otherwise.

 The table should have header cells titled &quot;Num&quot;, &quot;Square&quot; and &quot;Fib&quot;.

* */

// its all in this function because of the way the automated test over at judge.softuni.bg work.
// 100/100 !
function solve(args) {
    buildTable(args);

    function buildTable(arr) {
        start = parseInt(arr[0]);
        end = parseInt(arr[1]);

        console.log("<table>");
        console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>");

        for(i=start; i <= end; i++){
            var isFib = isFibonacci(i);
            console.log("<tr><td>" + i + "</td><td>" + Math.pow(i, 2) + "</td><td>" + isFib + "</td></tr>");
        }

        console.log("</table>");
    }

    function isFibonacci(number) {
        /*The mathematical test for determining whether a given number F is Fibonacci is to simply check if either of the expressions

         5F^2 + 4, or
         5F^2 - 4

         is a perfect square. If one of the two expressions is a perfect square, i.e., it has an integer square root, then F is a Fibonacci number. Otherwise it is not.*/
        firstTest = Math.sqrt(5 * Math.pow(number, 2) + 4);
        secondTest = Math.sqrt(5 * Math.pow(number, 2) - 4);

        // check if either one is an int (perfect square)
        if(isInt(firstTest) || isInt(secondTest)){
            return "yes";
        }
        else{
            return "no";
        }

    }

    function isInt(n) {
        return n % 1 === 0;
    }
}
