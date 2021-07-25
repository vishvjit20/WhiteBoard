let canvas = document.querySelector("#canvas");

let { top: canvasTop } = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight - canvasTop;
  canvas.width = window.innerWidth;
  redrawLines();
});

let ctx = canvas.getContext("2d");
ctx.lineCap = "round";

let db = [];
let line = [];
let redoDB = [];
let isMouseDown = false;

canvas.addEventListener("mousedown", function (e) {
  if (redoDB.length) redoDB = [];
  isMouseDown = true;
  let x = e.clientX;
  let y = e.clientY - canvasTop;
  ctx.beginPath();
  ctx.moveTo(x, y);

  let pointObect = {
    type: "md",
    x,
    y,
    color: ctx.strokeStyle,
    width: ctx.lineWidth,
  };
  line.push(pointObect);
});

canvas.addEventListener("mousemove", function (e) {
  if (isMouseDown) {
    let x = e.clientX;
    let y = e.clientY - canvasTop;
    ctx.lineTo(x, y);
    ctx.stroke();

    let pointObect = {
      type: "mm",
      x,
      y,
    };
    line.push(pointObect);
  }
});

canvas.addEventListener("mouseup", function (e) {
  isMouseDown = false;
  db.push(line);
  line = [];
  console.log(db);
});
