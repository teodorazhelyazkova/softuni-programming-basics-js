function poolDay(input) {
    const peopleCount = Number(input[0]);
    const entranceTax = Number(input[1]);
    const sunbedPrice = Number(input[2]);
    const umbrellaPrice = Number(input[3]);

    const totalEntraceTax = peopleCount * entranceTax;
    const sunbedNeeded = Math.ceil(0.75 * peopleCount);
    const sunbedTotalPrice = sunbedNeeded * sunbedPrice;
    const umbrellasNeeded = Math.ceil(peopleCount / 2);
    const umbrellasTotalPrice = umbrellasNeeded * umbrellaPrice;
    const totalmoneyNeeded = sunbedTotalPrice + umbrellasTotalPrice + totalEntraceTax;

    console.log(`${totalmoneyNeeded.toFixed(2)} lv.`);    
}

poolDay(["21", "5.50", "4.40", "6.20"]);
