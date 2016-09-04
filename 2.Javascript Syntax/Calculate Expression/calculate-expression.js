function calculateExpression() {
    // get the expression
    var expression = document.getElementById("expressionText").value;
    document.getElementById("results").innerHTML = eval(expression);
}