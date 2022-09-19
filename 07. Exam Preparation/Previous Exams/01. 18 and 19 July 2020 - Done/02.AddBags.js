function addBags(input) {
    const luggageAbove20kgTax = Number(input[0]);
    const luggageKg = Number(input[1]);
    const daysUntilTheFlight = Number(input[2]);
    const luggageCount = Number(input[3]);
    let totalLuggageTax = 0;
    
    if (luggageKg < 10) {
        totalLuggageTax = luggageCount * (0.2 * luggageAbove20kgTax);
    } else if (luggageKg >= 10 && luggageKg <= 20) {
        totalLuggageTax = luggageCount * (0.5 * luggageAbove20kgTax);
    } else {
        totalLuggageTax = luggageCount * luggageAbove20kgTax;
    }

    if (daysUntilTheFlight > 30) {
        totalLuggageTax += 0.1 * totalLuggageTax;
    } else if (daysUntilTheFlight >= 7 && daysUntilTheFlight <= 30) {
        totalLuggageTax += 0.15 * totalLuggageTax;
    } else {
        totalLuggageTax += 0.4 * totalLuggageTax;
    }

    console.log(`The total price of bags is: ${totalLuggageTax.toFixed(2)} lv.`);
}

addBags([30, 18, 15, 2]);
// addBags([25.50, 5, 36, 6]);
// addBags([63.80, 23, 3, 1]);