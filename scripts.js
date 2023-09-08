// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

const signupForm = document.querySelector('[name="signup"]');


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

function addBookToLibrary(){

}