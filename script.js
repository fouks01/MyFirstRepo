'use strict';

let title = prompt('Как называется ваш проект?', "Калькулятор верстки");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');

let fullPrice;
let allServicePrices;
let rollback = 12;
let adaptiv = confirm("Нужен ли адаптив на сайте?");
let servicePercentPrice;


let service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка сайта');
let servicePrice1 = +prompt('Сколько это будет стоить?', '10000');
let service2 = prompt('Какой дополнительный тип услуги нужен?', "Слайдеры");
let servicePrice2 = +prompt('Сколько это будет стоить?', '10000');

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};


const getAllServicePrices = function (a, b) {
  return a + b;
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
  if (price > 30000) {
    return "Даем скидку в 10% " + Math.ceil(servicePercentPrice * 0.1);
  } else if (15000 < price && price < 30000) {
    return "Даем скидку в 5% " + Math.ceil(servicePercentPrice * 0.05);
  } else if (0 < price && price < 15000) {
    return "Скидка не предусмотрена " + Math.ceil(servicePercentPrice);
  } else if (price < 0) {
    return "Что то пошло не так ";
  }
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptiv);
showTypeOf(fullPrice);

console.log(getAllServicePrices(servicePrice1, servicePrice2));
console.log(getFullPrice(screenPrice, allServicePrices));
console.log(getServicePercentPrices(fullPrice, rollback));
console.log(getRollbackMessage(fullPrice));
console.log("Типы экранов " + screens);
console.log(getTitle(title));