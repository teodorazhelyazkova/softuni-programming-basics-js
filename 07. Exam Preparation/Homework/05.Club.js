function club(input) {
  let index = 0;
  const desiredProfit = Number(input[index]);
  index++;
  let totalProfit = 0;
  let isDesiredProfitEarned = false;
  while (input[index] !== "Party!") {
    let cocktailName = input[index];
    index++;
    let cocktailCount = Number(input[index]);
    index++;
    let cocktailPrice = cocktailName.length;
    let orderProfit = cocktailCount * cocktailPrice;
    if (orderProfit % 2 !== 0) {
      orderProfit -= orderProfit * 0.25;
    }
    totalProfit += orderProfit;

    if (totalProfit >= desiredProfit) {
      isDesiredProfitEarned = true;
      break;
    }
  }
  if (input[index] === "Party!") {
    let difference = desiredProfit - totalProfit;
    console.log(`We need ${difference.toFixed(2)} leva more.`);
  } else if (isDesiredProfitEarned) {
    console.log("Target acquired.");
  }
  console.log(`Club income - ${totalProfit.toFixed(2)} leva.`);
}

// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
