const submit = document.querySelector("#submit");
const formbox = document.querySelector(".formbox"); 
const bookIds = []

submit.addEventListener("click", (e)=> {
    e.preventDefault();

    const bookTitle = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const yearPublished = document.querySelector("#yearPublished").value;
    
    let uniqueId = crypto.randomUUID();
    let bookId = bookIds.includes(uniqueId) ? crypto.randomUUID() : uniqueId;
    bookIds.push(bookId);
    const id = bookId;

    addBookToLibrary(bookTitle, author, yearPublished, id);

    formbox.reset();
})
// <button type="submit" id="submit">Add Book</button>

const myLibrary = [];

function Book(title, author, year, id) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(title, author, year, id) {
  const book = new Book(title, author, year, id);

  myLibrary.push(book);

  render(myLibrary);

//   console.log(myLibrary);


}

function render(bookArray){
    console.log(bookArray);
    
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = '';

    bookArray.forEach(book => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
        `
        tbody.appendChild(row);
    })
    
    
}
