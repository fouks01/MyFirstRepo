'use strict';

const title = prompt('Как называется ваш проект?');
// const titleResult = "Mytitle";
console.log(title);
// const title = "Mytitle";
// console.log(typeof title);


const screens = +prompt("Какие типы экранов нужно разработать?");
const screensResult = "Простые, Сложные, Интерактивные";
console.log(screensResult);
// const screens = "Простые, Сложные, Интерактивные";
// console.log(screens.length);
// console.log(screens.toLocaleLowerCase().split(", "));

const screenPrice = +prompt('Сколько будет стоить данная работа?');
// const screenPriceResult = 12000;
console.log("Стоимость верстки экранов " + screenPrice + " юайней");

const service1 = prompt('Какой дополнительный тип услуги нужен?');
// const service1Result = "Отдых";
console.log(service1);

const servicePrice1 = +prompt('Сколько это будет стоить?');
// const servicePrice1Result = 15000;
console.log(servicePrice1);

const service2 = prompt('Какой дополнительный тип услуги нужен?');
// const service2Result = "Покупка путевок";
console.log(service2);

const servicePrice2 = +prompt('Сколько это будет стоить?');
// const servicePrice2Result = 23000;
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 12;
console.log(typeof fullPrice);
console.log('Стоимость разработки сайта ' + fullPrice + ' юаней');
console.log("Процент отката посреднику за работу = " + fullPrice * (rollback / 100));
console.log(fullPrice);

let adaptiv = confirm("Нужен ли адаптив на сайте?");
console.log(adaptiv);

let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(Math.ceil(servicePercentPrice));

if (fullPrice > 30000) {
  console.log("Даем скидку в 10% " + Math.ceil(servicePercentPrice * 0.1));
} else if (15000 < fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5% " + Math.ceil(servicePercentPrice * 0.05));
} else if (0 < fullPrice && fullPrice < 15000) {
  console.log("Скидка не предусмотрена " + Math.ceil(servicePercentPrice));
} else if (fullPrice < 0) {
  console.log("Что то пошло не так ");
}