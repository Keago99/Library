// I'll be overcommenting everything for learning purposes, apologies if this seems annoying

// The body part of the table where the library will be shown
let tbody = document.getElementById("tbody");
// The button to add books, this will bring up the modal.
let addButton = document.getElementById("addBookButton");
const modal = document.getElementById("addBookDialog");
const form = document.getElementById("bookForm");
const closeButton = document.getElementById("closeButton");
var btnRead;
var numID;


// This is where all library files are stored
const myLibrary = [
];

// Constructor for book object
function book(id, author, title, pages, read){
    this.id = id;
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
    numID = -1;
    clearTable();
    myLibrary.forEach((book) => {
        numID++;
        book.id = numID;
        // console.log to check if the IDs are correct
        console.log(book);

        var btnRemove = document.createElement("button");
            btnRemove.innerText = "Remove";
            btnRemove.className = "btn btn-danger removeButton";
            btnRemove.dataset.identity = numID;
        
        btnRead = document.createElement("button");
        btnRead.dataset.readIdentity = numID;

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
        removeButtons[i].addEventListener('click', removeBook);
    }

    for (j = 0; j < readButtons.length; j++){
        readButtons[j].addEventListener('click', changeRead);
    }
}

function addBook(){
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var pages = document.getElementById("pages").value;
    var read = document.getElementById("read").value;

    const newBook = new book(0, author, title, pages, read, );
    myLibrary.push(newBook);
    updateTable();
    modal.close();

    
}

function changeRead(){
    var bookID = this.dataset.readIdentity;
    if (myLibrary[bookID].read == "Yes"){
        myLibrary[bookID].read = "No";
    }
    else{
        myLibrary[bookID].read = "Yes";
    }
    updateTable();
}

function removeBook(){
    var removeID = this.dataset.identity;
    myLibrary.splice(removeID, 1);
    updateTable();
}

// This clears the table
function clearTable(){
    tbody.innerHTML = "";
}



