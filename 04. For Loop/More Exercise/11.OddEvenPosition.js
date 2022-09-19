function oddEvenPosition(input) {
    let index = 0;
    const numbersCount = Number(input[index]);
    index++;
    let oddSum = 0;
    let evenSum = 0;
    let evenMin = 1000000000;
    let evenMax = -1000000000;
    let oddMin = 1000000000;
    let oddMax = -1000000000;

    for (let i = 1; i <= numbersCount; i++) {
        let number = Number(input[index]);
        if (i % 2 === 0) {
            evenSum += number;
            if (number < evenMin) {
                evenMin = number;
            }
            
            if (number > evenMax) {
                evenMax = number;
            }
        } else {
            oddSum += number;
            if (number < oddMin) {
                oddMin = number;
            }

            if (number > oddMax) {
                oddMax = number;
            }
        }

        index++;

    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (oddMin === 1000000000) {
        console.log("OddMin=No,");
    }
    else {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }

    if (oddMax === -1000000000) {
        console.log("OddMax=No,");
    } else {
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (evenMin === 1000000000) {
        console.log("EvenMin=No,");
    } else {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if (evenMax === -1000000000) {
        console.log("EvenMax=No");
    } else {
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }

}

oddEvenPosition([2, 1.5, -2.5]);