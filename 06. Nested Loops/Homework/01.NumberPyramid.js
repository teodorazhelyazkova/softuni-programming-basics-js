function numberPyramid(input) {
  const targetNumber = Number(input[0]);
  let currentNumber = 0;
  let isEqual = false;
  for (let rows = 1; rows <= targetNumber; rows++) {
    let printLine = "";
    for (let cols = 1; cols <= rows; cols++) {
      currentNumber++;
      printLine += currentNumber + " ";
      if (currentNumber === targetNumber) {
        isEqual = true;
        break;
      }
    }
    console.log(printLine);
    if (isEqual) {
      break;
    }
  }
}

numberPyramid(["7"]);
