function changeBureau(input) {
    const bitcoinCount = Number(input[0]);
    const chineseYuanCount = Number(input[1]);
    const commissionRate = Number(input[2]);


    const dollarInBgn = 1.76;
    const bitcoinInBgn = 1168;
    const chineseYuanInBgn = 0.15 * dollarInBgn;
    const euroInBgn = 1.95;

    const changeToBgn = (bitcoinCount * bitcoinInBgn) + (chineseYuanCount * chineseYuanInBgn);
    const changeToEuro = changeToBgn / euroInBgn;
    const afterCommission = changeToEuro - (changeToEuro * (commissionRate / 100));

    console.log(afterCommission.toFixed(2));
}

changeBureau(["1", "5", "5"]);