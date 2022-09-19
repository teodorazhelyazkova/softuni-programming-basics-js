function uniquePinCodes(input) {
  const maxOfFirstNumber = Number(input[0]);
  const maxOfSecondNumber = Number(input[1]);
  const maxOfThirdNumber = Number(input[2]);
  for (let i = 1; i <= maxOfFirstNumber; i++) {
    let printline = "";
    if (i % 2 === 0) {
      let firstDigit = i;
      printline += firstDigit + "";
      for (
        let secondDigit = 2;
        secondDigit <= maxOfSecondNumber;
        secondDigit++
      ) {
        let isPrime = true;
        for (let p = 2; p < secondDigit; p++) {
          if (secondDigit % p === 0) {
            isPrime = false;
          }
        }
        if (isPrime) {
          printline += ` ${secondDigit} `;
          for (let t = 1; t <= maxOfThirdNumber; t++) {
            if (t % 2 === 0) {
              let thirdDigit = t;
              printline += `${thirdDigit}`;
              console.log(`${i} ${secondDigit} ${t}`);
            }
          }
        }
      }
    }
  }
}
uniquePinCodes([8, 2, 8]);
