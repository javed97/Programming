let startButton = document.getElementById("start-btn");
let questionContainer = document.getElementById("question-container");
let nextButton = document.getElementById("next-btn");
let previousButton = document.getElementById("previous-btn");
let questionNumber = document.getElementById("question-no");
let submitButton = document.getElementById("submit-btn");
let question = document.getElementById("question");
let optionButton = document.getElementsByClassName("btn");
let quizTitle = document.getElementById("quiz-title");

let i = 0;
previousButton.disabled = true;

class Question {
  constructor(question, option1, option2, option3, option4) {
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = this.option4;
  }
}

let question1 = new Question("What is 2 + 2 ?", 3, 4, 5, 6);
let question2 = new Question(
  "What is the name of our country? ?",
  "India",
  "Pakistan",
  "China",
  "Japan"
);
let question3 = new Question(
  "What is going on in the training ?",
  "Css",
  "HTML",
  "Javascript",
  "Time Wastage"
);
let question4 = new Question("What is 4 * 2? ?", 3, 7, 8, 6);

let questionArray = [question1, question2, question3, question4];

startButton.addEventListener("click", function () {
  startButton.classList.add("hide");
  quizTitle.classList.add("hide");
  const removeHide = [
    questionContainer,
    nextButton,
    previousButton,
    submitButton,
  ];
  removeHide.forEach((element) => {
    element.classList.remove("hide");
  });
  nextQuestion();
});

function nextQuestion() {
  question.innerText = questionArray[i].question;
  questionNumber.innerText = `Question ${i+1}`;

  optionButton[0].innerText = questionArray[i].option1;
  optionButton[1].innerText = questionArray[i].option2;
  optionButton[2].innerText = questionArray[i].option3;
  optionButton[3].innerText = questionArray[i].option4;
  i++;
}

function previousQuestion() {
  --i;
  //   console.log(i);
  question.innerText = questionArray[i - 1].question;
  optionButton[0].innerText = questionArray[i - 1].option1;
  optionButton[1].innerText = questionArray[i - 1].option2;
  optionButton[2].innerText = questionArray[i - 1].option3;
  optionButton[3].innerText = questionArray[i - 1].option4;
}

previousButton.addEventListener("click", function () {
  if (i === 1) {
    previousButton.disabled = true;
  } else {
    previousQuestion();
  }
});

nextButton.addEventListener("click", function () {
    console.log(i);
  if (i <= 3) {
    nextButton.disabled = false;
    previousButton.disabled = false;
    nextQuestion();
  } else {
    console.log("else", i);
    nextButton.disabled = true;
  }
});
