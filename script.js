const title = "Mytitle";
console.log(typeof title);

const screens = "Простые, Сложные, Интерактивные";
console.log(screens.length);
console.log(screens.toLocaleLowerCase().split(", "));

const screenPrice = 3;
console.log("Стоимость верстки экранов " + screenPrice + " юайней");

const rollback = 95;

const fullPrice = 10;
console.log(typeof fullPrice);
console.log('Стоимость разработки сайта ' + fullPrice + ' юаней');
console.log("Процент отката посреднику за работу = " + fullPrice * (rollback / 100) + "%");

const adaptiv = true;
console.log(typeof adaptiv);