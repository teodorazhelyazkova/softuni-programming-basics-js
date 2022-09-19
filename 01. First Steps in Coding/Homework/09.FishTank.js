function fishTank(input){
    //INPUT
    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentage = Number(input[3]) / 100;
    //SOLUTION
    const fishTankVolume = length * width * height;
    const fishTankVolumeInLiters = fishTankVolume / 1000;
    const fishTankVolumeLitersNeeded = fishTankVolumeInLiters * (1 - percentage);
    console.log(fishTankVolumeLitersNeeded);
}
fishTank(["85", "75", "47", "17"]);