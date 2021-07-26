// let photo = document.querySelector("#photo");
// let photoInput = document.querySelector("#photo-upload");
let download = document.querySelector("#download");

// photo.addEventListener("click", function () {
//   photoInput.click();
// });

// photoInput.addEventListener("change", function (e) {
//   let fileObject = e.currentTarget.files[0];

//   imageUrl = URL.createObjectURL(fileObject);
//   let base_img = new Image();
//   base_img.addEventListener("load", function () {
//     ctx.drawImage(base_img, 0, 0, canvas.width, canvas.height);
//   });
//   base_img.src = imageUrl;
// });

download.addEventListener("click", function () {
  let canvasUrl = canvas.toDataURL({ type: "image/png" });
  let aTag = document.createElement("a");
  aTag.download = "canvas.png";
  aTag.href = canvasUrl;
  aTag.click();
});
