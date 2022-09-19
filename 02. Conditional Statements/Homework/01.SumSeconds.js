function sumSeconds(input){
    const firstTime = Number(input[0]);
    const secondTime = Number(input[1]);
    const thirdTime = Number(input[2]);

    const totalTime = firstTime + secondTime + thirdTime;

    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
     
}

sumSeconds(["22", "7", "34"]);
