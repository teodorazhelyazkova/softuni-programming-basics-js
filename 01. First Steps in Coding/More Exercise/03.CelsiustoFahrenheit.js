function converter(input){
    const celsius = Number(input[0]);
    const fahrenheit = celsius * 9/5 + 32;
    console.log(fahrenheit.toFixed(2));
 }
converter([25]);