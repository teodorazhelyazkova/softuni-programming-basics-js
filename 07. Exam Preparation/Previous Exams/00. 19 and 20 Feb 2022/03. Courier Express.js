function courierExpress(input) {
  const weightOfDeliveryInKg = Number(input[0]);
  const serviceType = input[1];
  const distanceInKm = Number(input[2]);
  let pricePerKm = 0;
  let extraPrice = 0;
  let finalPrice = 0;
  let extraCost = 0;

  switch (serviceType) {
    case "standard":
      if (weightOfDeliveryInKg < 1) {
        pricePerKm = 0.03;
      } else if (weightOfDeliveryInKg >= 1 && weightOfDeliveryInKg < 5) {
        pricePerKm = 0.05;
      } else if (weightOfDeliveryInKg >= 10 && weightOfDeliveryInKg < 40) {
        pricePerKm = 0.1;
      } else if (weightOfDeliveryInKg >= 40 && weightOfDeliveryInKg < 90) {
        pricePerKm = 0.15;
      } else if (weightOfDeliveryInKg >= 90 && weightOfDeliveryInKg < 150) {
        pricePerKm = 0.2;
      }
      finalPrice = distanceInKm * pricePerKm;
      break;
    case "express":
      if (weightOfDeliveryInKg < 1) {
        pricePerKm = 0.03;
        extraPrice = 0.8 * pricePerKm;
      } else if (weightOfDeliveryInKg >= 1 && weightOfDeliveryInKg < 5) {
        pricePerKm = 0.05;
        extraPrice = 0.4 * pricePerKm;
      } else if (weightOfDeliveryInKg >= 10 && weightOfDeliveryInKg < 40) {
        pricePerKm = 0.1;
        extraPrice = 0.05 * pricePerKm;
      } else if (weightOfDeliveryInKg >= 40 && weightOfDeliveryInKg < 90) {
        pricePerKm = 0.15;
        extraPrice = 0.02 * pricePerKm;
      } else if (weightOfDeliveryInKg >= 90 && weightOfDeliveryInKg < 150) {
        pricePerKm = 0.2;
        extraPrice = 0.01 * pricePerKm;
      }

      finalPrice = distanceInKm * pricePerKm;
      extraCost = extraPrice * weightOfDeliveryInKg;
      finalPrice += extraCost * distanceInKm;

      break;
  }
  console.log(
    `The delivery of your shipment with weight of ${weightOfDeliveryInKg.toFixed(
      3
    )} kg. would cost ${finalPrice.toFixed(2)} lv.`
  );
}

// courierExpress(["1.5", "standard", "100"]);
courierExpress(["87", "express", "130"]);
