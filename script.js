'use strict';

const title = prompt('Как называется ваш проект?');
const screens = prompt("Какие типы экранов нужно разработать?");
const screensResult = "Простые, Сложные, Интерактивные";
const screenPrice = +prompt('Сколько будет стоить данная работа?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice1 = +prompt('Сколько это будет стоить?');
const service2 = prompt('Какой дополнительный тип услуги нужен?');
const servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 12;
let adaptiv = confirm("Нужен ли адаптив на сайте?");
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);


const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};


const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + getAllServicePrices();
};

function getTitle(title) {
  title = title.trim();
  title = title.toLowerCase();
  title = title[0].toUpperCase() + title.substring(1);
  return title;
};

const getServicePercentPrices = function () {
  servicePercentPrice = getFullPrice() - getFullPrice() * (rollback / 100);
  return servicePercentPrice;
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


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptiv);
showTypeOf(fullPrice);

console.log(getAllServicePrices());
console.log(getFullPrice());
console.log(getServicePercentPrices());
console.log(getRollbackMessage(fullPrice));
console.log("Типы экранов " + screens);
console.log(getTitle(title));
// console.log(title);
// console.log(screensResult);
// console.log("Стоимость верстки экранов " + screenPrice + " юайней");
// console.log(service1);
// console.log(servicePrice1);
// console.log(service2);
// console.log(servicePrice2);
// console.log(typeof fullPrice);
// console.log('Стоимость разработки сайта ' + fullPrice + ' юаней');
// console.log(fullPrice);
// console.log(adaptiv);
// console.log(Math.ceil(servicePercentPrice));