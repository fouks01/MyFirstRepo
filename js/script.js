'use strict';

const book = document.querySelectorAll('.book');
const title = book[4].querySelector('h2 > a');
const google = document.querySelector('.adv');
const bookTwo = book[0].querySelectorAll('ul > li');
const bookFive = book[5].querySelectorAll('ul > li');
const bookSix = book[2].querySelectorAll('ul > li');
const newElem = document.createElement('li');



book[1].after(book[0]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

document.body.style.backgroundImage = "url(../image/you-dont-know-js.jpg)";

title.textContent = 'Книга 3. this и Прототипы Объектов';

google.remove();

bookTwo[3].after(bookTwo[2]);
bookTwo[3].after(bookTwo[6]);
bookTwo[6].after(bookTwo[8]);
bookTwo[9].after(bookTwo[2]);


bookFive[1].after(bookFive[9]);
bookFive[4].after(bookFive[2]);
bookFive[7].after(bookFive[5]);


newElem.textContent = 'Глава 8: За пределами ES6';
bookSix[8].insertAdjacentElement('afterend', newElem);