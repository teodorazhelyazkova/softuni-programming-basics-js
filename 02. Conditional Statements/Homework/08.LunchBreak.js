function lunchBreak(input) {
    const tvSeries = input[0];
    const episodeDuration = Number(input[1]);
    const breakTime = Number(input[2]);

    const lunchTime = breakTime / 8;
    const restTime = breakTime / 4;

    const remainingTime = Math.abs(breakTime - lunchTime - restTime);
    const freeTime = Math.abs(remainingTime - episodeDuration);

    if (remainingTime >= episodeDuration) {
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(freeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(freeTime)} more minutes.`);
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
