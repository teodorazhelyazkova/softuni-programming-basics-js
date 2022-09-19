function equalPairs(input) {
    const pairsCount = Number(input[0]);

    let firstPairValue = Number(input[1]) + Number(input[2]);
    let maxDifference = 0;

    for (let i = 2; i < (pairsCount * 2); i = i + 2) {
        const firstNumber = Number(input[i + 1]);
        const secondNumber = Number(input[i + 2]);
        const currentPairValue = firstNumber + secondNumber;

        const difference = firstPairValue - currentPairValue;
        if (difference !== 0 && Math.abs(difference) > Math.abs(maxDifference)) {
            maxDifference = Math.abs(difference);
        } 

        firstPairValue = currentPairValue;
    }

    if (maxDifference !== 0) {
        console.log(`No, maxdiff=${Math.abs(maxDifference)}`);
    } else {
        console.log(`Yes, value=${firstPairValue}`);
    }
}

equalPairs([3, 1, 2, 0, 3, 4, -1]);