function easterCompetition(input) {
  let index = 0;
  const easterBreadCount = Number(input[index]);
  index++;
  let maxPoints = Number.MIN_SAFE_INTEGER;
  let bestBaker = "";
  for (let baker = 1; baker <= easterBreadCount; baker++) {
    let bakerName = input[index];
    index++;
    let command = input[index];
    let totalPoints = 0;
    while (command !== "Stop") {
      let points = Number(command);
      totalPoints += points;
      index++;
      command = input[index];
    }
    if (command === "Stop") {
      console.log(`${bakerName} has ${totalPoints} points.`);
    }

    if (totalPoints > maxPoints) {
      maxPoints = totalPoints;
      bestBaker = bakerName;
      console.log(`${bakerName} is the new number 1!`);
    }
    index++;
  }
  console.log(`${bestBaker} won competition with ${maxPoints} points!`);
}

// easterCompetition([
//   "3",
//   "Chef Manchev",
//   "10",
//   "10",
//   "10",
//   "10",
//   "Stop",
//   "Natalie",
//   "8",
//   "2",
//   "9",
//   "Stop",
//   "George",
//   "9",
//   "2",
//   "4",
//   "2",
//   "Stop",
// ]);

easterCompetition([
  "2",
  "Chef Angelov",
  "9",
  "9",
  "9",
  "Stop",
  "Chef Rowe",
  "10",
  "10",
  "10",
  "10",
  "Stop",
]);
