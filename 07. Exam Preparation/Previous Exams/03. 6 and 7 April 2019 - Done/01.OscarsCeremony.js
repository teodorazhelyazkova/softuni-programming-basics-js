function oscarCeremony(input) {
  const hallRentPrice = Number(input[0]);

  const statuesPrice = hallRentPrice - 0.3 * hallRentPrice;
  const cateringPrice = statuesPrice - 0.15 * statuesPrice;
  const musicPrice = cateringPrice / 2;

  const finalPrice = statuesPrice + cateringPrice + musicPrice + hallRentPrice;

  console.log(finalPrice.toFixed(2));
}

oscarCeremony(["3500"]);
