const bookAdd = document.querySelector('.book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const btn = document.querySelector('.submit');

const collection = [];

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const obj = { title: title.value, author: author.value };
    collection.push(obj);
    updateUI(collection);
    title.value = '';
    author.value = '';
  }
});

const updateUI = () => {
  bookAdd.innerHTML = '';
  collection.forEach((data, index) => {
    const classBook = document.createElement('div');
    classBook.classList.add('class-book');
    const para = document.createElement('p');
    para.textContent = `${data.title} By ${data.author}`;
    const button = document.createElement('button');
    button.textContent = `Remove`;
    button.addEventListener('click', removeBook.bind(index));
    classBook.appendChild(para);
    classBook.appendChild(button);
    bookAdd.appendChild(classBook);
  });
};
const removeBook = function () {
  collection.splice(this, 1);
  updateUI(collection);
};
