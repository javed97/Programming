let cars = new Set(["a","b","c"]);
cars.add("volvo");
cars.add("Jeep");
cars.add("Jeep");
let iteratorObject = cars.values();

for (const iterator of iteratorObject) {
    // console.log(iteratorObject[iterator]); 
    console.log(iterator);   

}
