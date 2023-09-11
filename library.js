const myLibrary = [];

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