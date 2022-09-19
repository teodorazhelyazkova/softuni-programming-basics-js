function logistics(input) {
    let index = 0;
    const goodsCount = Number(input[index]);
    index++;
    let busCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;

    for (let i = 0; i < goodsCount; i++) {

        if (input[index] <= 3) {
            busCounter += Number(input[index]);
        } else if (input[index] >= 4 && input[index] <= 11) {
            truckCounter += Number(input[index]);
        } else {
            trainCounter += Number(input[index]);
        }
        index++
    }

    let totalGoods = busCounter + truckCounter + trainCounter;
    let averagePrice = ((busCounter * 200) + (truckCounter * 175) + (trainCounter * 120)) / totalGoods;
    let busPercentage = busCounter / totalGoods * 100;
    let truckPercentage = truckCounter / totalGoods * 100;
    let trainPercentage = trainCounter / totalGoods * 100;

    console.log(averagePrice.toFixed(2));
    console.log(`${busPercentage.toFixed(2)}%`);
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);

}

logistics([4, 1, 5, 16, 3]);
// logistics([5, 2, 10, 20, 1, 7]);