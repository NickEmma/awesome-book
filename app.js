const bookAdd = document.querySelector('.book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('.btn-submit');

if (!localStorage.getItem('bookInfo')) {
  localStorage.setItem('bookInfo', JSON.stringify([]));
}
let books;

function uploadData(book) {
  localStorage.setItem('bookInfo', JSON.stringify(book));
}

/* eslint-disable no-use-before-define */

function downloadData() {
  books = JSON.parse(localStorage.getItem('bookInfo'));
  updateUI();
}
downloadData();

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const obj = { title: title.value, author: author.value };
    books.push(obj);
    uploadData(books);
    downloadData();
    title.value = '';
    author.value = '';
  }
});

function updateUI() {
  bookAdd.innerHTML = '';
  books.forEach((data, index) => {
    const classBook = document.createElement('div');
    classBook.classList.add('class-book');
    const par = document.createElement('p');
    par.textContent = `${data.title} By ${data.author}`;
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    btnRemove.addEventListener('click', removeBook.bind(index));
    classBook.appendChild(par);
    classBook.appendChild(btnRemove);
    bookAdd.appendChild(classBook);
  });
}

function removeBook() {
  books.splice(this, 1);
  uploadData(books);
  downloadData();
}
