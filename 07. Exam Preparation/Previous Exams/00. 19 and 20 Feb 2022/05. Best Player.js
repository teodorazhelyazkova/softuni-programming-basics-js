function bestPlayer(input) {
    let index = 0;
    let playerName = input[index];
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayerName = "";
    
    while (playerName !== "END") {
      index++;
      let goalsCount = Number(input[index]);
  
      if (goalsCount > maxGoals) {
        maxGoals = goalsCount;
        bestPlayerName = playerName;
      }
  
      if (goalsCount >= 10) {
        break;
      }
  
      index++;
      playerName = input[index];
    }
    console.log(`${bestPlayerName} is the best player!`);
  
    if (maxGoals >= 3) {
      console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
      console.log(`He has scored ${maxGoals} goals.`);
    }
  }

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
