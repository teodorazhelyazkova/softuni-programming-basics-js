function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];

    if (season === "summer") {
        if (budget <= 100) {
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${(budget * 0.3).toFixed(2)}`);
        } else if (budget <= 1000) {
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${(budget * 0.4).toFixed(2)}`);
        }
    } else if (season === "winter") {
        if (budget <= 100) {
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${(budget * 0.7).toFixed(2)}`);
        } else if (budget <= 1000) {
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${(budget * 0.8).toFixed(2)}`);
        }
    }
    if (budget > 1000) {
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${(budget * 0.9).toFixed(2)}`);
    }
}

journey(["75", "winter"]);