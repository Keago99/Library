// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

// vairable for the form
const form = document.getElementById("addBook");

// All the elements from the input fields converted to
// const to create new objects.
const author = document.getElementById("bAuthor");
const title = document.getElementById("bTitle");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

// This is where all library files are stored
const myLibrary = [
    { author: "Derrick Landy", title: "Skullduggery Pleasant", Pages: 300, read: false}
];

// Constructor for book object
function book(author, title, pages, read){

    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(author, title, pages, read){
    const newBook = new book(author, title, pages, read)
    myLibrary.push(newBook);

}