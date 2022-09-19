function carToGo(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let classType = "";
    let carType = "";
    let carPrice = 0;

    if (budget <= 100) {
        classType = "Economy class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = 0.35 * budget;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = 0.65 * budget;
                break;
        }
    } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                carPrice = 0.45 * budget;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = 0.80 * budget;
                break;
        }
    } else if (budget > 500) {
        classType = "Luxury class";
        switch (season) {
            case "Summer":
            case "Winter":
                carType = "Jeep";
                carPrice = 0.9 * budget;
                break;
        }
    }
    console.log(classType);
    console.log(`${carType} - ${carPrice.toFixed(2)}`)
}

carToGo([450, "Summer"]);