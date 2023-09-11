const myLibrary = [];

const libraryTable = document.querySelector(".library-table")

class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author
        this.genre = genre;
    }
}

function addBookToLibrary(title, author, genre) {
    myLibrary.push(new Book(title, author, genre))
}

function displayLibrary() {
    //Create table header and append to table
    const tableHeaderRow = document.createElement('tr');
    const tableHeaderTitle = document.createElement('th');
    const tableHeaderAuthor = document.createElement('th');
    const tableHeaderGenre = document.createElement('th');
    tableHeaderTitle.textContent = "Title";
    tableHeaderAuthor.textContent = "Author";
    tableHeaderGenre.textContent = "Genre";
    tableHeaderRow.appendChild(tableHeaderTitle);
    tableHeaderRow.appendChild(tableHeaderAuthor);
    tableHeaderRow.appendChild(tableHeaderGenre);
    libraryTable.appendChild(tableHeaderRow);
    for(i = 0; i < myLibrary.length; i++) {
        //Create table elements and assign the text of the object to them.
        const tableRow = document.createElement('tr');
        const tableTitle = document.createElement('td');
        const tableAuthor = document.createElement('td');
        const tableGenre = document.createElement('td');
        tableTitle.textContent = myLibrary[i].title;
        tableAuthor.textContent = myLibrary[i].author;
        tableGenre.textContent = myLibrary[i].genre;
        tableRow.appendChild(tableTitle);
        tableRow.appendChild(tableAuthor);
        tableRow.appendChild(tableGenre);
        libraryTable.append(tableRow);
    }
}

displayLibrary();