const body = document.querySelector("body");

const IMG_NUMBER = 2;

function paintImgae() {
  const randomnumber = genRandom();
  const image = new Image();
  image.src = `./images/${randomnumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}
function genRandom() {
  return Math.floor(Math.random() * IMG_NUMBER);
}
function init() {
  paintImgae();
  setInterval(paintImgae, 3000);
}
init();
