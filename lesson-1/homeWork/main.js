"use strict";
var nameTag = "Имя: ";
var year = "Год: ";
var fam = "Фамилия: ";
var mon = "Власть деняк: ";

let names = prompt("Имя?");
let data = parseInt(prompt("Год рождения?"));
var family = prompt("Фамилия?");
let money = confirm("Ты любишь деньги?");

var backTime = "1973";
var newTime = "2023";

if (money == true) {
  alert("Welcome to party");
} else {
  alert("Good Bay");
}

if (data == backTime) {
  let result = parseInt(newTime - backTime);
  let year = "Возраст:";
  console.log(year + result);
}
console.log(nameTag + names);
console.log(year + data);
console.log(fam + family);

confirm(names + ":" + family);
