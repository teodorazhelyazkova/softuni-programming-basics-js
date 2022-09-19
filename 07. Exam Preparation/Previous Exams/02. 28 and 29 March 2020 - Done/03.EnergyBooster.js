function energyBooster(input) {
  const fruit = input[0];
  const setType = input[1];
  const numberOfSetsOrdered = Number(input[2]);
  let pricePerGel = 0;

  switch (fruit) {
    case "Watermelon":
      switch (setType) {
        case "small":
          pricePerGel = 56;
          break;
        case "big":
          pricePerGel = 28.7;
          break;
      }
      break;
    case "Mango":
      switch (setType) {
        case "small":
          pricePerGel = 36.66;
          break;
        case "big":
          pricePerGel = 19.6;
          break;
      }
      break;
    case "Pineapple":
      switch (setType) {
        case "small":
          pricePerGel = 42.1;
          break;
        case "big":
          pricePerGel = 24.8;
          break;
      }
      break;
    case "Raspberry":
      switch (setType) {
        case "small":
          pricePerGel = 20;
          break;
        case "big":
          pricePerGel = 15.2;
          break;
      }
      break;
  }
  let totalPrice = 0;
  if (setType === "small") {
    totalPrice = 2 * pricePerGel * numberOfSetsOrdered;
  } else if (setType === "big") {
    totalPrice = 5 * pricePerGel * numberOfSetsOrdered;
  }
  if (totalPrice >= 400 && totalPrice <= 1000) {
    totalPrice -= totalPrice * 0.15;
  } else if (totalPrice > 1000) {
    totalPrice -= totalPrice * 0.50;
  }

  console.log(`${totalPrice.toFixed(2)} lv.`);
}

energyBooster(["Watermelon", "big", "4"]);
