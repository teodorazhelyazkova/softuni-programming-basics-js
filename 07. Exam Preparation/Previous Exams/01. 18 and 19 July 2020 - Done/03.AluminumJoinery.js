function aluminiumJoinery(input) {
    const joineryCount = Number(input[0]);
    const joineryType = input[1];
    const delivery = input[2];
    const deliveryPrice = 60;
    const price90X130PerPiece = 110;
    const price100X150PerPiece = 140;
    const price130X180PerPiece = 190;
    const price200X300PerPiece = 250;
    let finalPrice = 0;



    if (joineryCount > 10) {
        switch (joineryType) {
            case "90X130":
                finalPrice = joineryCount * price90X130PerPiece;
                
                if (joineryCount > 60) {
                    finalPrice -= 0.08 * finalPrice;
                } else if (joineryCount > 30) {
                    finalPrice -= 0.05 * finalPrice;
                }
                break;
            case "100X150":
                finalPrice = joineryCount * price100X150PerPiece;
                
                if (joineryCount > 80) {
                    finalPrice -= 0.1 * finalPrice;
                } else if (joineryCount > 40) {
                    finalPrice -= 0.06 * finalPrice;
                }
                break;
            case "130X180":
                finalPrice = joineryCount * price130X180PerPiece;

                if (joineryCount > 50) {
                    finalPrice -= 0.12 * finalPrice;
                } else if (joineryCount > 20) {
                    finalPrice -= 0.07 * finalPrice;
                }
                break;
            case "200X300":
                finalPrice = joineryCount * price200X300PerPiece;

                if (joineryCount > 50) {
                    finalPrice -= 0.14 * finalPrice;
                } else if (joineryCount > 25) {
                    finalPrice -= 0.09 * finalPrice;
                }
                break;
        }

        if (delivery === "With delivery") {
            finalPrice += deliveryPrice;
        }

        if (joineryCount > 99) {
                finalPrice -= 0.04 * finalPrice;
        }

        console.log(`${finalPrice.toFixed(2)} BGN`)

    } else {
        console.log("Invalid order");
    }

}

aluminiumJoinery(["105", "100X150", "With delivery"]);

// (["40", "90X130", "Without delivery"]);
