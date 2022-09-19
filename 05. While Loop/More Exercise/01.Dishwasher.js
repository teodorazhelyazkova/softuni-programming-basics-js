function dishwasher(input) {
  let index = 0;
  const detergentBottles = Number(input[index]);
  index++;
  let command = input[index];
  const detergentInMl = detergentBottles * 750;
  let detergentInMlNeeded = 0;
  let commandCounter = 0;
  let dishesCounter = 0;
  let potsCounter = 0;

  while (command !== "End") {
    commandCounter++;

    let detergentUsed = Number(command) * 5;

    if (commandCounter % 3 === 0) {
      detergentUsed = Number(command) * 15;
      potsCounter += Number(command);
    } else {
      dishesCounter += Number(command);
    }

    detergentInMlNeeded += detergentUsed;

    if (detergentInMlNeeded > detergentInMl) {
      break;
    }

    index++;
    command = input[index];
  }

  let difference = Math.abs(detergentInMl - detergentInMlNeeded);

  if (detergentInMlNeeded > detergentInMl) {
    console.log(`Not enough detergent, ${difference} ml. more necessary!`);
  } else {
    console.log("Detergent was enough!");
    console.log(`${dishesCounter} dishes and ${potsCounter} pots were washed.`);
    console.log(`Leftover detergent ${difference} ml.`);
  }
}
// dishwasher([2, 53, 65, 55, "End"]);
dishwasher([1, 10, 15, 10, 12, 13, 30]);
