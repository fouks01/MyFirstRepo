'use strict';

const appData = {
  title: '',
  screens: '',
  screenPrice: 0,
  fullPrice: 0,
  allServicePrices: 0,
  rollback: 12,
  adaptiv: true,
  servicePercentPrice: 0,
  service1: '',
  service2: '',
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    }
    while (!appData.isNumber(appData.screenPrice));

    appData.adaptiv = confirm("Нужен ли адаптив на сайте?");
  },
  getAllServicePrices: function () {
    let sum = 0;
    let newre;

    for (let i = 0; i < 2; i++) {

      if (i === 0) {
        appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'Верстка сайта');
      } else if (i === 1) {
        appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Слайдер');
      }

      do {
        newre = prompt('Сколько это будет стоить?', '10000');
      }
      while (!appData.isNumber(newre));
      sum += +newre;
    }
    return sum;
  },
  getFullPrice: function (a, b) {
    return a + b;
  },
  getTitle: function (title) {
    appData.title = appData.title.trim();
    appData.title = appData.title.toLowerCase();
    appData.title = appData.title[0].toUpperCase() + title.substring(1);
    return appData.title;
  },
  getServicePercentPrices: function (a, b) {
    return a - a * (b / 100);
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
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(+appData.screenPrice, appData.allServicePrices);
    appData.title = appData.getTitle(appData.title);
    appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  }
};

appData.start();