function grades(input) {
    let index = 0;
    const studentsCount = Number(input[index]);
    index++;
    let topStudentsCounter = 0;
    let between4_00And4_99StudentsCounter = 0;
    let between3_00And3_99StudentsCounter = 0;
    let failStudentsCounter = 0;
    let gradesTotal = 0;

    for (let i = 0; i < studentsCount; i++) {
        let grade = Number(input[index]);

        if(grade >= 2.00 && grade <= 2.99) {
            failStudentsCounter++;
            gradesTotal += grade;
        } else if(grade >= 3.00 && grade <= 3.99) {
            between3_00And3_99StudentsCounter++;
            gradesTotal += grade;
        } else if(grade >= 4.00 && grade <= 4.99) {
            between4_00And4_99StudentsCounter++;
            gradesTotal += grade;
        } else if(grade >= 5.00) {
            topStudentsCounter++;
            gradesTotal += grade;
        }

        index++; 
    }

    let topStudentsPercentage = topStudentsCounter / studentsCount * 100;
    let between3_00And3_99StudentsPercentage = between3_00And3_99StudentsCounter / studentsCount * 100;
    let between4_00And4_99StudentsPercentage = between4_00And4_99StudentsCounter / studentsCount * 100;
    let failStudentsPercentage = failStudentsCounter / studentsCount * 100;
    let averageGrade = gradesTotal / studentsCount;

    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${between4_00And4_99StudentsPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${between3_00And3_99StudentsPercentage.toFixed(2)}%`);
    console.log(`Fail: ${failStudentsPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}

grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);