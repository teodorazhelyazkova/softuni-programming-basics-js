function sleepyTomCat(input) {
    const restDays = Number(input[0]);
    const minutesPlayingPerWorkingDay = 63;
    const minutesPlayingPerRestDay = 127;

    const totalMinPlayingRestDays = minutesPlayingPerRestDay * restDays;
    const totalMinPlayingWorkingDays = (365 - restDays) * minutesPlayingPerWorkingDay;
    const totalMinPlayingForBothRestAndWorkingDays = totalMinPlayingRestDays + totalMinPlayingWorkingDays;
    const differenceFromNorm = Math.abs(30000 - totalMinPlayingForBothRestAndWorkingDays);
    const hoursDifference = Math.floor(differenceFromNorm / 60);
    const minutesDifference = differenceFromNorm % 60;

    if (totalMinPlayingForBothRestAndWorkingDays > 30000) {
        console.log("Tom will run away");
        console.log(`${hoursDifference} hours and ${minutesDifference} minutes more for play`);
    } else if (totalMinPlayingForBothRestAndWorkingDays < 30000) {
        console.log("Tom sleeps well");
        console.log(`${hoursDifference} hours and ${minutesDifference} minutes less for play`);
    }
}

sleepyTomCat(["113"]);