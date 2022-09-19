function shopping(input) {
  const budget = Number(input[0]);
  const videocardsCount = Number(input[1]);
  const processorCount = Number(input[2]);
  const ramCount = Number(input[3]);

  const videocardPrice = 250;
  const totalVideoCardsBought = videocardPrice * videocardsCount;
  const processorPrice = 0.35 * totalVideoCardsBought;
  const ramPrice = 0.1 * totalVideoCardsBought;

  let totalMoney =
    totalVideoCardsBought +
    processorCount * processorPrice +
    ramCount * ramPrice;

  if (videocardsCount > processorCount) {
    totalMoney -= totalMoney * 0.15;
  }

  let difference = Math.abs(totalMoney - budget);

  if (budget >= totalMoney) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else if (totalMoney > budget) {
    console.log(
      `Not enough money! You need ${difference.toFixed(2)} leva more!`
    );
  }
}

// shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
