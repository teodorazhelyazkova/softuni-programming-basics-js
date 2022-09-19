function fitnessCard(input) {
  const moneyAvailable = Number(input[0]);
  const sex = input[1];
  const age = Number(input[2]);
  const sport = input[3];
  let cardPrice = 0;

  switch (sex) {
    case "m":
      switch (sport) {
        case "Gym":
          cardPrice = 42;
          break;
        case "Boxing":
          cardPrice = 41;
          break;
        case "Yoga":
          cardPrice = 45;
          break;
        case "Zumba":
          cardPrice = 34;
          break;
        case "Dances":
          cardPrice = 51;
          break;
        case "Pilates":
          cardPrice = 39;
          break;
      }
      break;
    case "f":
      switch (sport) {
        case "Gym":
          cardPrice = 35;
          break;
        case "Boxing":
          cardPrice = 37;
          break;
        case "Yoga":
          cardPrice = 42;
          break;
        case "Zumba":
          cardPrice = 31;
          break;
        case "Dances":
          cardPrice = 53;
          break;
        case "Pilates":
          cardPrice = 37;
          break;
      }
      break;
  }
  if (age <= 19) {
    cardPrice -= cardPrice * 0.2;
  }

  if (moneyAvailable >= cardPrice) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else if (moneyAvailable < cardPrice) {
    let moneyNeeded = cardPrice - moneyAvailable;
    console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
  }
}

fitnessCard(["50", "m", "23", "Gym"]);
