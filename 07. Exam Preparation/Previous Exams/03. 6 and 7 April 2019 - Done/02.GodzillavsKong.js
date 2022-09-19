function godzillaVsKong(input) {
  const movieBudget = Number(input[0]);
  const statistsCount = Number(input[1]);
  let clothingPricePerStatist = Number(input[2]);

  const decorPrice = 0.1 * movieBudget;

  let totalClothingPrice = statistsCount * clothingPricePerStatist;
  if (statistsCount > 150) {
    totalClothingPrice *= 0.9;
  }

  const totalMoney = totalClothingPrice + decorPrice;
  const difference = Math.abs(totalMoney - movieBudget);

  if (totalMoney > movieBudget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
  }
}

godzillaVsKong(["20000", "120", "55.5"]);
