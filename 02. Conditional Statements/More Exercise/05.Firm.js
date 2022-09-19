function firm(input) {
    const neededHours = Number(input[0]);
    const daysTheFirmHas = Number(input[1]);
    const workersWorkingExtraHoursCount = Number(input[2]);

    const hoursWorking = (daysTheFirmHas * 8) - (daysTheFirmHas * 8 * 0.1);
    const extraHoursWorking = workersWorkingExtraHoursCount * (daysTheFirmHas * 2);
    const totalWorkingHoursAvailable = Math.floor(hoursWorking + extraHoursWorking);
    const differenceInHours = Math.abs(totalWorkingHoursAvailable - neededHours);

    if (totalWorkingHoursAvailable >= neededHours) {
        console.log(`Yes!${differenceInHours} hours left.`);
    } else {
        console.log(`Not enough time!${differenceInHours} hours needed.`);
    }
}

firm([90, 7, 3]);