// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

// The body part of the table where the library will be shown
let tbody = document.getElementById("tbody");
// The button to add books, this will bring up the modal.
let addButton = document.getElementById("addBookButton");
const modal = document.getElementById("addBookDialog");
const form = document.getElementById("bookForm");

// This is where all library files are stored
const myLibrary = [
    { author: "Derrick Landy", title: "Skullduggery Pleasant", pages: 300, read: "Yes"}
];

// Constructor for book object
function book(author, title, pages, read){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

form.onsubmit = function(event){
    console.log("The form submit is WORKING!");
    event.preventDefault();
};

addButton.addEventListener('click', () =>{
    modal.showModal();
})
// A function to add a book to the library.

function updateTable()
{
    clearTable();
    myLibrary.forEach((book) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerHTML = book.title
        td2.innerHTML = book.author;
        td3.innerHTML = book.pages;
        td4.innerHTML = book.read;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        tbody.appendChild(row);
    });
}


// This clears the table
function clearTable(){
    tbody.innerHTML = "";
}



