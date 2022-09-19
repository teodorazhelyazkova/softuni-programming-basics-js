function transportPrice(input) {
    const nKilometers = Number(input[0]);
    const dayOrNight = input[1];
    const taxiFirstTax = 0.7;
    const taxiDayTariffPerKm = 0.79;
    const taxiNightTariffPerKm = 0.90;
    const busDayAndNightTariffPerKm = 0.09; 
    const trainDayAndNightTariffPerKm = 0.06;
    
    if (nKilometers >= 100) {
        console.log((nKilometers * trainDayAndNightTariffPerKm).toFixed(2));
    } else if (nKilometers >= 20 && nKilometers < 100) {
        console.log((nKilometers * busDayAndNightTariffPerKm).toFixed(2));
    } else if (nKilometers < 20) {
        switch (dayOrNight) {
            case "day": console.log(((nKilometers * taxiDayTariffPerKm) + taxiFirstTax).toFixed(2)); break;
            case "night": console.log(((nKilometers * taxiNightTariffPerKm) + taxiFirstTax).toFixed(2)); break; 
        }
    }
}

transportPrice([5, "day"]);