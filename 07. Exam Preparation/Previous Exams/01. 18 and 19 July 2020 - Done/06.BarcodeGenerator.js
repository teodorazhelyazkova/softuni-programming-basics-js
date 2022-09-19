function barcodeGenerator(input) {
  const start = input[0];
  const end = input[1];
  let printLine = "";

  let startA = Number(start.charAt(0));
  let startB = Number(start.charAt(1));
  let startC = Number(start.charAt(2));
  let startD = Number(start.charAt(3));

  let endA = Number(end.charAt(0));
  let endB = Number(end.charAt(1));
  let endC = Number(end.charAt(2));
  let endD = Number(end.charAt(3));

  for (let a = startA; a <= endA; a++) {
    for (let b = startB; b <= endB; b++) {
      for (let c = startC; c <= endC; c++) {
        for (let d = startD; d <= endD; d++) {
          if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
            printLine += `${a}${b}${c}${d} `;
          }
        }
      }
    }
  }
  console.log(printLine);
}

barcodeGenerator(["2345", "6789"]);
