let mixArray = [20, -1, 0, -2, 4];
let filteredArray = [];
mixArray.forEach((item, index) => {
  if (item >= 0) {
    filteredArray.push(item);
  }
});

console.log(filteredArray);
