function foodDelivery(input){
    //FOOD
    const chickenMenu = 10.35;
    const fishMenu = 12.40;
    const veggyMenu = 8.15;
    const delivery = 2.50;
    //INPUT
    const chickenMenuNumber = input[0];
    const fishMenuNumber = input[1];
    const veggyMenuNumber = input[2];
    //SOLUTION
    const chickenMenuPrice = chickenMenu * chickenMenuNumber;
    const fishMenuPrice = fishMenu * fishMenuNumber;
    const veggyMenuPrice = veggyMenu * veggyMenuNumber;
    const totalMenusPrice = chickenMenuPrice + fishMenuPrice + veggyMenuPrice;
    const dessertPrice = 0.20 * totalMenusPrice;
    const TotalFoodDeliveryPrice = totalMenusPrice + dessertPrice + delivery;
    console.log(TotalFoodDeliveryPrice);
}
foodDelivery(["2", "4", "3"]);