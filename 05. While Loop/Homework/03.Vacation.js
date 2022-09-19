function vacation(input) {
    const vacationPrice = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let daysSpend = 0;
    let dayCounter = 0;
    while (money < vacationPrice) {

        let command = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        dayCounter++;

        switch (command) {
            case "spend":
                money -= currentMoney;
                if (money < 0) {
                    money = 0;
                }
                daysSpend++;
                break;
            case "save":
                money += currentMoney;
                daysSpend = 0;
                break;

        }

        if (daysSpend >= 5) {
            console.log("You can't save the money.");
            console.log(`${dayCounter}`);
            break;
        }

    }

    if (money >= vacationPrice) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }

}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
