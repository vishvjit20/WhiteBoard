let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

undo.addEventListener("click", undoLine);
redo.addEventListener("click", redoLine);

function undoLine(e) {
  if (redo.classList.contains("fade-out")) {
    redo.classList.remove("fade-out");
  }
  // 1. pop a line from db
  let redoLine = db.pop();
  if (db.length == 0) {
    undo.classList.add("fade-out");
  }
  redoDB.push(redoLine);

  // 2. Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 3. Redraw lines
  redrawLines();
}

function redrawLines() {
  for (let i = 0; i < db.length; i++) {
    let line = db[i];
    for (let j = 0; j < line.length; j++) {
      let pointObj = line[j];
      if (pointObj.type == "md") {
        ctx.strokeStyle = pointObj.color;
        ctx.lineWidth = pointObj.width;
        ctx.beginPath();
        ctx.moveTo(pointObj.x, pointObj.y);
      } else {
        ctx.lineTo(pointObj.x, pointObj.y);
        ctx.stroke();
      }
    }
  }
}

function redoLine() {
  if (undo.classList.contains("fade-out")) {
    undo.classList.remove("fade-out");
  }
  if (redoDB.length >= 1) {
    let line = redoDB.pop();
    for (let j = 0; j < line.length; j++) {
      let pointObj = line[j];
      if (pointObj.type == "md") {
        ctx.strokeStyle = pointObj.color;
        ctx.lineWidth = pointObj.width;
        ctx.beginPath();
        ctx.moveTo(pointObj.x, pointObj.y);
      } else {
        ctx.lineTo(pointObj.x, pointObj.y);
        ctx.stroke();
      }
    }
    db.push(line);
    if (redoDB.length == 0) {
      redo.classList.add("fade-out");
    }
  }
}
