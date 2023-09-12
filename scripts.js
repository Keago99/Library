// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

// vairable for the form
const signupForm = document.getElementById("addBook");

// All the elements from the input fields converted to
// const to create new objects.
let author = document.getElementById("bAuthor").value;
let title = document.getElementById("bTitle").value;
let pages = document.getElementById("pages").value;
let read = document.getElementById("read");


// This is where all library files are stored
const myLibrary = [
    { author: "Derrick Landy", title: "Skullduggery Pleasant", Pages: 300, read: false}
];

// Constructor for book object
function book(author, title, pages, read){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// A function to add a book to the library.
function addBookToLibrary(){
    checkBookInputs();
    const newBook = new book(author, title, pages, read);
    myLibrary.push(newBook);
}

function updateTable()
{
    myLibrary.forEach((book) => {
        
    });
}

signupForm.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
    myLibrary.forEach(function(element) {
        console.log(element);
    });
});

function checkBookInputs(){
    author = document.getElementById("bAuthor").value;
    title = document.getElementById("bTitle").value;
    pages = document.getElementById("pages").value;
}




