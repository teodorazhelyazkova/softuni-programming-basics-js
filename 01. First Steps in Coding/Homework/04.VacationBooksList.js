function vacationBookList(input){
     const totalPages = Number(input[0]);
     const readPagesPerHour = Number(input[1]);
     const numberOfDaysPerReadingOneBook = Number(input[2]);
     const totalTimeForReadingOneBook = totalPages / readPagesPerHour 
     const totalHoursPerDay = totalTimeForReadingOneBook / numberOfDaysPerReadingOneBook
     console.log(totalHoursPerDay);
}
vacationBookList(["212", "20", "2"]);