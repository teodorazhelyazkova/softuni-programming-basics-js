function mountainRun(input) {
  const recordInSeconds = Number(input[0]);
  const distanceInMeters = Number(input[1]);
  const timeInSecondsForClimbingOneMeter = Number(input[2]);

  const secondsForDistance =
    distanceInMeters * timeInSecondsForClimbingOneMeter;
  const addedSecondsDueToTerene = Math.floor(distanceInMeters / 50) * 30;
  const totalSeconds = secondsForDistance + addedSecondsDueToTerene;

  if (recordInSeconds > totalSeconds) {
    console.log(
      `Yes! The new record is ${totalSeconds.toFixed(2)} seconds.`
    );
  } else {
    let secondsExtra = totalSeconds - recordInSeconds;
    console.log(`No! He was ${secondsExtra.toFixed(2)} seconds slower.`);
  }
}

// mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
