function hotelRoom(input) {
    mayAndOctoberStudioPricePerNight = 50;
    mayAndOctoberApartmentPricePerNight = 65;
    juneAndSeptemberStudioPricePerNight = 75.2;
    juneAndSeptemberApartmentPricePerNight = 68.7;
    julyAndAugustStudioPricePerNight = 76;
    julyAndAugustApartmentPricePerNight = 77;
    const month = input[0];
    const nights = Number(input[1]);
    let totalMoneyForStudio = 0;
    let totalMoneyForApartment = 0;

    switch (month) {
        case "May": 
        case "October":
            totalMoneyForStudio = nights * mayAndOctoberStudioPricePerNight;
            
            if (nights > 14) {
                totalMoneyForStudio -= totalMoneyForStudio * 0.3;
            } else if (nights > 7) {
                totalMoneyForStudio -= totalMoneyForStudio * 0.05;
            }

            totalMoneyForApartment = nights * mayAndOctoberApartmentPricePerNight;
            if (nights > 14) {
                totalMoneyForApartment -= totalMoneyForApartment * 0.1;
            }
        break;
        case "June":
        case "September":
            totalMoneyForStudio = nights * juneAndSeptemberStudioPricePerNight;
            if (nights > 14) {
                totalMoneyForStudio -= totalMoneyForStudio * 0.2;
            }

            totalMoneyForApartment = nights * juneAndSeptemberApartmentPricePerNight;
            if (nights > 14) {
                totalMoneyForApartment -= totalMoneyForApartment * 0.1;
            }
            break;
        case "July":
        case "August":
            totalMoneyForStudio = nights * julyAndAugustStudioPricePerNight;
            totalMoneyForApartment = nights * julyAndAugustApartmentPricePerNight;
            if (nights > 14) {
                totalMoneyForApartment -= totalMoneyForApartment * 0.1;
            }
            break;      
    }

    console.log(`Apartment: ${totalMoneyForApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalMoneyForStudio.toFixed(2)} lv.`)
}

hotelRoom(["May", "15"]);
