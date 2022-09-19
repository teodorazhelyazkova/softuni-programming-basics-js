function workout(input) {
  let index = 0;
  const daysN = Number(input[index]);
  index++;
  let kilometersRunFirstDay = Number(input[index]);
  index++;
  let kmPerDay = kilometersRunFirstDay;
  let totalKm = 0;

  for (let i = 0; i < daysN; i++) {
    let percentageK = Number(input[index]);
    index++;
    let extraKmPerDay = (kmPerDay * percentageK) / 100;
    kmPerDay += extraKmPerDay;
    totalKm += kmPerDay;
  }

  totalKm += kilometersRunFirstDay;

  let difference = Math.abs(totalKm - 1000);

  if (totalKm < 1000) {
    console.log(
      `Sorry Mrs. Ivanova, you need to run ${Math.ceil(
        difference
      )} more kilometers`
    );
  } else if (totalKm >= 1000) {
    console.log(
      `You've done a great job running ${Math.ceil(
        difference
      )} more kilometers!`
    );
  }
}

workout(["5", "30", "10", "15", "20", "5", "12"]);
