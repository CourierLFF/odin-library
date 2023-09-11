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

addBookToLibrary("Book 1", "Author 1", "Genre 1");
addBookToLibrary("Book 2", "Author 2", "Genre 2");
addBookToLibrary("Book 3", "Author 3", "Genre 3");

displayLibrary();

function displayLibrary() {
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