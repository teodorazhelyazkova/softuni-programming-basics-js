function matchTickets(input) {
    const budget = Number(input[0]);
    const ticketCategory = input[1];
    const numberOfPeopleInTheGroup = Number(input[2]);
    const ticketVIP = 499.99;
    const ticketNormal = 249.99;
    let savingsFromBudget = 0;
    let ticketsFinalPrice = 0;
    let moneyLeftForTickets = 0;

    if(numberOfPeopleInTheGroup >= 1 && numberOfPeopleInTheGroup <= 4) {
        savingsFromBudget = 0.75 * budget;
    } else if (numberOfPeopleInTheGroup >= 5 && numberOfPeopleInTheGroup <= 9) {
        savingsFromBudget = 0.6 * budget;
    } else if (numberOfPeopleInTheGroup >= 10 && numberOfPeopleInTheGroup <= 24) {
        savingsFromBudget = 0.5 * budget;
    } else if (numberOfPeopleInTheGroup >= 25 && numberOfPeopleInTheGroup <= 49) {
        savingsFromBudget = 0.4 * budget; 
    } else if (numberOfPeopleInTheGroup >= 50) {
        savingsFromBudget = 0.25 * budget;
    }
    
    moneyLeftForTickets = budget - savingsFromBudget; 

    if(ticketCategory === "VIP") {
        ticketsFinalPrice = numberOfPeopleInTheGroup * ticketVIP;
    } else if (ticketCategory === "Normal") {
        ticketsFinalPrice = numberOfPeopleInTheGroup * ticketNormal;
    }

    let difference = Math.abs(moneyLeftForTickets - ticketsFinalPrice);

    if(moneyLeftForTickets >= ticketsFinalPrice) {
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }
}

matchTickets(["1000", "Normal", "1"]);