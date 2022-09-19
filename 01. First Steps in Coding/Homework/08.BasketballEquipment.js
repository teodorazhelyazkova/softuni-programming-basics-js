function basketballEquipment(input){
    const yearTax = Number(input[0]);
    const trainersPrice = yearTax - (yearTax * 0.4);
    const suitPrice = trainersPrice - (trainersPrice * 0.20);
    const ballPrice = suitPrice / 4;
    const accessoriesPrice = ballPrice / 5;
    const basketballEquipmentPrice = trainersPrice + suitPrice + ballPrice + accessoriesPrice + yearTax;
    console.log(basketballEquipmentPrice);
}
basketballEquipment(["365"]);