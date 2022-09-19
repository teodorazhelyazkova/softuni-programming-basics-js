function cleverLily(input) {
    let age = Number(input[0]);
    let washingmachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyGift = 10;
    let toyCounter = 0;
    let money = 0;

    for(let i = 1; i <= age; i++) {
        if(i % 2 === 0) {
            money += moneyGift;
            moneyGift += 10;
            money -= 1;
        } else {
            toyCounter++;
        }
    }

    let moneyFromToys = toyCounter * toyPrice;
    money += moneyFromToys;
    let difference = Math.abs(money - washingmachinePrice);

    if(money >= washingmachinePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

cleverLily(["21", "1570.98", "3"]);
