"use strict";
var nameTag = "Имя: ";
var year = "Вам: ";
var fam = "Фамилия: ";
var mon = "Власть деняк: ";

var names = prompt("Имя?");
var data = parseInt(prompt("Год рождения?"));
var family = prompt("Фамилия?");
var money = prompt("Ты любишь деньги?");

var backTime = "1973";
var newTime = "2023";

if (data == backTime) {
  var result = parseInt(newTime - backTime);
}
console.log(year + result);

console.log(nameTag + names);
console.log(year + data);
console.log(fam + family);
console.log(mon + money);

confirm(names + family);
