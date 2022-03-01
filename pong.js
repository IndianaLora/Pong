let pong = document.getElementById("character");
let score = document.getElementById("current-score");
let game = document.getElementById("game");
let interval;
let timer = 0;
let counter = 0;
let paralelMovement = 0;


function clickedPong(event) {
  score.innerHTML = " " + timer++;
}
function moveLeft() {
  let left = parseInt(window.getComputedStyle(pong).getPropertyValue("left"));
  if (left > 0) {
    pong.style.left = left - 2 + "px";
  }

}
function moveRight() {
  let left = parseInt(window.getComputedStyle(pong).getPropertyValue("left"));
  if (left < 380) {
    pong.style.left = left + 2 + "px";
  }
}
document.addEventListener("keydown", event => {
  if (paralelMovement == 0) {
    both++;
    if (event.key === "ArrowLeft") {
      interval = setInterval(moveLeft, 1);
    }
    if (event.key === "ArrowRight") {
      interval = setInterval(moveRight, 1);
    }
  }
})

document.addEventListener("keyup", event => {
  clearInterval(interval);
  both = 0;
})
setInterval(function () {

  let lastBlock = document.getElementById("block" + (counter - 1));
  let lastHole = document.getElementById("hole" + (counter - 1));

  if (counter > 0) {
    var blockLastTop = parseInt(window.getComputedStyle(lastBlock).getPropertyValue("top"));
    var holeLastTop = parseInt(window.getComputedStyle(lastHole).getPropertyValue("top"));
  }

  let block = document.createElement("div");
  let hole = document.createElement("div");

  block.setAttribute("class", "block");
  hole.setAttribute("class", "hole");

  block.setAttribute("id", "block" + counter);
  hole.setAttribute("id", "hole" + counter);

  block.style.top = blockLastTop + 100 + "px";
  hole.style.top = holeLastTop + 100 + "px";


  let random = Math.floor(Math.random() * 360);
  hole.style.left = random + "px";

  game.appendChild(block);
  game.appendChild(hole);

  counter++
})
