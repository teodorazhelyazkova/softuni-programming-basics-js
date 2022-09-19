function multiplyBy2(input) {
    let result = 0;
    for(let i = 0; i < input.length; i++) {
        if(input[i] >= 0){
            result = input[i] * 2;
            console.log(`Result: ${result.toFixed(2)}`);
        } else {
            console.log("Negative number!");
        }
    }
}

multiplyBy2([12, 43.2144, 12.3, 543.23, -20])