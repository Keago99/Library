// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

// The body part of the table where the library will be shown
let tbody = document.getElementById("tbody");
// The button to add books, this will bring up the modal.
let addButton = document.getElementById("addBookButton");
const modal = document.getElementById("addBookDialog");
const form = document.getElementById("bookForm");
const closeButton = document.getElementById("closeButton");
var btnRead;


// This is where all library files are stored
const myLibrary = [
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
    var numID = 0;
    clearTable();
    myLibrary.forEach((book) => {
        numID++;
        // console.log to check if the IDs are correct
        console.log(book);

        var btnRemove = document.createElement("button");
            btnRemove.innerText = "Remove";
            btnRemove.className = "btn btn-danger removeButton";
        
        btnRead = document.createElement("button");

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
            btnRead.className = "btn btn-success readButton";
        }
        else{
            btnRead.innerText = "Not read"
            btnRead.className = "btn btn-danger readButton";
        }
        td4.appendChild(btnRead);
        td5.appendChild(btnRemove);

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        row.appendChild(td5);

        tbody.appendChild(row);
    });
    var removeButtons = document.querySelectorAll('.removeButton');
    var readButtons = document.querySelectorAll('.readButton');

    for (i = 0; i < removeButtons.length; i++){
        //add remove button eventlisteners here
    }

    for (j = 0; j < readButtons.length; j++){
        // add read button eventlisteners here
    }
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

function changeRead(){
    if (btnRead.innerText == "Read"){
        btnRead.innerText = "Not Read";
        btnRead.className = "btn btn-danger";
    }else{
        btnRead.innerText = "Read";
        btnRead.className = "btn btn-success";
    }
}

// This clears the table
function clearTable(){
    tbody.innerHTML = "";
}



