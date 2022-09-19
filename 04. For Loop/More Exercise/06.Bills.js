function bills(input) {
    let index = 0;
    const months = Number(input[index]);
    index++;
    let totalElectricity = 0;
    let totalOther = 0;

    for (let i = 0; i < months; i++) {
        let electricityBill = Number(input[index]);
        totalElectricity += electricityBill;
        let other = (electricityBill + 35) + (electricityBill + 35) * 0.2;
        totalOther += other;
        index++;
    }

    const totalWater = months * 20;
    const totalInternet = months * 15;
    const average = (totalOther + totalElectricity + totalInternet + totalWater) / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
// bills([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);