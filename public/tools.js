let pencil = document.querySelector(".pencil-wrapper");
let eraser = document.querySelector(".eraser-wrapper");
let activeTool = "pencil";

let pencilSizeInput = pencil.querySelectorAll(".p-s");
let eraserSizeInput = eraser.querySelectorAll(".e-s");

let pencilColors = pencil.querySelectorAll(".pencil-colors div");

let currentPencilSize = 1;
let currentEraserSize = 1;
let currentPencilColor = "black";

for (let i = 0; i < pencilColors.length; i++) {
  pencilColors[i].addEventListener("click", selectPencil);
}

function selectPencil(e) {
  for (let i = 0; i < pencilColors.length; i++) {
    pencilColors[i].classList.remove("active");
  }
  let selectedPencilColor = e.currentTarget.className;
  if (!e.currentTarget.classList.contains("active"))
    e.currentTarget.classList.add("active");
  ctx.strokeStyle = selectedPencilColor.split(" ")[0] + "";
  currentPencilColor = ctx.strokeStyle;
}

for (let i = 0; i < pencilSizeInput.length; i++) {
  pencilSizeInput[i].addEventListener("click", function () {
    for (let j = 0; j < pencilSizeInput.length; j++) {
      pencilSizeInput[j].classList.remove("active");
    }
    let updatedPencilSize;
    if (i == 0) updatedPencilSize = 1;
    else if (i == 1) updatedPencilSize = 10;
    else updatedPencilSize = 20;
    ctx.lineWidth = updatedPencilSize;
    currentPencilSize = updatedPencilSize;
    pencilSizeInput[i].classList.add("active");
  });
}

for (let i = 0; i < eraserSizeInput.length; i++) {
  eraserSizeInput[i].addEventListener("click", function () {
    for (let j = 0; j < pencilSizeInput.length; j++) {
      eraserSizeInput[j].classList.remove("active");
    }
    let updatedEraserSize;
    if (i == 0) updatedEraserSize = 1;
    else if (i == 1) updatedEraserSize = 10;
    else updatedEraserSize = 20;
    ctx.lineWidth = updatedEraserSize;
    currentEraserSize = updatedEraserSize;
    eraserSizeInput[i].classList.add("active");
  });
}

pencil.addEventListener("click", function () {
  // pencil.classList.add("active");
  // eraser.classList.remove("active");
  // if (activeTool == "pencil") {
  // pencil options
  // if (pencilOptions.classList.contains("hide")) {
  //   pencilOptions.classList.remove("hide");
  // } else {
  //   pencilOptions.classList.add("hide");
  // }
  // } else {
  activeTool = "pencil";
  ctx.strokeStyle = currentPencilColor;
  // eraserOptions.classList.add("hide");
  ctx.lineWidth = currentPencilSize;
  // }
});

eraser.addEventListener("click", function () {
  // eraser.classList.add("active");
  // pencil.classList.remove("active");
  // if (activeTool == "eraser") {
  //   // eraser options
  //   if (eraserOptions.classList.contains("hide")) {
  //     eraserOptions.classList.remove("hide");
  //   } else {
  //     eraserOptions.classList.add("hide");
  //   }
  // } else {
  activeTool = "eraser";
  ctx.strokeStyle = "white";
  ctx.lineWidth = currentEraserSize;
  // pencilOptions.classList.add("hide");
  // }
});
