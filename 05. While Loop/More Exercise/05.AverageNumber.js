function averageNumber(input) {
   const numbersCount = Number(input[0]);
   let sumNum = 0;
 
  for (let i = 1; i <= numbersCount; i++) {
    let number = Number(input[i]);
    sumNum += number;
  }

  let average = sumNum/numbersCount;

  console.log(average.toFixed(2));
}

averageNumber([4, 3, 2, 4, 2]);

function averageNumberWhile(input) {
    let index = 0;
    const numbersCount = Number(input[index]);
    index++;
    let numberCounter = 0;
    let sumNum = 0;

    while (numberCounter < numbersCount) {
        
        let number = Number(input[index]);
        sumNum += number;

        index++;
        numberCounter++;
    }
    
    let average = sumNum/numbersCount;

    console.log(average.toFixed(2));

}

averageNumberWhile([4, 3, 2, 4, 2]);

