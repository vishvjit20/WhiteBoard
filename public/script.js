let canvas = document.querySelector("#canvas");

let { top: canvasTop } = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight - canvasTop;
  canvas.width = window.innerWidth;
});

let ctx = canvas.getContext("2d");
let isMouseDown = false;

canvas.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY - canvasTop);
});

canvas.addEventListener("mousemove", function (e) {
  if (isMouseDown) {
    ctx.lineTo(e.clientX, e.clientY - canvasTop);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});
