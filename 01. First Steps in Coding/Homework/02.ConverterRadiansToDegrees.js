function converter(input){
const radian = Number(input[0]);
const degrees = radian * 180 / Math.PI;
console.log(degrees);
}

converter(["3.1416"]);