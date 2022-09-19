function challengeTheWedding(input) {
  const menCount = Number(input[0]);
  const womenCount = Number(input[1]);
  const maxTablesCount = Number(input[2]);
  let tableCounter = 0;
  let printline = "";
  for (let i = 1; i <= menCount; i++) {
    for (let j = 1; j <= womenCount; j++) {
      tableCounter++;
      printline += `(${i} <-> ${j}) `;
      if (tableCounter >= maxTablesCount) {
        break;
      }
    }
  }
  console.log(printline);
}

challengeTheWedding([2, 2, 6]);
