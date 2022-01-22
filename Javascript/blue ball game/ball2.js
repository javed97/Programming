let gameWrapper = document.querySelectorAll(".game-wrapper")[0];
let ballNumber = document.querySelector(".ball-number");
let ballResult = document.querySelector(".ball-result");
let attempts = document.querySelector(".attempts");
let randomNumber = Math.floor(Math.random() * 50);
let count = 0;
const maxAttempts = 5;
const box = [];
console.log(randomNumber);

function commonFunction(num, element, checkBall) {
  attempts.innerText = num;
  count++;
  element.removeEventListener("click", checkBall);
  element.style.backgroundColor = "rgb(63, 61, 61)";
  element.style.cursor = "default";
}

for (let i = 1; i <= 50; i++) {
  box[i] = document.createElement("div");
  gameWrapper.appendChild(box[i]);
  box[i].setAttribute("class", "box");
  box[i].innerText = i;


  box[i].addEventListener("click", function checkBall(event) {
    if (i === randomNumber && count < maxAttempts) {
      console.log("Matched", i, count);
      box[i].style.backgroundColor = "blue";
      commonFunction(count, box[i], checkBall);
    } else if (i - 1 === randomNumber && count < maxAttempts) {
      box[i].style.backgroundColor = "red";
      commonFunction(count, box[i], checkBall);
    } else if (i + 1 === randomNumber && count < maxAttempts) {
      box[i].style.backgroundColor = "green";
      commonFunction(count, box[i], checkBall);
    } else if (count >= maxAttempts) {
      console.log("Attempts exceeded", count);
      attempts.innerText = "Attempts exceeded";
    } else {
      console.log("Wrong Ball", i);
      commonFunction(count, box[i], checkBall);
    }
  });
}

