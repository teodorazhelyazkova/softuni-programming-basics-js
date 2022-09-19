function clock() {
    for (let hour = 0; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute++) {
            for(let second = 0; second < 60; second++) {
                console.log(`${hour} : ${minute} : ${second}`);
            }
        }
    }
}

clock();