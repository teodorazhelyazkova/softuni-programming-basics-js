function pipesInPool(input){
    const volume = Number(input[0]);
    const p1LitersPerHour = Number(input[1]);
    const p2LitersPerHour = Number(input[2]);
    const hours = Number(input[3]);

    const p1Liters = p1LitersPerHour * hours;
    const p2Liters = p2LitersPerHour * hours;
    const totalLiters = p1Liters + p2Liters;
    
    if (totalLiters <= volume) {
        const totalLitersInPercentage = (totalLiters / volume) * 100;
        const p1LitersInPercentage = (p1Liters / totalLiters) * 100;
        const p2LitersInPercentage = (p2Liters / totalLiters) * 100;
        console.log(`The pool is ${totalLitersInPercentage.toFixed(2)}% full. Pipe 1: ${p1LitersInPercentage.toFixed(2)}%. Pipe 2: ${p2LitersInPercentage.toFixed(2)}%.`);
    } else {
        const extraLiters = totalLiters - volume
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${extraLiters.toFixed(2)} liters.`);
    }
 
}

pipesInPool([1000, 100, 120, 3]);