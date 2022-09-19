function movieRatings(input) {
  let index = 0;
  const moviesCount = Number(input[index]);
  index++;
  let movieNameHighestRating = "";
  let movieNameLowestRating = "";
  let totalRating = 0;
  let highestRating = Number.MIN_SAFE_INTEGER;
  let lowestRating = Number.MAX_SAFE_INTEGER;

  for (let movies = 1; movies <= moviesCount; movies++) {
    let movieName = input[index];
    index++;
    let movieRating = Number(input[index]);
    index++;

    if (movieRating > highestRating) {
      movieNameHighestRating = movieName;
      highestRating = movieRating;
    }

    if(movieRating < lowestRating) {
        movieNameLowestRating = movieName;
        lowestRating = movieRating;
    }

    totalRating += movieRating;
  }
  const averageRating = totalRating / moviesCount;

  console.log(`${movieNameHighestRating} is with highest rating: ${highestRating.toFixed(1)}`);
  console.log(`${movieNameLowestRating} is with lowest rating: ${lowestRating.toFixed(1)}`);
  console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
