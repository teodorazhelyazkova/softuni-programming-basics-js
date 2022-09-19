function onTime(input) {
    const examHour = Number(input[0]);
    const examMinutes = Number(input[1]);
    const arrivalHour = Number(input[2]);
    const arrivalMinutes = Number(input[3]);

    const totalExamMinutes = examHour * 60 + examMinutes;
    const totalArrivalMinutes = arrivalHour * 60 + arrivalMinutes;
    const differenceInTime = Math.abs(totalExamMinutes - totalArrivalMinutes);
    const hourDifference = Math.floor(differenceInTime / 60);
    let minutesDifference = differenceInTime % 60;
    if (minutesDifference === 0 || (minutesDifference < 10 && hourDifference > 0)) {
        minutesDifference = `0${minutesDifference}`;
    }

    if (totalArrivalMinutes === totalExamMinutes) {
        console.log("On time");
    } else if (totalArrivalMinutes > totalExamMinutes && differenceInTime < 60) {
        console.log("Late");
        console.log(`${minutesDifference} minutes after the start`)
    } else if (totalArrivalMinutes > totalExamMinutes && differenceInTime >= 60) {
        console.log("Late");
        console.log(`${hourDifference}:${minutesDifference} hours after the start`)
    } else if (differenceInTime <= 30) {
        console.log("On time");
        console.log(`${minutesDifference} minutes before the start`);
    } else if (differenceInTime > 30 && differenceInTime < 60) {
        console.log("Early");
        console.log(`${minutesDifference} minutes before the start`);
    } else {
        console.log("Early");
        console.log(`${hourDifference}:${minutesDifference} hours before the start`);
    }
}

onTime(["16", "00", "15", "00"]);

