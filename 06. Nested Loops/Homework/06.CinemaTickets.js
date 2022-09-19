function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let studentCounter = 0;
  let standardCounter = 0;
  let kidCounter = 0;
  while (command !== "Finish") {
    let movieName = command;
    index++;
    let allTickets = Number(input[index]);
    let freeSpaceInCinema = allTickets;
    index++;
    let ticketType = input[index];
    while (ticketType !== "End") {
      switch (ticketType) {
        case "student":
          studentCounter++;
          break;
        case "standard":
          standardCounter++;
          break;
        case "kid":
          kidCounter++;
          break;
      }
      freeSpaceInCinema--;
      if (freeSpaceInCinema === 0) {
        break;
      }
      index++;
      ticketType = input[index];
    }
    let boughtTickets = allTickets - freeSpaceInCinema;
    let percentageFull = (boughtTickets / allTickets) * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
    index++;
    command = input[index];
  }
  let totalBoughtTickets = studentCounter + standardCounter + kidCounter;
  console.log(`Total tickets: ${totalBoughtTickets}`);
  console.log(
    `${((studentCounter / totalBoughtTickets) * 100).toFixed(2)}% student tickets.`
  );
  console.log(
    `${((standardCounter / totalBoughtTickets) * 100).toFixed(2)}% standard tickets.`
  );
  console.log(
    `${((kidCounter / totalBoughtTickets) * 100).toFixed(2)}% kids tickets.`
  );
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
