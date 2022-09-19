function walking(input) {
    const goal = 10000;
    let totalSteps = 0;
    let index = 0;
    while (totalSteps <= goal) {
        let command = input[index];

        if (command > 0) {
            command = Number(input[index]);
            totalSteps += command;
        } else if (command === "Going home") {
            index++;
            let lastCommand = Number(input[index]);
            totalSteps += lastCommand;
            break;
        }

        command = input[index];
        index++;

    }

    let difference = Math.abs(goal - totalSteps);

    if (totalSteps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${difference} steps over the goal!`);
    } else {
        console.log(`${difference} more steps to reach goal.`)
    }

}

// walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
