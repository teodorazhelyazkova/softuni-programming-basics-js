function examPreparation(input) {
    let countOfBadGrades = Number(input[0]);
    let index = 1;
    let command = input[index];
    let sumGrades = 0;
    let numberOfProblems = 0;
    let numOfBadGrades = 0;
    let lastProblemName = "";

    while (command !== "Enough") {
        lastProblemName = command;
        numberOfProblems++;
        index++;
        let currentGrade = Number(input[index]);
        sumGrades += currentGrade;
        if (currentGrade <= 4) {
            numOfBadGrades++;
        }
        if (numOfBadGrades >= countOfBadGrades) {
            console.log(`You need a break, ${countOfBadGrades} poor grades.`);
            break;
        }
        index++;
        command = input[index];

    }

    if (command === "Enough") {
        let averageGrade = sumGrades / numberOfProblems;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
              console.log(`Last problem: ${lastProblemName}`);
    }

}

examPreparation(["3", "Money", "6", "Story", "4", "SpringTime", "5", "Bus", "6", "Enough"]);
