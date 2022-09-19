function vacation(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let stay = "";
    let location = "";
    let price = 0;

    if (budget <= 1000) {
        stay = "Camp";
        switch (season) {
            case "Summer":
                location = "Alaska"
                price = 0.65 * budget;
                break;
            case "Winter":
                location = "Morocco"
                price = 0.45 * budget;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        stay = "Hut";
        switch (season) {
            case "Summer":
                location = "Alaska"
                price = 0.8 * budget;
                break;
            case "Winter":
                location = "Morocco"
                price = 0.6 * budget;
                break;
        }
    } else if (budget > 3000) {
        stay = "Hotel";
        price = 0.9 * budget
        switch (season) {
            case "Summer":
                location = "Alaska"
                break;
            case "Winter":
                location = "Morocco"
                break;
        }
    }
    console.log(`${location} - ${stay} - ${price.toFixed(2)}`);
}

vacation([800, "Summer",]);