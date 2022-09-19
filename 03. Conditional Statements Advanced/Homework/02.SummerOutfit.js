function summerOutfit(input) {
    const degrees = Number(input[0]);
    const time = input[1];
    let outfit;
    let shoes;

    switch (time) {
        case "Morning": 
            switch (true) {
                case (degrees >= 10 && degrees <= 18): 
                    outfit = "Sweatshirt"; 
                    shoes = "Sneakers";
                    break;
                case (degrees > 18 && degrees <= 24):
                    outfit = "Shirt"; 
                    shoes = "Moccasins";
                    break;
                case (degrees >= 25):
                    outfit = "T-Shirt"; 
                    shoes = "Sandals";
                    break;
            }
        break;

        case "Afternoon":
            switch (true) {
                case (degrees >= 10 && degrees <= 18): 
                    outfit = "Shirt"; 
                    shoes = "Moccasins";
                    break;
                case (degrees > 18 && degrees <= 24):
                    outfit = "T-Shirt"; 
                    shoes = "Sandals";
                    break;
                case (degrees >= 25):
                    outfit = "Swim Suit"; 
                    shoes = "Barefoot";
                    break;
            }
        break;

        case "Evening":
            switch (true) {
                case (degrees >= 10 && degrees <= 18): 
                    outfit = "Shirt"; 
                    shoes = "Moccasins";
                    break;
                case (degrees > 18 && degrees <= 24):
                    outfit = "Shirt"; 
                    shoes = "Moccasins";
                    break;
                case (degrees >= 25):
                    outfit = "Shirt";
                    shoes = "Moccasins";
                    break;
            }
        break;
    }

console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}

summerOutfit(["22", "Afternoon"]);
