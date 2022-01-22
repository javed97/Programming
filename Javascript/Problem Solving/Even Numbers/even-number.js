function takeInput() {
  let endRange = prompt("Input the ending range for Even Numbers");
  if (endRange < 0 || endRange % 1 !== 0) {
    alert("Enter an integer");
    takeInput();
  } else {
    printEvenNumbers(endRange);
  }
}

function printEvenNumbers(number) {
  for (i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i + " is an Even Number");
    }
  }
}

takeInput();
