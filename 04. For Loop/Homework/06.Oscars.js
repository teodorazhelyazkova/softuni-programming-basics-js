function oscars(input) {
    let index = 0;
    const actorName = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    const judgesCount = input[index];
    index++;
   
    let isNomination = false;

    for(let i = 0; i < judgesCount; i++) {
        let nameJury = input[index];
        index++;
        let pointsJury = Number(input[index]);
        index++;
        points += nameJury.length * pointsJury / 2;

        if(points > 1250.5) {
            isNomination = true;
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    }

    let difference = Math.abs(1250.5 - points);
    if(!isNomination) {
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }

}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);


