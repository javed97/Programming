let gameWrapper = document.querySelectorAll(".game-wrapper")[0];
let ballNumber = document.querySelector(".ball-number");
let ballResult = document.querySelector(".ball-result");
let attempts = document.querySelector(".attempts");
let randomNumber = Math.floor(Math.random() * 50);
let count = 0;
const maxAttempts = 5;
const box = [];

console.log(randomNumber);

function changeBallColor(boxNumber, color) {

  if (count < maxAttempts ) {
    count++;
    ballResult.innerHTML = `${color} Ball`;
    ballNumber.innerHTML = boxNumber.getAttribute("data-boxId");
    boxNumber.style.backgroundColor = `${color}`;
    boxNumber.style.color = "white";
    if (color == "Grey") {
      boxNumber.style.color = "black";
    }
    attempts.innerHTML = count;
  } else {
    ballResult.innerHTML = "You have exhausted all attempts";
  }

  boxNumber.removeAttribute("onclick");
}

for (let i = 1; i <= 50; i++) {
  box[i] = document.createElement("div");
  gameWrapper.appendChild(box[i]);
  box[i].innerHTML = i;
  box[i].setAttribute("class", "box");
  box[i].setAttribute("data-boxId", `${i}`);
  box[i].setAttribute("onclick", "changeBallColor(this, 'Grey')");
  if (i === randomNumber) {
    box[i].setAttribute("onclick", "changeBallColor(this,'Blue')");
    box[i-1].setAttribute("onclick", "changeBallColor(this,'Red')");
  } 
  if( i === (randomNumber + 1)){
    box[i].setAttribute("onclick", "changeBallColor(this,'Green')");
  }
}
