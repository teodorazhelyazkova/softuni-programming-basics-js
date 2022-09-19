function fishingBoat(input) {
    const springRentBoat = 3000;
    const summerAndAutumnRentBoat = 4200;
    const winterRentBoat = 2600;
    const budget = Number(input[0]);
    const season = input[1];
    const fisherMenCount = Number(input[2]);
    let totalMoney = 0;
    
    switch (season) {
        case "Winter":
            totalMoney = winterRentBoat;
        break;
        case "Spring":
            totalMoney = springRentBoat;
        break;
        case "Summer":
        case "Autumn":
            totalMoney = summerAndAutumnRentBoat;
        break;
    }

    if (fisherMenCount <= 6) {
        totalMoney -= totalMoney * 0.1;
    } else if (fisherMenCount >= 7 && fisherMenCount <= 11) {
        totalMoney -= totalMoney * 0.15;
    } else if (fisherMenCount >= 12) {
        totalMoney -= totalMoney * 0.25;
    }

    if (fisherMenCount % 2 === 0 && season != "Autumn") {
        totalMoney -= totalMoney * 0.05;
    }

    if (budget >= totalMoney) {
        console.log(`Yes! You have ${(budget - totalMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalMoney - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["3000", "Summer", "11"]);
