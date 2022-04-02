'use strict';

const title = prompt('Как называется ваш проект?', "Калькулятор верстки");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
const service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка сайта');
const servicePrice1 = +prompt('Сколько это будет стоить?', '10000');
const service2 = prompt('Какой дополнительный тип услуги нужен?', "Слайдеры");
const servicePrice2 = +prompt('Сколько это будет стоить?', '10000');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollback = 12;
let adaptiv = confirm("Нужен ли адаптив на сайте?");
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10% " + Math.ceil(servicePercentPrice * 0.1));
} else if (15000 < fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5% " + Math.ceil(servicePercentPrice * 0.05));
} else if (0 < fullPrice && fullPrice < 15000) {
  console.log("Скидка не предусмотрена " + Math.ceil(servicePercentPrice));
} else if (fullPrice < 0) {
  console.log("Что то пошло не так ");
}

console.log(title);
console.log(screens);
console.log("Стоимость верстки экранов " + screenPrice + " юайней");
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);
console.log(typeof fullPrice);
console.log('Стоимость разработки сайта ' + fullPrice + ' юаней');
console.log("Процент отката посреднику за работу = " + fullPrice * (rollback / 100));
console.log(fullPrice);
console.log(adaptiv);
console.log(Math.ceil(servicePercentPrice));