function trainingLab(input) {
  const wLengthInMeters = Number(input[0]);
  const hWidthInMeters = Number(input[1]);
  const wLengthInCm =  wLengthInMeters * 100; 
  const hWidthInCm = hWidthInMeters * 100;
  const hWidthInCmWithoutCorridor = hWidthInCm - 100;
  const workingPlacesPerRow = Math.floor(hWidthInCmWithoutCorridor / 70);
  const rows = Math.floor(wLengthInCm / 120);
  const totalWorkingPlaces = (rows * workingPlacesPerRow) - 3;
  console.log(totalWorkingPlaces); 
}

trainingLab([15, 8.9]);