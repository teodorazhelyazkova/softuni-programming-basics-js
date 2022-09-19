function cake(input) {
  let index = 0;
  const length = Number(input[index]);
  index++;
  const width = Number(input[index]);
  index++;
  let cakePiecesCount = length * width;
  let cakePiecesTakenCounter = 0;
  let command = input[index];

  while (command != "STOP") {
    command = Number(input[index]);
    cakePiecesTakenCounter += command;
    index++;

    if (cakePiecesTakenCounter >= cakePiecesCount) {      
      break;
    }

    command = input[index];
  }

  let difference = Math.abs(cakePiecesCount - cakePiecesTakenCounter);

  if (command === "STOP") {
    console.log(`${difference} pieces are left.`);
  } else {
    console.log(`No more cake left! You need ${difference} pieces more.`);
  }
}

// cake(["10", "2", "2", "4", "6", "STOP"]);

cake(["10", "10", "20", "20", "20", "20", "21"]);
