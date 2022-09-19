function cinemaTickets(input) {
  let index = 0;
  let studentCounter = 0;
  let standardCounter = 0;
  let kidCounter = 0;
  let command = input[index];

  while (command !== "Finish") {
    let movieName = command;
    index++;

    let freeSpacesInTheCinema = Number(input[index]);
    let allFreeTickets = freeSpacesInTheCinema;
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

      freeSpacesInTheCinema--;

      if (freeSpacesInTheCinema === 0) {
        break;
      }

      index++;
      ticketType = input[index];
    }

    let ticketsBought = allFreeTickets - freeSpacesInTheCinema;

    let percentageFullCinema = (ticketsBought / allFreeTickets) * 100;
    console.log(`${movieName} - ${percentageFullCinema.toFixed(2)}% full.`);

    index++;
    command = input[index];
  }

  let totalTicketsBought = studentCounter + standardCounter + kidCounter;

  console.log(`Total tickets: ${totalTicketsBought}`);
  console.log(
    `${((studentCounter / totalTicketsBought) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((standardCounter / totalTicketsBought) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidCounter / totalTicketsBought) * 100).toFixed(2)}% kids tickets.`
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
