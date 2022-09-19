function oldBooks(input) {
    let index = 0;
    const searchedBook = input[index];
    index++;
    let checkedBook = input[index];
    index++;
    let checkedBooksCounter = 0;
    let isBookFound = false;

    while (checkedBook !== "No More Books") {

        if (checkedBook === searchedBook) {
            console.log(`You checked ${checkedBooksCounter} books and found it.`);
            isBookFound = true;
            break;
        }  

        checkedBook = input[index];
        index++;
        checkedBooksCounter += 1;

    }

    if(!isBookFound){
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooksCounter} books.`);
    }

}

oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
// oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);

