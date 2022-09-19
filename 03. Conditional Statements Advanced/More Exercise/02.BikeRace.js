function bikeRace(input) {
    const juniorsCount = Number(input[0]);
    const seniorsCount = Number(input[1]);
    const routeType = input[2];
    let juniorsTax = 0;
    let seniorsTax = 0;
    let totalMoneyFromTaxes = 0;
    let organizationCosts = 0;
    const totalRidersCount = juniorsCount + seniorsCount;

    switch(routeType) {
        case "trail":
            juniorsTax = 5.5;
            seniorsTax = 7;
        break;
        case "cross-country":
            juniorsTax = 8;
            seniorsTax = 9.5;
        break;
        case "downhill":
            juniorsTax = 12.25;
            seniorsTax = 13.75;
        break;
        case "road":
            juniorsTax = 20;
            seniorsTax = 21.5;
        break;
    }

    totalMoneyFromTaxes = (juniorsCount * juniorsTax) + (seniorsTax * seniorsCount);

    if(routeType === "cross-country" && totalRidersCount >= 50) {
        totalMoneyFromTaxes -= 0.25 * totalMoneyFromTaxes;
    }
    
    organizationCosts = 0.05 * totalMoneyFromTaxes;
    totalMoneyFromTaxes -= organizationCosts;
        
    console.log(totalMoneyFromTaxes.toFixed(2));
}

bikeRace(["10", "20", "trail"]);