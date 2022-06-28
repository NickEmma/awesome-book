// ========= Book class: Represent a Book ===========
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// ============ UI class: Handle ui task ============

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');
    row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td><a href="#" class="delete">Remove</td>
  `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
// =========== Store class: Handles local storage ===========
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(del) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.del === del) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// ============ Event: Display Books ============

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// =========== Event: Add a Book ===========

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // get the form value

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (!title || !author) return;
  const book = new Book(title, author);
  UI.addBookToList(book);

  Store.addBook(book);

  UI.clearFields();
});

// =========== Event: Remove a Book =============

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from UI

  UI.deleteBook(e.target);

  // remove book from local store

  Store.removeBook();
});
