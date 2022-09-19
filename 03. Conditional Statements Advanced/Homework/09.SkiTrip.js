function skiTrip(input) {
    const roomForOnePersonPerNight = 18;
    const apartmentPerNight = 25;
    const presidentApartmentPerNight = 35;
    const days = Number(input[0]);
    const type = input[1];
    const review = input[2];
    let finalPrice = 0;

    switch (type) {
        case "room for one person":
            finalPrice = roomForOnePersonPerNight * (days - 1);
        break;
        case "apartment":
            finalPrice = apartmentPerNight * (days - 1);
                if (days < 10) {
                    finalPrice -= finalPrice * 0.3;               
                } else if (days < 15) {
                    finalPrice -= finalPrice * 0.35; 
                } else {
                    finalPrice -= finalPrice * 0.5; 
                }
        break;
        case "president apartment":
            finalPrice = presidentApartmentPerNight * (days - 1);
                if (days < 10) {
                    finalPrice -= finalPrice * 0.1;
                } else if (days < 15) {
                    finalPrice -= finalPrice * 0.15;
                } else {
                    finalPrice -= finalPrice * 0.2;
                }
        break;
    }
    
    if (review === "positive") {
        finalPrice += finalPrice * 0.25;
    } else if (review === "negative") {
        finalPrice -= finalPrice * 0.1;
    }

    console.log(finalPrice.toFixed(2)); 

}

skiTrip(["14", "apartment", "positive"]);
