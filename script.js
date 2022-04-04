'use strict';

const isNumber = function (num) {
  return !isNaN(parseInt(num)) && isFinite(num);
};

function findNumber(a) {
  function moving() {
    let x = prompt("Угадай число от 1 до 100");
    if (x === null) {
      alert("Игра окончена");
    } else if (+x > a) {
      alert("Загаданное число меньше");
      moving();
    } else if (+x < a) {
      alert("Загаданное число больше");
      moving();
    } else if (!isNumber(+x)) {
      alert("Введи число!");
      moving();
    } else if (x == a) {
      alert("Поздравляю, Вы угадали!!!");
    }
  };

  moving();

};

console.log(findNumber(parseInt(Math.random() * 101)));