const canvas = document.querySelector("canvas");
canvas.width = 1280;
canvas.height = 720;

const ctx = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(1280, 720);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
ctx.stroke();
