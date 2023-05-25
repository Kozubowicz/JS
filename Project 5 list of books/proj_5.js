window.onload = function () {
  console.log("App start");
  booksList.init();
};

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now(); //time
  }
}

class BooksList {
  constructor() {
    this.books = [];
  }
  init() {
    document
      .getElementById("saveButton")
      .addEventListener("click", (e) => this.saveButton(e));

    this.loadDataFromStorage();
  }

  loadDataFromStorage() {
    const data = storage.getItems();
    if (data == null || data == undefined) return;

    this.books = data;

    data.forEach((value, index) => {
      ui.addBookToTable(value);
    });
  }

  saveButton(e) {
    console.log("Save button");

    const author = document.getElementById("bookAuthor").value;
    const title = document.getElementById("bookTitle").value;
    e.preventDefault();
    if (author === "" || title === "") {
      console.log("blank data");
      return;
    }
    console.log("Autor: " + author + " Tytuł: " + title);
    const book = new Book(title, author);
    this.addBook(book);
  }

  addBook(book) {
    this.books.push(book);
    ui.addBookToTable(book);
    this.saveData();
  }

  removeBookById(bookId) {
    this.books.forEach((el, index) => {
      if (el.id == bookId) this.books.splice(index, 1);
    });
    this.saveData();
  }

  saveData() {
    storage.saveItems(this.books);
  }
}

const booksList = new BooksList();

class Ui {
  deleteBook(e) {
    const bookId = e.target.getAttribute("data-book-id");
    e.target.parentElement.parentElement.remove();
    booksList.removeBookById(bookId);
  }

  addBookToTable(book) {
    const tbody = document.querySelector("#booksTable tbody");
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td> ${book.title}</td>
    <td> ${book.author}</td>
    <td> 
    <button type="button" data-book-id="${book.id}" class ="btn btn-danger btn-sm delete">Skasuj</button>
    </td>`;

    tbody.appendChild(tr);

    let deleteButton = document.querySelector(
      `button.delete[data-book-id='${book.id}']`
    );
    deleteButton.addEventListener("click", (e) => this.deleteBook(e));
    this.clearForm();
  }
  clearForm() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
  }
}

const ui = new Ui();

class Storage {
  getItems() {
    let books = null;
    if (localStorage.getItem("books") !== null) {
      books = JSON.parse(localStorage.getItem("books"));
    } else {
      books = [];
    }
    return books;
  }
  saveItems(books) {
    localStorage.setItem("books", JSON.stringify(books));
  }
}

/*
storage.saveItems({a1:"test"});
storage.getItems()

*/
const storage = new Storage();