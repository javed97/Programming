// let vowels = ["a", "e", "i", "o", "u"];
let strings = "Javeiiisd jkeee";
let counter = 0

// for(i = 0; i<strings.length; i++){
//     for(j = 0; j<vowels.length; j++){
//         if(strings[i] === vowels[j]){
//             counter++;
//         }
//     }
// }

for(i = 0; i<strings.length; i++){
    if(strings[i] === "a" || strings[i] ==="e" ||strings[i] ==="i" ||strings[i] ==="o" ||strings[i] ==="u"){
        counter++;
    }
}

console.log(counter);

