/*Your first task is to write your name with text glow as shown in the picture below.*/
var canvas = document.getElementById('can');
var ctx = canvas.getContext('2d');

// base face
ctx.lineWidth = 2;
ctx.strokeStyle = '#477180';
ctx.fillStyle = '#74D1DB';
ctx.beginPath();
ctx.arc(300, 300, 100, degToRad(0), degToRad(360));
ctx.fill();
ctx.stroke();
// mouth
ctx.moveTo(340,350);
ctx.arc(300, 350, 45, degToRad(0), degToRad(180));
ctx.lineTo(340, 350);
ctx.stroke();
// nose
ctx.moveTo(300, 330);
ctx.lineTo(280, 330);
ctx.lineTo(300, 296);
ctx.stroke();

// left eye
drawEye(130, 250, 12, ctx);
// inner left eye
drawInnerEye(170, 120, 5, ctx);

// right eye
drawEye(170, 250, 12, ctx);
// inner right eye
drawInnerEye(222, 120, 5, ctx);

// hat base
ctx.beginPath();
ctx.save();
ctx.scale(6.5, 1);
ctx.moveTo(67, 210);
ctx.arc(47, 210, 20, degToRad(0), degToRad(360));

ctx.fillSyle = '#031E96';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();

//
ctx.beginPath();
ctx.save();
ctx.scale(2, 1);
ctx.moveTo(28, 197);
ctx.arc(23, 197, 5, degToRad(0), degToRad(180));
ctx.stroke();

// hat lines up
ctx.restore();
ctx.moveTo(57, 65);
ctx.lineTo(57, 200);

ctx.moveTo(35, 65);
ctx.lineTo(35, 200);
ctx.fill();
ctx.lineWidth = '0.7';

//ctx.beginPath();
ctx.save();
ctx.scale(2, 1);
ctx.moveTo(28, 65);
ctx.arc(23, 65, 5.5, degToRad(0), degToRad(180));
ctx.arc(23, 65, 5.5, degToRad(180), degToRad(360));
ctx.stroke();
ctx.fill();


function drawEye(x, y, rad, ctx) {
    // save the context because we''ll be scaling it up and will need to return to it later
    ctx.save();

    // scale ctx horizontally
    ctx.scale(2, 1.2);

    // draw circle which will be stretched into an oval
    ctx.moveTo(x + rad, y);
    ctx.arc(x, y, rad, degToRad(0), degToRad(360));

    // restore to original state
    ctx.restore();
    ctx.stroke();
}

function drawInnerEye(x, y, rad, ctx) {
    ctx.beginPath();
    ctx.save();
    ctx.scale(1.5, 2.5);
    ctx.moveTo(x, y);
    ctx.arc(x, y, rad, degToRad(0), degToRad(360));

    ctx.restore();
    ctx.strokeStyle = '#477180';
    ctx.stroke();
    ctx.fillStyle = '#477180';
    ctx.fill();
}

function degToRad(deg) {
    return deg * Math.PI/180;
}