function convertToKm() {
  let convertedNumberToKM;
  let number = parseInt(prompt("Enter number"));
  let numberType = parseInt(
    prompt("Enter number type\n1. cm\n2. km\n3. miles\n4. inches\n5. foot")
  );
  switch (numberType) {
    case 1:
      convertedNumberToKM = number / 100000;
      break;
    case 2:
      convertedNumberToKM = number;
      break;
    case 3:
      convertedNumberToKM = number * 1.609;
      break;
    case 4:
      convertedNumberToKM = number / 39370;
      break;
    case 5:
      convertedNumberToKM = number / 3281;
      break;
    default:
      console.log("Enter the proper option number from the list.");
      break;
  }
  console.log(convertedNumberToKM + " in KM");
  kilometerToOther(number, convertedNumberToKM);
}

function kilometerToOther(number, convertedNumber) {
  let result;
  let conversionType = parseInt(
    prompt(
      "Enter conversion type \n1. to cm\n2. to km\n3. to miles\n4. to inches\n5. to foot"
    ),
    10
  );
  switch (conversionType) {
    case 1:
      result = convertedNumber * 100000;
      alert(number + " is converted into " + result + " cm");
      break;

    case 2:
      result = convertedNumber;
      alert(number + " is converted into " + result + " KM");
      break;

    case 3:
      result = convertedNumber / 1.609;
      alert(number + " is converted into " + result + " miles");
      break;

    case 4:
      result = convertedNumber * 39370;
      alert(number + " is converted into " + result + " inches");
      break;

    case 5:
      result = convertedNumber * 3281;
      alert(number + " is converted into " + result + " foot");
      break;

    default:
      console.log("Enter the proper option number (from 2nd switch)");
      break;
  }
}

convertToKm();
