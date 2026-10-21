let myLibrary = [];

// get the submit button
const submitBtn = document.querySelector("#submit");
// get the total form box
const formbox = document.querySelector(".formbox");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const year = document.querySelector("#yearPublished").value;

    // pass all the values to addBookToLibrary
    addBookToLibrary(id, title, author, year);
})

function Book(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(id, title, author, year) {
    const book = new Book(id, title, author, year);

    myLibrary.push(book);

    formbox.reset();

    // console.log(myLibrary);
    render(myLibrary);
}

function render(myLibrary){
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = '';

    myLibrary.forEach(book => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td><button class="deleteBtn" data-id ="${book.id}">Delete</button></td>
            <td><button class="updateBtn" data-id ="${book.id}">Update</button></td>
        `

        tbody.appendChild(row);
    });

}

// get table body the actual data of the book, get the whole row;
const tbody = document.querySelector("tbody")

// get all the inputs
const title = document.querySelector("#bookTitle");
const author = document.querySelector("#bookAuthor");
const year = document.querySelector("#yearPublished");
const updateBtn = document.querySelector("#update");

// This is an function to delete the book when I clicked delete
tbody.addEventListener("click", (e)=> {
    if(e.target.classList.contains("deleteBtn")) {
        // get the id from the target
        let targetId = e.target.dataset.id;
        
        myLibrary = myLibrary.filter(book => book.id !== targetId);

        render(myLibrary);
    }

    if(e.target.classList.contains("updateBtn")){

        
        submitBtn.style.display = "none";
        updateBtn.style.display = "block"

        let targetId = e.target.dataset.id;

        let book = myLibrary.find(book => book.id === targetId);
        let bookIndex = myLibrary.findIndex(book => book.id === targetId);
        console.log([book, bookIndex])

        if(book){
            title.value = book.title;
            author.value = book.author;
            year.value = book.year;
        }

        update(book, bookIndex, targetId);
    }
})

function update(book, bookIndex, targetId){


    updateBtn.addEventListener("click", (e)=> {
        e.preventDefault();

        console.log("I am in Update Button");

        const id  = targetId;
        const title = document.querySelector("#bookTitle").value;
        const author = document.querySelector("#bookAuthor").value;
        const year = document.querySelector("#yearPublished").value;

        const book = new Book(id, title, author, year);

        myLibrary[bookIndex] = book;

        render(myLibrary);

        submitBtn.style.display = "block";
        updateBtn.style.display = "none";
        formbox.reset();
    })
}



