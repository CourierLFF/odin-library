const myLibrary = [];

const libraryTable = document.querySelector(".library-table")

const formTitle = document.querySelector("#ftitle");
const formAuthor = document.querySelector("#fauthor");
const formGenre = document.querySelector("#fgenre");

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

function addBookToLibraryFromForm() {
    event.preventDefault();
    if(formTitle.value != "" && formAuthor.value != "" && formGenre.value != "") {
        addBookToLibrary(formTitle.value, formAuthor.value, formGenre.value);
        displayLibrary();
    }
}

function clearDisplay() {
    while (libraryTable.firstChild) {
        libraryTable.removeChild(libraryTable.firstChild);
    }
}

function displayLibrary() {
    clearDisplay()
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
        const removeButton = document.createElement('button');
        removeButton.setAttribute("onclick", "removeBook()");
        tableTitle.textContent = myLibrary[i].title;
        tableAuthor.textContent = myLibrary[i].author;
        tableGenre.textContent = myLibrary[i].genre;
        removeButton.textContent = "REMOVE";
        tableRow.appendChild(tableTitle);
        tableRow.appendChild(tableAuthor);
        tableRow.appendChild(tableGenre);
        tableRow.appendChild(removeButton);
        libraryTable.append(tableRow);
    }
}

displayLibrary();

function removeBook() {
    //event.target.parentNode.remove();
    let removeBookTitle = event.target.parentNode.firstChild.textContent;
    for(i = 0; i < myLibrary.length; i++) {
        if(removeBookTitle == myLibrary[i].title) {
            myLibrary.splice(i, 1);
        }
    }
    displayLibrary();
}