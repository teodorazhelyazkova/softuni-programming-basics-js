function deerOfSanta(input) {
  const daysAway = Number(input[0]);
  const foodLeftInKg = Number(input[1]);
  const foodForTheFirstDeerInKgPerDay = Number(input[2]);
  const foodForTheSecondDeerInKgPerDay = Number(input[3]);
  const foodForTheThirdDeerInKgPerDay = Number(input[4]);

  const neededFoodForFirstDeer = daysAway * foodForTheFirstDeerInKgPerDay;
  const neededFoodForSecondDeer = daysAway * foodForTheSecondDeerInKgPerDay;
  const neededFoodForThirdDeer = daysAway * foodForTheThirdDeerInKgPerDay;

  const totalFoodNeeded =
    neededFoodForFirstDeer + neededFoodForSecondDeer + neededFoodForThirdDeer;

  let difference = Math.abs(totalFoodNeeded - foodLeftInKg);
  if (totalFoodNeeded <= foodLeftInKg) {
    console.log(`${Math.floor(difference)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
  }
}

deerOfSanta(["2", "10", "1", "1", "2"]);
