'use strict';

let title;
let screens;
let screenPrice;
let fullPrice;
let allServicePrices;
let rollback = 12;
let adaptiv;
let servicePercentPrice;
let service1;
let service2;


const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt('Как называется ваш проект?', "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice));
  // {
  //   screenPrice = +prompt('Сколько будет стоить данная работа?');
  // }

  adaptiv = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};


// const getAllServicePrices = function () {
//   let sum = 0;

//   for (let i = 0; i < 2; i++) {

//     if (i === 0) {
//       service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка сайта');
//     } else if (i === 1) {
//       service2 = prompt('Какой дополнительный тип услуги нужен?', 'Слайдер');
//     }

//     sum += +prompt('Сколько это будет стоить?', '10000');
//   }
//   return sum;
// };

const getAllServicePrices = function () {
  let sum = 0;
  let newre;

  for (let i = 0; i < 2; i++) {

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка сайта');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'Слайдер');
    }

    do {
      newre = prompt('Сколько это будет стоить?', '10000');
    }
    while (!isNumber(newre));
    sum += +newre;

  }
  return sum;
};

function getFullPrice(a, b) {
  return a + b;
};

function getTitle(title) {
  title = title.trim();
  title = title.toLowerCase();
  title = title[0].toUpperCase() + title.substring(1);
  return title;
};

const getServicePercentPrices = function (a, b) {
  return a - a * (b / 100);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10% " + Math.ceil(servicePercentPrice * 0.1);
  } else if (15000 <= price && price < 30000) {
    return "Даем скидку в 5% " + Math.ceil(servicePercentPrice * 0.05);
  } else if (0 < price && price < 15000) {
    return "Скидка не предусмотрена " + Math.ceil(servicePercentPrice);
  } else if (price < 0) {
    return "Что то пошло не так ";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(+screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptiv);
showTypeOf(fullPrice);

console.log("allServicePrices", allServicePrices);

console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log("Типы экранов " + screens);
console.log(title);