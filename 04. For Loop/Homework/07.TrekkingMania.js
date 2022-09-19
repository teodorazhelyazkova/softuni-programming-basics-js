function trekkingMania(input) {
    let index = 0;
    const groupsCount = Number(input[index]);
    index++;
    let musalaCounter = 0;
    let monblanCounter = 0;
    let kilimangaroCounter = 0;
    let k2Counter = 0;
    let everestCounter = 0;
    let totalClimbers = 0;

    for(let i = 0; i < groupsCount; i++) {
        let peopleInGroupsCount = Number(input[index]);
        totalClimbers += peopleInGroupsCount;
        index++;
        
        if(peopleInGroupsCount <=5) {
            musalaCounter += peopleInGroupsCount;
        } else if(peopleInGroupsCount >= 6 && peopleInGroupsCount <= 12) {
            monblanCounter += peopleInGroupsCount;
        } else if(peopleInGroupsCount >= 13 && peopleInGroupsCount <= 25) {
            kilimangaroCounter += peopleInGroupsCount;
        } else if(peopleInGroupsCount >= 26 && peopleInGroupsCount <= 40) {
            k2Counter += peopleInGroupsCount;
        } else if(peopleInGroupsCount >= 41) {
            everestCounter += peopleInGroupsCount;
        }
    }
   
    let musalaPercentage = musalaCounter / totalClimbers * 100;
    let monblanPercentage = monblanCounter / totalClimbers * 100;
    let kilimangaroPercentage = kilimangaroCounter / totalClimbers * 100;
    let k2Percentage = k2Counter / totalClimbers * 100;
    let everestPercentage = everestCounter / totalClimbers * 100;

    console.log(`${musalaPercentage.toFixed(2)}%`);
    console.log(`${monblanPercentage.toFixed(2)}%`);
    console.log(`${kilimangaroPercentage.toFixed(2)}%`);
    console.log(`${k2Percentage.toFixed(2)}%`);
    console.log(`${everestPercentage.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
