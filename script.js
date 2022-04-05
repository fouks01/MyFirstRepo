'use strict';

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