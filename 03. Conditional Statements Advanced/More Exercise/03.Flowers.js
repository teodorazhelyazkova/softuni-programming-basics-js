function flowers(input) {
    const hrizantemiCount = Number(input[0]);
    const rosesCount = Number(input[1]);
    const tulipsCount = Number(input[2]);
    const totalFlowersCount = hrizantemiCount + rosesCount + tulipsCount;
    const season = input[3];
    const isHoliday = input[4];
    let hrizantemiPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let priceForBoquet = 0;
    let priceforMakingBoquet = 2;

    switch (season) {
        case "Spring":
        case "Summer":
            hrizantemiPrice = 2;
            rosesPrice = 4.1;
            tulipsPrice = 2.5;
            break;
        case "Autumn":
        case "Winter":
            hrizantemiPrice = 3.75;
            rosesPrice = 4.5;
            tulipsPrice = 4.15;
            break;
    }

    priceForBoquet += (hrizantemiPrice * hrizantemiCount) + (rosesPrice * rosesCount) + (tulipsCount * tulipsPrice);

    if (isHoliday === "Y") {
        priceForBoquet += 0.15 * priceForBoquet;
    }

    if (season === "Spring" && tulipsCount > 7) {
        priceForBoquet -= 0.05 * priceForBoquet;
    }

    if (season === "Winter" && rosesCount >= 10) {
        priceForBoquet -= 0.1 * priceForBoquet;
    }

    if (totalFlowersCount > 20) {
        priceForBoquet -= 0.2 * priceForBoquet;
    }

    priceForBoquet += priceforMakingBoquet;

    console.log(priceForBoquet.toFixed(2));
}

flowers([2, 4, 8, "Spring", "Y"]);
