function specialNumbers(input) {
  let n = Number(input[0]);
  let printLine = "";
  for (let i = 1111; i < 9999; i++) {
    let currentNumber = i + "";
    let specialNumber = "";
    for (let j = 0; j < currentNumber.length; j++) {
      let currentDigit = Number(currentNumber.charAt(j));
      if (n % currentDigit === 0) {
        specialNumber += currentDigit;
      }
    }
    if (specialNumber.length === 4) {
      printLine += `${specialNumber} `;
    }
  }
  console.log(printLine);
}

specialNumbers(["3"]);
