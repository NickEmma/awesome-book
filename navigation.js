const year = document.querySelector('.year');
const container = document.querySelector('.container');
const bookList = document.querySelector('.bokk');
const contact = document.querySelector('.contact');
const first = document.querySelector('.list');
const second = document.querySelector('.add');
const third = document.querySelector('.contact-me');

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: 'false',
};
const today = new Date();
const locale = navigator.language;

year.textContent = today.toLocaleDateString('en-US', options, locale);

first.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'block';
  bookList.style.display = 'none';
  contact.style.display = 'none';
});

second.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'none';
  bookList.style.display = 'flex';
  contact.style.display = 'none';
});

third.addEventListener('click', (e) => {
  e.preventDefault();
  container.style.display = 'none';
  bookList.style.display = 'none';
  contact.style.display = 'block';
});
