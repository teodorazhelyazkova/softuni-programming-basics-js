function fishland(input) {
   const skumriyaPricePerKg = Number(input[0]);
   const tsatsaPricePerKg = Number(input[1]);
   const palamudKg = Number(input[2]);
   const safridKg = Number(input[3]);
   const midiKg = Number(input[4]);
   const palamudPerKg = skumriyaPricePerKg * 0.6 + skumriyaPricePerKg;
   const safridPricePerKg = tsatsaPricePerKg * 0.8 + tsatsaPricePerKg;
   const midiPricePerKg = 7.50;

   const palamudCost = palamudKg * palamudPerKg;
   const safridCost = safridKg * safridPricePerKg;
   const midiCost = midiKg * midiPricePerKg;

   const totalMoneyNeeded = palamudCost + safridCost + midiCost
   console.log(totalMoneyNeeded.toFixed(2));
}

fishland([6.90, 4.20, 1.5, 2.5, 1]);