function excursion(input) {
  const numberOfPeopleInTheGroup = Number(input[0]);
  const daysSleeping = Number(input[1]);
  const transportationCardsCount = Number(input[2]);
  const museumTicketsCount = Number(input[3]);

  const sleepingPrice = 20;
  const transportationCardPrice = 1.6;
  const museumTicketPrice = 6;

  const sleepingCostPerPerson = daysSleeping * sleepingPrice;
  const transportationPerPerson =
    transportationCardPrice * transportationCardsCount;
  const museumPerPerson = museumTicketPrice * museumTicketsCount;

  const totalMoneyPerPerson =
    sleepingCostPerPerson + transportationPerPerson + museumPerPerson;

  const totalMoneyPerGroup = totalMoneyPerPerson * numberOfPeopleInTheGroup;
  const extraCosts = totalMoneyPerGroup * 0.25;

  console.log((totalMoneyPerGroup + extraCosts).toFixed(2));
}

excursion(["20", "14", "30", "6"]);
