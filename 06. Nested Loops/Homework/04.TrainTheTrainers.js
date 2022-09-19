function trainTheTrainers(input) {
  let index = 0;
  const juryCount = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let countOfGrades = 0;
  let avgGrage = 0;
  while (command !== "Finish") {
    countOfGrades++;
    let presentationName = command;
    let tempAvgGrade = 0;
    for (let i = 0; i < juryCount; i++) {
      let tempGrade = Number(input[index]);
      index++;
      tempAvgGrade += tempGrade;
    }
    tempAvgGrade = tempAvgGrade / juryCount;
    let presentationResult = `${presentationName} - ${tempAvgGrade.toFixed(2)}.`;
    console.log(presentationResult);
    avgGrage += tempAvgGrade;
    command = input[index];
    index++;
  }
  avgGrage = avgGrage / countOfGrades;
  console.log(`Student's final assessment is ${avgGrage.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
