function schoolCamp(input) {
    const season = input[0];
    const groupType = input[1];
    const studentsCount = Number(input[2]);
    const nightsCount = Number(input[3]);
    let pricePernight = 0;
    let finalPrice = 0;
    let sport = "";

    if (groupType === "boys" || groupType === "girls") {
        switch (season) {
            case "Winter":
                pricePernight = 9.6;
                if(groupType === "girls") {
                    sport = "Gymnastics"
                } else if (groupType === "boys"){
                    sport = "Judo";
                }
                break;
            case "Spring":
                pricePernight = 7.2;
                if(groupType === "girls") {
                    sport = "Athletics"
                } else if (groupType === "boys"){
                    sport = "Tennis";
                }
                break;
            case "Summer":
                pricePernight = 15;
                if(groupType === "girls") {
                    sport = "Volleyball"
                } else if (groupType === "boys"){
                    sport = "Football";
                }
                break;            
        }
    } else if (groupType === "mixed") {
        switch (season) {
            case "Winter":
                sport = "Ski";
                pricePernight = 10;
                break;
            case "Spring":
                sport = "Cycling";
                pricePernight = 9.5;
                break;
            case "Summer":
                sport = "Swimming";
                pricePernight = 20;
                break;            
        }
    }

    finalPrice = studentsCount * pricePernight * nightsCount;

    if (studentsCount >= 50) {
        finalPrice -= 0.5 * finalPrice;
    } else if (studentsCount >= 20 && studentsCount < 50) {
        finalPrice -= 0.15 * finalPrice;
    } else if (studentsCount >= 10 && studentsCount < 20) {
        finalPrice -= 0.05 * finalPrice;
    }

    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`)

}

schoolCamp(["Spring", "girls", 20, 7,]);