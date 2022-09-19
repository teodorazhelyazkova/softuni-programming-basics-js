function suppliesForSchool(input){
    // PRICES
    const penPackagePrice = 5.80;
    const markersPackagePrice = 7.20;
    const detergentPricePerLiter = 1.20;
    // INPUT
    const penPackageNumber = Number(input[0]);
    const markersPackageNumber = Number(input[1]);
    const detergentLiterNumber = Number(input[2]);
    const discount = Number(input[3]) / 100;
    //PROBLEM SOLUTION
    const totalPrice = penPackagePrice * penPackageNumber + markersPackageNumber * markersPackagePrice + detergentLiterNumber * detergentPricePerLiter;
    const totalPriceAfterDiscount = totalPrice - (totalPrice * discount);
    console.log(totalPriceAfterDiscount);
}
suppliesForSchool(["2", "3", "4", "25"]);
