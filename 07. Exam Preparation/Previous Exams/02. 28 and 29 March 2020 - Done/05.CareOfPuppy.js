function careOfPuppy(input) {
  let index = 0;
  const dogFoodBoughtInKilograms = Number(input[index]);
  index++;
  const dogFoodBoughtInGrams = dogFoodBoughtInKilograms * 1000;
  let totalDogFoodEaten = 0;

  while (input[index] !== "Adopted") {
    let dogFoodEatenInGrams = Number(input[index]);
    index++;
    totalDogFoodEaten += dogFoodEatenInGrams;
  }
  let difference = Math.abs(totalDogFoodEaten - dogFoodBoughtInGrams);

  if (totalDogFoodEaten <= dogFoodBoughtInGrams) {
    console.log(`Food is enough! Leftovers: ${difference} grams.`);
  } else {
    console.log(`Food is not enough. You need ${difference} grams more.`);
  }
}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
