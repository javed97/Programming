let str = "CamelCase";
const atoz = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let splitedArray = str.split("");
let newArray = [];

function camelCaseToSnake(){
    newArray = splitedArray.map(function (x) {
        if (atoz.includes(x)) {
          return "_" + x.toLowerCase();
        } else {
          return x;
        }
      });

    console.log("Camel Case: ", str);
    console.log("Snake Case: ", newArray.join(""));
}

camelCaseToSnake();