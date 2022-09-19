function truckDriver(input) {
    const season = input[0];
    const kmPerMonth = Number(input[1]);
    let pricePerKm = 0;
    let money = 0;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                pricePerKm = 0.75;
                break;
            case "Summer":
                pricePerKm = 0.9;
                break;
            case "Winter":
                pricePerKm = 1.05;
                break;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                pricePerKm = 0.95;
                break;
            case "Summer":
                pricePerKm = 1.1;
                break;
            case "Winter":
                pricePerKm = 1.25;
                break;
        }
    } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
        pricePerKm = 1.45;
    }
    money = pricePerKm * kmPerMonth * 4;
    money -= 0.1 * money;

    console.log(money.toFixed(2));
    }

truckDriver(["Summer", 3455]);