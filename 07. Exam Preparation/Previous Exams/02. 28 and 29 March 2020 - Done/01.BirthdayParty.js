function birthdayParty(input) {
    const rent = Number(input);

    const cakePrice = Number(0.2 * rent);
    const drinksPrice = Number(0.55 * cakePrice);
    const animatorPrice = Number(rent / 3);

    const totalBudgetNeeded = rent + cakePrice + drinksPrice + animatorPrice;

    console.log(totalBudgetNeeded);

}

birthdayParty(2250);