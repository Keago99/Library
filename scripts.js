// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

// The body part of the table where the library will be shown
let tbody = document.getElementById("tbody");
// The button to add books, this will bring up the modal.
let addButton = document.getElementById("addBookButton");
const modal = document.getElementById("addBookDialog");
const form = document.getElementById("bookForm");
const closeButton = document.getElementById("closeButton");


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

closeButton.addEventListener("click", () => {
    modal.close();
})

form.onsubmit = function(event){
    addBook();
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

        var btn = document.createElement("button");
            btn.innerText = "Remove";
            btn.className = "btn btn-danger";
        
        var btnRead = document.createElement("button");

        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        td1.innerHTML = book.title
        td2.innerHTML = book.author;
        td3.innerHTML = book.pages;
        if(book.read == "Yes"){
            btnRead.innerText = "Read";
            btnRead.className = "btn btn-success";
        }
        else{
            btnRead.innerText = "Not read"
            btnRead.className = "btn btn-danger";
        }
        td4.appendChild(btnRead);
        td5.appendChild(btn);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);

        tbody.appendChild(row);
    });
}

function addBook(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;

    const newBook = new book(author, title, pages, read, );
    myLibrary.push(newBook);
    updateTable();
    modal.close();

    
}

// This clears the table
function clearTable(){
    tbody.innerHTML = "";
}



