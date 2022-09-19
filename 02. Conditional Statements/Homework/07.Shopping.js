function shopping(input) {
    const singleVideoCardPrice = 250;
   
    const budget = Number(input[0]);
    const videoCardsCount = Number(input[1]);
    const processorCount = Number(input[2]);
    const ramCount = Number(input[3]);

    const videoCardsPrice = singleVideoCardPrice * videoCardsCount;

    const processorPrice = 0.35 * videoCardsPrice;
    const ramPrice = 0.1 * videoCardsPrice;

    let finalPrice = videoCardsPrice + processorCount * processorPrice + ramCount * ramPrice

    if (videoCardsCount > processorCount) {
        finalPrice *= 0.85;
    }

    if(budget >= finalPrice) {
        let leftMoney = budget - finalPrice
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`)
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }
 
}

shopping(["920.45", "3", "1", "1"]);

