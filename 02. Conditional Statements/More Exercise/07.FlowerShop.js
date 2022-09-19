function flowerShop(input) {
    const priceMagnolia = 3.25;
    const priceZumbul = 4;
    const priceRose = 3.5;
    const priceCactus = 8;

    const magnoliasCount = Number(input[0]);
    const zumbulsCount = Number(input[1]);
    const rosesCount = Number(input[2]);
    const cactusesCount = Number(input[3]);
    const giftPrice = Number(input[4]);

    const totalMoneyBeforeTax = (magnoliasCount * priceMagnolia) + 
    (zumbulsCount * priceZumbul) + 
    (rosesCount * priceRose) +
    (cactusesCount * priceCactus)

    const totalMoneyAfterTax = totalMoneyBeforeTax - (totalMoneyBeforeTax * 0.05);
    const differenceInMoney = Math.abs(totalMoneyAfterTax - giftPrice);

    if (totalMoneyAfterTax >= giftPrice) {
        console.log(`She is left with ${Math.floor(differenceInMoney)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(differenceInMoney)} leva.`);
    }
}

flowerShop([2, 3, 5, 1, 50]);