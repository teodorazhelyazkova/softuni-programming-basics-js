function pets(input) {
    const daysAway = Number(input[0]);
    const foodLeftInKg = Number(input[1]);
    const foodPerDayForDogInKg = Number(input[2]);
    const foodPerDayForCatInKg = Number(input[3]);
    const foodPerDayForTurtleInGrams = Number(input[4]);

    const foodPerDayForTurtleInKg = foodPerDayForTurtleInGrams / 1000;

    const foodNeededForDog = daysAway * foodPerDayForDogInKg;
    const foodNeededForCat = daysAway * foodPerDayForCatInKg;
    const foodNeededForTurtle = daysAway * foodPerDayForTurtleInKg;
    const totalFoodNeededInKg= foodNeededForCat + foodNeededForDog + foodNeededForTurtle; 
    const differenceInKg = Math.abs(foodLeftInKg - totalFoodNeededInKg);
    
    if (totalFoodNeededInKg <= foodLeftInKg) {
        console.log(`${Math.floor(differenceInKg)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(differenceInKg)} more kilos of food are needed.`)
    }
}

pets([2, 10, 1, 1, 1200]);