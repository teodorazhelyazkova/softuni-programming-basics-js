function moving(input) {
  let index = 0;
  const widthFreeSpace = Number(input[index]);
  index++;
  const lengthFreeSpace = Number(input[index]);
  index++;
  const heightFreeSpace = Number(input[index]);
  index++;
  let command = input[index];
  const actualFreeSpace = widthFreeSpace * lengthFreeSpace * heightFreeSpace;
  let neededFreeSpace = 0;
  while (command !== "Done") {
    command = Number(input[index]);
    neededFreeSpace += command;
    if (neededFreeSpace >= actualFreeSpace) {
      break;
    }
    index++;
    command = input[index];
  }

  let difference = Math.abs(actualFreeSpace - neededFreeSpace);

  if (command === "Done") {
    console.log(`${difference} Cubic meters left.`);
  } else {
    console.log(`No more free space! You need ${difference} Cubic meters more.`);
  }
}

// moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
