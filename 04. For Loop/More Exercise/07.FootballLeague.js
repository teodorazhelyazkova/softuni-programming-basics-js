function footballLeague(input) {
    let index = 0;
    const stadiumCapacity = Number(input[index]);
    index++;
    const fansCount = Number(input[index]);
    index++;
    let aCounter = 0;
    let bCounter = 0;
    let vCounter = 0;
    let gCounter = 0;


    for (let i = 0; i < fansCount; i++) {
        let sector = input[index];
        switch (sector) {
            case "A": aCounter++; break;
            case "B": bCounter++; break;
            case "V": vCounter++; break;
            case "G": gCounter++; break;
        }

        index++;

    }

    const aPercentage = aCounter / fansCount * 100;
    const bPercentage = bCounter / fansCount * 100;
    const vPercentage = vCounter / fansCount * 100;
    const gPercentage = gCounter / fansCount * 100;
    const allSectorsPercentage = (aCounter + bCounter + vCounter + gCounter) / stadiumCapacity * 100;
    
    console.log(`${aPercentage.toFixed(2)}%`);
    console.log(`${bPercentage.toFixed(2)}%`);
    console.log(`${vPercentage.toFixed(2)}%`);
    console.log(`${gPercentage.toFixed(2)}%`);
    console.log(`${allSectorsPercentage.toFixed(2)}%`);

}

footballLeague([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);