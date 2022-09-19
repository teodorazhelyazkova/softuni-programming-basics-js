function reportSystem(input) {
  let index = 0;
  const moneyNeeded = Number(input[index]);
  index++;

  let command = input[index];

  let totalMoneyCash = 0;
  let totalMoneyCard = 0;
  let commandCounter = 0;
  let cashPaymentCounter = 0;
  let cardPaymentCounter = 0;
  let isMoneySaved = false;

  while (command !== "End") {
    command = Number(input[index]);
    commandCounter++;

    if (commandCounter % 2 === 0) {
      if (command < 10) {
        console.log("Error in transaction!");
      } else {
        cardPaymentCounter++;
        console.log("Product sold!");
        totalMoneyCard += command;
      }
    } else {
      if (command > 100) {
        console.log("Error in transaction!");
      } else {
        cashPaymentCounter++;
        console.log("Product sold!");
        totalMoneyCash += command;
      }
    }

    if (totalMoneyCard + totalMoneyCash >= moneyNeeded) {
      isMoneySaved = true;
      const averageCashPayment = totalMoneyCash / cashPaymentCounter;
      const averageCardPayment = totalMoneyCard / cardPaymentCounter;
      console.log(`Average CS: ${averageCashPayment.toFixed(2)}`);
      console.log(`Average CC: ${averageCardPayment.toFixed(2)}`);
      break;
    }

    index++;
    command = input[index];
  }

  if (isMoneySaved === false && command === "End") {
    console.log("Failed to collect required money for charity.");
  }
}

// reportSystem([500, 120, 8, 63, 256, 78, 317]);
reportSystem([600, 86, 150, 98, 227, "End"]);
