function vegetableMarket(input){
    const vegetablePricePerKg = Number(input[0]);
    const fruitPricePerKg = Number(input[1]);
    const totalVegetableKg = Number(input[2]);
    const totalFruitKg = Number(input[3]);
    const vegetableRevenue = vegetablePricePerKg * totalVegetableKg
    const fruitRevenue = fruitPricePerKg * totalFruitKg
    const totalRevenueInEur = (vegetableRevenue + fruitRevenue) / 1.94;
    console.log(totalRevenueInEur.toFixed(2));
}
vegetableMarket([0.194, 19.4, 10, 10]);