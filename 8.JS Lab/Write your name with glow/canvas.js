/*Your first task is to write your name with text glow as shown in the picture below.*/
var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');
ctx.font = "60px Arial";
ctx.shadowBlur = 10; ctx.shadowColor = "blue";

ctx.fillText("Netherblood", 0, 250);