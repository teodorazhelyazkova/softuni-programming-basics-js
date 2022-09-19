function catWalking(input) {
  const minutesWalkingPerDay = Number(input[0]);
  const walkingCountPerDay = Number(input[1]);
  const catCaloriesPerDay = Number(input[2]);

  const caloriesBurned = minutesWalkingPerDay * walkingCountPerDay * 5;
  const enoughCaloriesBurned = 0.5 * catCaloriesPerDay;

  if (enoughCaloriesBurned <= caloriesBurned) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`
    );
  }
}

// catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
