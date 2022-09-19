function gameOfIntervals(input) {
    let index = 0;
    const gameRounds = Number(input[index]);
    index++;
    let score = 0;
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    let p6Counter = 0;

    for (let i = 0; i < gameRounds; i++) {
        let number = Number(input[index]);
        if (number >= 0 && number <= 9) {
            score += 0.2 * number;
            p1Counter++;
        } else if (number >= 10 && number <= 19) {
            score += 0.3 * number;
            p2Counter++;
        } else if (number >= 20 && number <= 29) {
            score += 0.4 * number;
            p3Counter++;
        } else if (number >= 30 && number <= 39) {
            score += 50;
            p4Counter++;
        } else if (number >= 40 && number <= 50) {
            score += 100;
            p5Counter++;
        } else if (number < 0 || number > 50) {
            score = score / 2;
            p6Counter++;
        } 
        index++;
    }

    const p1Percentage = p1Counter / gameRounds * 100;
    const p2Percentage = p2Counter / gameRounds * 100;
    const p3Percentage = p3Counter / gameRounds * 100;
    const p4Percentage = p4Counter / gameRounds * 100;
    const p5Percentage = p5Counter / gameRounds * 100;
    const p6Percentage = Math.abs(p6Counter / gameRounds * 100);

    console.log(score.toFixed(2));
    console.log(`From 0 to 9: ${p1Percentage.toFixed(2)}%`);
    console.log(`From 10 to 19: ${p2Percentage.toFixed(2)}%`);
    console.log(`From 20 to 29: ${p3Percentage.toFixed(2)}%`);
    console.log(`From 30 to 39: ${p4Percentage.toFixed(2)}%`);
    console.log(`From 40 to 50: ${p5Percentage.toFixed(2)}%`);
    console.log(`Invalid numbers: ${p6Percentage.toFixed(2)}%`);

}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20])