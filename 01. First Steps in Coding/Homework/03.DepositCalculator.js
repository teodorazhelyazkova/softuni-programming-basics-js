function depositCalculator(input){
const depositSum = Number(input[0]);
const termOfTheDepositInMonths = Number(input[1]);
const annualIntrestRate = Number(input[2])/ 100;
const sum = depositSum + termOfTheDepositInMonths * ((depositSum * annualIntrestRate) / 12);
console.log(sum);
}
depositCalculator(["200", "3", "5.7"]);
