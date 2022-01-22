let numbers = [10, -20, 5, 2.5, 17];
let temp;

for (let j = 0; j < numbers.length; j++) {
  for (let i = 0; i < numbers.length - j; i++) {
    if (numbers[i] > numbers[i + 1]) {
      temp = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = temp;
    }
  }
}
console.log(numbers);
