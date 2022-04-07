'use strict';

const titleMain = document.getElementsByTagName('h1');
const cancel = document.getElementsByClassName('handler_btn');
const reset = cancel[1];
const sum = cancel[0];
const plus = document.querySelector('.screen-btn');
const itemPercent = document.querySelectorAll('.other-items.percent');
const itemNumber = document.querySelectorAll('.other-items.number');
const input = document.querySelector('.rollback input[type=range]');
const ran = document.querySelector('.rollback span.range-value');
const total = document.getElementsByClassName('total-input');
const priceWork = total[0];
const numberScreens = total[1];
const addPrice = total[2];
const allPrice = total[3];
const rollPrice = total[4];
let screen = document.querySelectorAll('.screen');


console.log(titleMain[0].innerText);
console.log(reset, sum);
console.log(plus);
console.log(itemPercent, itemNumber);
console.log(input);
console.log(ran);
console.log(priceWork, numberScreens, addPrice, allPrice, rollPrice);
console.log(screen);

const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  fullPrice: 0,
  allServicePrices: 0,
  rollback: 12,
  adaptiv: true,
  servicePercentPrice: 0,
  services: {},

  asking: function () {
    // appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");

    do {
      appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    }
    while (appData.isNumber(appData.title));

    // appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    // do {
    //   appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    // }
    // while (!appData.isNumber(appData.screenPrice));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      }
      while (appData.isNumber(name));


      do {
        price = prompt('Сколько будет стоить данная работа?');
      }
      while (!appData.isNumber(price));

      appData.screens.push({
        id: i,
        name: name,
        price: price
      });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      let newre = 0;

      do {
        name = prompt('Какой дополнительный тип услуги нужен?', 'Верстка сайта');
      }
      while (appData.isNumber(name));

      do {
        newre = prompt('Сколько это будет стоить?', '10000');
      }
      while (!appData.isNumber(newre));

      appData.services[name] = +newre;
    }
    appData.adaptiv = confirm("Нужен ли адаптив на сайте?");
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },

  getFullPrice: function (a, b) {
    appData.fullPrice = a + b;
  },
  getTitle: function (title) {
    appData.title = appData.title.trim();
    appData.title = appData.title.toLowerCase();
    appData.title = appData.title[0].toUpperCase() + title.substring(1);
    appData.title = appData.title;
  },
  getServicePercentPrices: function (a, b) {
    appData.servicePercentPrice = a - a * (b / 100);
  },
  getRollbackMessage: function (price) {
    if (price >= 30000) {
      return "Даем скидку в 10% " + Math.ceil(appData.servicePercentPrice * 0.1);
    } else if (15000 <= price && price < 30000) {
      return "Даем скидку в 5% " + Math.ceil(appData.servicePercentPrice * 0.05);
    } else if (0 < price && price < 15000) {
      return "Скидка не предусмотрена " + Math.ceil(appData.servicePercentPrice);
    } else if (price < 0) {
      return "Что то пошло не так ";
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(+appData.screenPrice, appData.allServicePrices);
    appData.getTitle(appData.title);
    appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
    console.log(appData.screens);
  }
};

appData.start();