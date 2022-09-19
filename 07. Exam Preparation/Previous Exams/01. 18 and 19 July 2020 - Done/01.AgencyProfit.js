function agencyProfit(input) {
    const nameAirline = input[0];
    const adultTicketsCount = Number(input[1]);
    const childTicketsCount = Number(input[2]);
    const netPriceAdultTicket = Number(input[3]);
    const taxPrice = Number(input[4]);
    const netPriceChildTicket = 0.3 * netPriceAdultTicket;
    
    const totalAdultTicketsPrice = (netPriceAdultTicket + taxPrice) * adultTicketsCount;
    const totalChildTicketsPrice = (netPriceChildTicket + taxPrice) * childTicketsCount;
    const profit = 0.2 * (totalAdultTicketsPrice + totalChildTicketsPrice);

    console.log(`The profit of your agency from ${nameAirline} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit(["WizzAir", 15, 5, 120, 40]);