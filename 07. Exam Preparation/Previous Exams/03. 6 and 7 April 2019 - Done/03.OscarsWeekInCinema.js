function oscarsWeekInCinema(input) {
  const movieName = input[0];
  const hallType = input[1];
  const ticketsBought = Number(input[2]);
  let ticketPrice = 0;

  switch (hallType) {
    case "normal":
      switch (movieName) {
        case "A Star Is Born":
          ticketPrice = 7.5;
          break;
        case "Bohemian Rhapsody":
          ticketPrice = 7.35;
          break;
        case "Green Book":
          ticketPrice = 8.15;
          break;
        case "The Favourite":
          ticketPrice = 8.75;
          break;
      }
      break;
    case "luxury":
        switch (movieName) {
            case "A Star Is Born":
              ticketPrice = 10.5;
              break;
            case "Bohemian Rhapsody":
              ticketPrice = 9.45;
              break;
            case "Green Book":
              ticketPrice = 10.25;
              break;
            case "The Favourite":
              ticketPrice = 11.55;
              break;
          }
      break;
    case "ultra luxury":
        switch (movieName) {
            case "A Star Is Born":
              ticketPrice = 13.5;
              break;
            case "Bohemian Rhapsody":
              ticketPrice = 12.75;
              break;
            case "Green Book":
              ticketPrice = 13.25;
              break;
            case "The Favourite":
              ticketPrice = 13.95;
              break;
          }
      break;
  }
  const totalMoney = ticketPrice * ticketsBought;
  console.log(`${movieName} -> ${totalMoney.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
