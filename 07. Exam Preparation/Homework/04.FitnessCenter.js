function fitnessCenter(input) {
  let index = 0;
  const visitorsCount = Number(input[index]);
  let backCounter = 0;
  let chestCounter = 0;
  let legsCounter = 0;
  let absCounter = 0;
  let proteinShakeCounter = 0;
  let proteinBarCounter = 0;

  for (let visitor = 1; visitor <= visitorsCount; visitor++) {
    index++;
    let activity = input[index];
    switch (activity) {
      case "Back":
        backCounter++;
        break;
      case "Chest":
        chestCounter++;
        break;
      case "Legs":
        legsCounter++;
        break;
      case "Abs":
        absCounter++;
        break;
      case "Protein shake":
        proteinShakeCounter++;
        break;
      case "Protein bar":
        proteinBarCounter++;
        break;
    }
  }
  const totalTrainingPeople =
    backCounter + chestCounter + legsCounter + absCounter;
  const totalEatingPeople = proteinBarCounter + proteinShakeCounter;

  console.log(`${backCounter} - back`);
  console.log(`${chestCounter} - chest`);
  console.log(`${legsCounter} - legs`);
  console.log(`${absCounter} - abs`);
  console.log(`${proteinShakeCounter} - protein shake`);
  console.log(`${proteinBarCounter} - protein bar`);
  console.log(
    `${((totalTrainingPeople / visitorsCount) * 100).toFixed(2)}% - work out`
  );
  console.log(
    `${((totalEatingPeople / visitorsCount) * 100).toFixed(2)}% - protein`
  );
}

fitnessCenter([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);
