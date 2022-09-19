function equalSumsEvenOddPosition(input) {
  const startNumber = Number(input[0]);
  const endNumber = Number(input[1]);
  let printline = "";
  for (let i = startNumber; i <= endNumber; i++) {
    let currentNumber = i + "";
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < currentNumber.length; j++) {
      let currentDigit = Number(currentNumber.charAt(j));
      if (j % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (oddSum === evenSum) {
      printline += `${i} `;
    }
  }
  console.log(printline);
}

equalSumsEvenOddPosition(["100000", "100050"]);
