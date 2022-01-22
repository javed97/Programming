let strings = "J aved Abidali Sh aikh";
let removeWhite = "";

for (i = 0; i < strings.length; i++) {
  if (strings[i] !== " ") {
    removeWhite = removeWhite + strings[i];
  }
}

console.log(removeWhite);
