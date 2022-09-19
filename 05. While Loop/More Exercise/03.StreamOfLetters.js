function streamOfLetters(input) {
  let index = 0;
  let command = input[index];
  let finalMessage = "";
  let tempMessage = "";
  let isLetterCMet = false;
  let isLetterOMet = false;
  let isLetterNMet = false;

  while (command !== "End") {
    if (command.toLowerCase() != command.toUpperCase()) {
      if (command === "c" && isLetterCMet === false) {
        isLetterCMet = true;
      } else if (command === "o" && !isLetterOMet) {
        isLetterOMet = true;
      } else if (command === "n" && !isLetterNMet) {
        isLetterNMet = true;
      } else {
        tempMessage += command;
      }

      if (isLetterCMet && isLetterOMet && isLetterNMet) {
        finalMessage += tempMessage + " ";
        tempMessage = "";
        isLetterCMet = false;
        isLetterOMet = false;
        isLetterNMet = false;
      }
    }

    index++;
    command = input[index];
  }

  console.log(finalMessage);
}

streamOfLetters([
  "H",
  "n",
  ":",
  "e",
  "l",
  "l",
  "o",
  "o",
  "c",
  "t",
  "c",
  "h",
  "o",
  "e",
  "r",
  "e",
  "n",
  "e",
  "End",
]);
