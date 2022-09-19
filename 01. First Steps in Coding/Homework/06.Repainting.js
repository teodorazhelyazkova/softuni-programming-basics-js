function repainting(input){
//MATERIALS
    const nylonCostPerSqrMeter = 1.50;
    const paintCostPerLiter = 14.50;
    const thinnerCostPerLiter = 5;
    const extraPaintPercent = 0.1;
    const extraNylonPerSqeMeter = 2;
    const bagsCost = 0.40;
//INPUT
    const nylon = Number(input[0]);
    const paint = Number(input[1]);
    const thinner = Number(input[2]);
    const workHours = Number(input[3]);
//SOLUTION
    const nylonTotalPrice = (nylon + extraNylonPerSqeMeter) * nylonCostPerSqrMeter;
    const paintTotalPrice = (paint + (paint * extraPaintPercent)) * paintCostPerLiter;
    const thinnerTotalPrice = thinner * thinnerCostPerLiter;
    const totalMaterialsCost = nylonTotalPrice + paintTotalPrice + thinnerTotalPrice + bagsCost    
const workHoursCostPerHour = 0.3 * totalMaterialsCost
const workHoursCostTotal = workHours * workHoursCostPerHour
console.log(totalMaterialsCost + workHoursCostTotal);
}
repainting(["10", "11", "4", "8"]);