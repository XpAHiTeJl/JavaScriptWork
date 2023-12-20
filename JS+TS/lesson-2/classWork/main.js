"use strict";
var number = 20;
var firstRegistred = prompt("Хочешь поиграть в  игру? да/нет ");

if (firstRegistred === "да") {
  console.log("Хорошо, стартуем!");
  var firstNum = parseInt(prompt("Сколько мощи ты выбирешь ?   "));
  if (firstNum === number) {
    console.log("Ты в игре, поздравляю");
  } else if (firstNum !== number) {
    console.log("Попробуй еще раз");
  }
} else if (firstRegistred === "нет") {
  console.log("Всего хорошего");
} else {
  console.log("Ты должен сделать конкретный выбор!");
}
