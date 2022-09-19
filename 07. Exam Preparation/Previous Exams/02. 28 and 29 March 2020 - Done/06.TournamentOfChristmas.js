function tournamentOfChristmas(input) {
  let index = 0;
  const days = Number(input[index]);
  index++;
  let totalMoneySaved = 0;
  let totalWinnersCounter = 0;
  let totalLosersCounter = 0;

  for (let i = 0; i < days; i++) {
    let moneySavedForTheDay = 0;
    let winnerGamesCounter = 0;
    let loserGamesCounter = 0;
    while (input[index] !== "Finish") {
      index++;
      let result = input[index];
      index++;
      switch (result) {
        case "win":
          moneySavedForTheDay += 20;
          winnerGamesCounter++;
          break;
        case "lose":
          loserGamesCounter++;
          break;
      }
    }
    if (winnerGamesCounter > loserGamesCounter) {
      moneySavedForTheDay += moneySavedForTheDay * 0.1;
    }
    totalMoneySaved += moneySavedForTheDay;
    totalLosersCounter += loserGamesCounter;
    totalWinnersCounter += winnerGamesCounter;
    index++;
  }
  if (totalWinnersCounter > totalLosersCounter) {
    totalMoneySaved += totalMoneySaved * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoneySaved.toFixed(
        2
      )}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoneySaved.toFixed(
        2
      )}`
    );
  }
}
tournamentOfChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);

// tournamentOfChristmas([
//   "2",
//   "volleyball",
//   "win",
//   "football",
//   "lose",
//   "basketball",
//   "win",
//   "Finish",
//   "golf",
//   "win",
//   "tennis",
//   "win",
//   "badminton",
//   "win",
//   "Finish",
// ]);
