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

  for (let i = 1; i <= groupsCount; i++) {
    let numberOfPeopleInTheGroup = Number(input[index]);
    index++;
    totalClimbers += numberOfPeopleInTheGroup;

    if (numberOfPeopleInTheGroup <= 5) {
      musalaCounter += numberOfPeopleInTheGroup;
    } else if (
      numberOfPeopleInTheGroup >= 6 &&
      numberOfPeopleInTheGroup <= 12
    ) {
      monblanCounter += numberOfPeopleInTheGroup;
    } else if (
      numberOfPeopleInTheGroup >= 13 &&
      numberOfPeopleInTheGroup <= 25
    ) {
      kilimangaroCounter += numberOfPeopleInTheGroup;
    } else if (
      numberOfPeopleInTheGroup >= 26 &&
      numberOfPeopleInTheGroup <= 40
    ) {
      k2Counter += numberOfPeopleInTheGroup;
    } else if (numberOfPeopleInTheGroup >= 41) {
      everestCounter += numberOfPeopleInTheGroup;
    }
  }
  const percentageMusala = (musalaCounter / totalClimbers) * 100;
  const percentageMonblan = (monblanCounter / totalClimbers) * 100;
  const percentageKilimangaro = (kilimangaroCounter / totalClimbers) * 100;
  const percentageK2 = (k2Counter / totalClimbers) * 100;
  const percentageEverest = (everestCounter / totalClimbers) * 100;
  console.log(`${percentageMusala.toFixed(2)}%`);
  console.log(`${percentageMonblan.toFixed(2)}%`);
  console.log(`${percentageKilimangaro.toFixed(2)}%`);
  console.log(`${percentageK2.toFixed(2)}%`);
  console.log(`${percentageEverest.toFixed(2)}%`);
}

trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
