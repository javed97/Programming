let arr = [];
let reverse = [];
let arrayLength = prompt("Enter length of array");

for (i = 0; i < arrayLength; i++) {
  arr.push(prompt("Enter values of array"));
}

for (i = arrayLength - 1; i >= 0; i--) {
  reverse.push(arr[i]);
}

console.log(reverse);
