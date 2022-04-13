'use strict';

const titleMain = document.getElementsByTagName('h1');
const cancel = document.getElementsByClassName('handler_btn');
const resetBtn = cancel[1];
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

    blocking: function () {
        appData.start();
        const inputBlocking = document.querySelector('input[type=text]');
        const selectBlocking = document.querySelector('select');

        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            select.disabled = true;
            input.disabled = true;

        });


        sum.style.display = 'none';
        resetBtn.style.display = 'block';

        // console.log(appData.screens.length);
    },

    resetting: function () {
        const inputBlocking = document.querySelector('input[type=text]');
        const selectBlocking = document.querySelector('select');

        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            // screens[index + 1].style.display = 'none';
            select.disabled = false;
            input.disabled = false;
            // screens[index + 1].remove(screens);
            screens[index + 1].remove()



        });

        itemNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            check.checked = false;
        });

        itemPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            check.checked = false;
        });


        // document.querySelector('.rollback input[type=range]').reset();

        // appData.rollbackResult.reset();


        // screens.value = 0;
        input.value = 0;
        ran.value = 0;
        ran.textContent = 0 + "%";
        appData.rollback = 0;

        inputBlocking.value = '';
        selectBlocking.value = '';
        total[0].value = 0;
        total[1].value = 0;
        total[2].value = 0;
        total[3].value = 0;
        total[4].value = 0;
        appData.screens.length = 0;
        // inputBlocking.disabled = false;

        // selectBlocking.disabled = false;
        resetBtn.style.display = 'none';
        sum.style.display = 'block';

        console.log(appData.screens);
    },

    init: function () {
        this.addTitle();
        sum.addEventListener('click', this.blocking);
        plus.addEventListener('click', this.addScreenBlock);
        input.addEventListener('change', this.rollbackResult);
        resetBtn.addEventListener('click', this.resetting);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    showResult: function () {

        priceWork.value = this.screenPrice;
        addPrice.value = this.servicePricesPercent + this.servicePricesNumber;
        allPrice.value = this.fullPrice;
        rollPrice.value = this.servicePercentPrice;
        numberScreens.value = countSum;
    },
    addServices: function () {
        itemPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        itemNumber.forEach((item) => {
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
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }
        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice = this.fullPrice - this.fullPrice * (this.rollback / 100);
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectValue = select.options[select.selectedIndex].value;
            const selectName = select.options[select.selectedIndex].textContent;
            if (selectValue === '' || input.value === 0 || input.value === '') {
                appData.screens.length = 0;
                return;
            } else {
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value
                });
            }
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
        appData.showResult();

    },
    logger: function () {
        for (let key in this) {
            console.log(this[key]);
        }
        console.log(this.screens);
    }
};

appData.init();