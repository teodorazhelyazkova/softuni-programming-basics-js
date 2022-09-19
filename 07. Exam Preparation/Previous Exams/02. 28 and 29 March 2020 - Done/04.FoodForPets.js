function foodForPets(input) {
  let index = 0;
  const days = Number(input[index]);
  index++;
  const totalFoodInGrams = Number(input[index]);
  index++;
  let totalEatenBiscuits = 0;
  let totalEatenDogFood = 0;
  let totalEatenCatFood = 0;

  for (let i = 1; i <= days; i++) {
    let dogFoodEaten = Number(input[index]);
    totalEatenDogFood += dogFoodEaten;
    index++;
    let catFoodEater = Number(input[index]);
    index++;
    totalEatenCatFood += catFoodEater;
    let biscuits = 0;
    let totalFoodEatenForTheDay = dogFoodEaten + catFoodEater;

    if (i % 3 === 0) {
      biscuits = 0.1 * totalFoodEatenForTheDay;
      totalEatenBiscuits += biscuits;
    }
  }
  console.log(`Total eaten biscuits: ${Math.round(totalEatenBiscuits)}gr.`);
  console.log(
    `${(
      ((totalEatenCatFood + totalEatenDogFood) / totalFoodInGrams) *
      100
    ).toFixed(2)}% of the food has been eaten.`
  );
  console.log(
    `${(
      (totalEatenDogFood / (totalEatenCatFood + totalEatenDogFood)) *
      100
    ).toFixed(2)}% eaten from the dog.`
  );
  console.log(
    `${(
      (totalEatenCatFood / (totalEatenCatFood + totalEatenDogFood)) *
      100
    ).toFixed(2)}% eaten from the cat.`
  );
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
