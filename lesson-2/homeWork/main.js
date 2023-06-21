"use strict";

var invalidData = {
  userName: true,
  userEmail: true,
  userPassword: true,
  userAge: true,
};

var userEmail = prompt("Каков твой Эмэил ?");
var userPassword = prompt("Какой у тебя пароль?");
var userAge = prompt("Сколько тебе лет ?");

while (invalidData.userName) {
  var userName = prompt("Как тебя зовут ?");

  if (userName.length > 2) invalidData.userName = false;
}

if (invalidData.userName === false) {
  console.log("Имя корректное!");

  while (invalidData.userEmail) {
    for (var i = 0; i < userEmail.length; i++) {
      var char = userEmail[i];
      if (char === "@") invalidData.userEmail = false;
    }
  }
}
