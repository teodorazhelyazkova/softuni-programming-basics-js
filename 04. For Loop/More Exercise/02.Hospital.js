function hospital(input) {
    let index = 0;
    const days = Number(input[index]);
    index++;
    let doctors = 7;
    let treatedPatiensCounter = 0;
    let untreatedPatientsCounter = 0;

    for (let i = 1; i <= days; i++) {
        let patientsCount = Number(input[index]);
        index++;

        if (i % 3 === 0 && (untreatedPatientsCounter > treatedPatiensCounter)) {
            doctors++;
        }

        if (patientsCount <= doctors) {
            treatedPatiensCounter += patientsCount;
        } else {
            treatedPatiensCounter += doctors;
            untreatedPatientsCounter += patientsCount - doctors;
        }

    }
    console.log(`Treated patients: ${treatedPatiensCounter}.`);
    console.log(`Untreated patients: ${untreatedPatientsCounter}.`);
}

hospital([4, 7, 27, 9, 1]);
// hospital([3, 7, 7, 7]);
hospital([6, 25, 25, 25, 25, 25, 2]);