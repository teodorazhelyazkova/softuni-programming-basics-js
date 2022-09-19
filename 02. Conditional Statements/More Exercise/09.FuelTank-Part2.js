function fuelTank(input) {
    const fuelType = input[0];
    const fuelLiters = Number(input[1]);
    const clubCard = input[2];
    const gasolinePricePerLiter = 2.22;
    const dieselPricePerLiter = 2.33;
    const gasPricePerLiter = 0.93;
    let finalMoney = 0;

    switch (clubCard)  {
        case "Yes": 
            switch (fuelType) {
                case "Gasoline": finalMoney = (gasolinePricePerLiter - 0.18) * fuelLiters; break;
                case "Diesel": finalMoney = (dieselPricePerLiter - 0.12) * fuelLiters; break;
                case "Gas": finalMoney = (gasPricePerLiter - 0.08) * fuelLiters; break;
            }
        break;

        case "No":
            switch (fuelType) {
                case "Gasoline": finalMoney = gasolinePricePerLiter * fuelLiters; break;
                case "Diesel": finalMoney = dieselPricePerLiter * fuelLiters; break;
                case "Gas": finalMoney = gasPricePerLiter * fuelLiters; break;
            }
    }

    if (fuelLiters >= 20 && fuelLiters <= 25) {
        finalMoney -= finalMoney * 0.08;
    } else if (fuelLiters > 25) {
        finalMoney -= finalMoney * 0.1;
    }

    console.log(`${finalMoney.toFixed(2)} lv.`)
}

fuelTank(["Gas", 30, "Yes"]);