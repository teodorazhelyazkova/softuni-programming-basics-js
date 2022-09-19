function tennisRanklist(input) {
    let index = 0;
    const tournamentsCount = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let winnerCounter = 0;
    let points = 0;

    for (let i = 0; i < tournamentsCount; i++) {
        let tournamentStage = input[index];
        if (tournamentStage === "W") {
            points += 2000
            winnerCounter++;
        } else if (tournamentStage === "F") {
            points += 1200;
        } else if (tournamentStage === "SF") {
            points += 720;
        }
        index++;
    }

    const averagePoints = Math.floor(points / tournamentsCount);
    const winnerPercentage = winnerCounter / tournamentsCount * 100;
    console.log(`Final points: ${points + startingPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winnerPercentage.toFixed(2)}%`)
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
