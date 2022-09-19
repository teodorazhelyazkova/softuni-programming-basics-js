function solve(input) {
    const number1 = Number(input[0]);
    const number2 = Number(input[1]);
    const operator = input[2];
    let result = 0;

    switch (operator) {
        case "+": result = number1 + number2; break;
        case "-": result = number1 - number2; break;
        case "*": result = number1 * number2; break;
        case "/": result = number1 / number2; break;
        case "%": result = number1 % number2; break; 
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 === 0) {
            console.log(`${number1} ${operator} ${number2} = ${result} - even`);
        } else {
            console.log(`${number1} ${operator} ${number2} = ${result} - odd`);
        }  
    }

    if (operator === "/" || operator === "%") {
        if (number2 !== 0) {
            console.log(`${number1} ${operator} ${number2} = ${operator === "/" ? result.toFixed(2) : result}`);
        } else {
            console.log(`Cannot divide ${number1} by zero`);
        }
    }
}

solve(["10", "12", "+"]);

// if (condition == true) {
a
//} else {
b
//}

condition == true ? a : b