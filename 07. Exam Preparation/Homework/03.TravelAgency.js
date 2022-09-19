function travelAgency(input) {
  const town = input[0];
  const package = input[1];
  const vipDiscount = input[2];
  const days = Number(input[3]);
  let pricePerDay = 0;
  let isValid = true;

  switch (town) {
    case "Bansko":
    case "Borovets":
      switch (package) {
        case "noEquipment":
          pricePerDay = 80;
          if (vipDiscount === "yes") {
            pricePerDay -= pricePerDay * 0.05;
          }
          break;
        case "withEquipment":
          pricePerDay = 100;
          if (vipDiscount === "yes") {
            pricePerDay -= pricePerDay * 0.1;
          }
          break;
        default:
          isValid = false;
          break;
      }
      break;
    case "Varna":
    case "Burgas":
      switch (package) {
        case "noBreakfast":
          pricePerDay = 100;
          if (vipDiscount === "yes") {
            pricePerDay -= pricePerDay * 0.07;
          }
          break;
        case "withBreakfast":
          pricePerDay = 130;
          if (vipDiscount === "yes") {
            pricePerDay -= pricePerDay * 0.12;
          }
          break;
        default:
          isValid = false;
          break;
      }
      break;
    default:
      isValid = false;
      break;
  }

  if (!isValid) {
    console.log("Invalid input!");
  } else if (days < 1) {
    console.log("Days must be positive number!");
  } else if (days <= 7) {
    const totalPrice = days * pricePerDay;
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
  } else if (days > 7) {
    const totalPrice = (days - 1) * pricePerDay;
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
  }
}
travelAgency(["Borovets", "noEquipment", "yes", "6"]);
// travelAgency(["Gabrovo", "noBreakfast", "no", "3"]);
