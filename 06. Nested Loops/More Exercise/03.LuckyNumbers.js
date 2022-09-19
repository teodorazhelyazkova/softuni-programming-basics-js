function luckyNumbers(input) {
  const n = input[0];
  let printLine = "";
  let isHappyNumberFound = false;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if ((i + j) % n === 0) {
        printLine += `${i}${j}`;
        for (let p = 1; p <= 9; p++) {
          for (let l = 1; l <= 9; l++) {
            if (p + l === i + j) {
              printLine += `${p}${l}`;
              isHappyNumberFound = true;
            }
            if (isHappyNumberFound) {
              break;
            }
          }
        }
      }
    }
  }
  console.log(printLine);
}

luckyNumbers([3]);
