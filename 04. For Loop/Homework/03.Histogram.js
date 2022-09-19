function histogram(input){
    let numbersCount = Number(input[0]);
    let p1counter = 0;
    let p2counter = 0;
    let p3counter = 0;
    let p4counter = 0;
    let p5counter = 0;

    for(let i = 1; i <= numbersCount; i++) {
        let number = input[i];
        if(number < 200) {
            p1counter += 1;
        } else if(number >= 200 && number < 400) {
            p2counter += 1;
        } else if(number >= 400 && number < 600) {
            p3counter += 1;
        } else if(number >= 600 && number < 800) {
            p4counter += 1;
        } else if(number >= 800) {
            p5counter += 1;
        }
    }

    let p1Percentage = (p1counter / numbersCount * 100).toFixed(2);
    let p2Percentage = (p2counter / numbersCount * 100).toFixed(2);
    let p3Percentage = (p3counter / numbersCount * 100).toFixed(2);
    let p4Percentage = (p4counter / numbersCount * 100).toFixed(2);
    let p5Percentage = (p5counter / numbersCount * 100).toFixed(2);
        
    console.log(`${p1Percentage}%`);
    console.log(`${p2Percentage}%`);
    console.log(`${p3Percentage}%`);
    console.log(`${p4Percentage}%`);
    console.log(`${p5Percentage}%`);
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);

