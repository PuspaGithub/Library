const myLibrary = [];

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
        `

        tbody.appendChild(row);
    });

}
