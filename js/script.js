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
let screens = document.querySelectorAll('.screen');


let countSum = 0;


// console.log(titleMain[0].innerText);
// console.log(reset, sum);
// console.log(plus);
// console.log(itemPercent, itemNumber);
// console.log(input);
// console.log(ran);
// console.log(priceWork, numberScreens, addPrice, allPrice, rollPrice);
// console.log(screens);

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    fullPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    rollback: 0,
    adaptiv: true,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle();
        sum.addEventListener('click', appData.start);
        plus.addEventListener('click', appData.addScreenBlock);
        input.addEventListener('change', appData.rollbackResult);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    showResult: function () {

        const select = document.querySelector('select');
        const input = document.querySelector('input');

        if (select.selectedIndex === 0) {
            sum.setAttribute('disabled', true);
        } else if (input.value.trim().length === 0) {
            sum.disabled = true;
        } else {
            priceWork.value = appData.screenPrice;
            addPrice.value = appData.servicePricesPercent + appData.servicePricesNumber;
            allPrice.value = appData.fullPrice;
            rollPrice.value = appData.servicePercentPrice;
            numberScreens.value = countSum;
        }
    },
    addServices: function () {
        itemPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        itemNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);

        // appData.screens['count'];
        // console.log(appData.screens[index].count);
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
            countSum += +appData.screens[index].count;
        });

        console.log(appData.screens);

    },

    rollbackResult: function () {
        ran.textContent = input.value + "%";
        appData.rollback = +input.value;
    },

    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.rollbackResult();

        // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        // appData.logger();
        appData.showResult();

    },
    logger: function () {
        for (let key in appData) {
            console.log(appData[key]);
        }
        console.log(appData.screens);
    }
};

appData.init();