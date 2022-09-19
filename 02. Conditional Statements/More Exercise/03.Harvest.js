function harvest(input) {
    const xSquareMetersVineyard = Number(input[0]);
    const yGrapesPerOneSquareMeter = Number(input[1]);
    const zNeededLitersWine = Number(input[2]);
    const workersCount = Number(input[3]);

    const grapesForWine = (xSquareMetersVineyard * yGrapesPerOneSquareMeter) * 0.4;
    const totalLitersOfWine = grapesForWine / 2.5;
    const differenceInLiters = Math.abs(totalLitersOfWine - zNeededLitersWine);

    if (totalLitersOfWine < zNeededLitersWine) {
        console.log(`It will be a tough winter! More ${Math.floor(differenceInLiters)} liters wine needed.`);
    } else if (totalLitersOfWine >= zNeededLitersWine) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(totalLitersOfWine)} liters.`);
        console.log(`${Math.ceil(differenceInLiters)} liters left -> ${Math.ceil(differenceInLiters / workersCount)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);