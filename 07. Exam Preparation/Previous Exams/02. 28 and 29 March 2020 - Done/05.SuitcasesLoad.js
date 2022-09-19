function suitcasesLoad(input) {
  let index = 0;
  let airplaneCapacity = Number(input[index]);
  index++;
  let suitcaseCounter = 0;
  let isFull = false;

  while (input[index] !== "End") {
    suitcaseCounter++;
    let suitcaseVolume = Number(input[index]);
    index++;

    if (suitcaseCounter % 3 === 0) {
      suitcaseVolume += suitcaseVolume * 0.1;
    }

    if (airplaneCapacity >= suitcaseVolume) {
      airplaneCapacity -= suitcaseVolume;
    } else {
      console.log("No more space!");
      suitcaseCounter--;
      isFull = true;
      break;
    }
    
  }
  if (!isFull) {
    console.log("Congratulations! All suitcases are loaded!");
  }
  console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
}

// suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
// suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);
