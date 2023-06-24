"use strict";

var invalidData = {
  userName: true,
  userEmail: true,
  userPassword: true,
  userAge: true,
};

while (invalidData.userName) {
  var userName = prompt("Как тебя зовут ?");
  if (userName.length > 2) invalidData.userName = false;
}

if (invalidData.userName === false) {
  console.log("Имя корректное!");

  while (invalidData.userEmail) {
    var userEmail = prompt("Каков твой Эмэил ?");

    for (var i = 0; i < userEmail.length; i++) {
      var char = userEmail[i];

      if (char === "@") {
        console.log("Почта корректна!");
        invalidData.userEmail = false;
        break;
      }
    }
  }
}
if (invalidData.userEmail === false) {
  while (invalidData.userPassword) {
    var userPassword = prompt("Какой у тебя пароль?");

    var NumberInPassword = false;
    var StrInPassword = false;

    for (var i = 0; i < userPassword.length; i++) {
      var char = parseInt(userPassword[i]);

      if (!isFinite(char)) {
        console.log("Первое");
        NumberInPassword = true;
      } else {
        console.log("Второе");
        StrInPassword = true;
      }
    }

    if (userPassword.length > 7 && NumberInPassword && StrInPassword) {
      console.log("Here");
      invalidData.userPassword = false;
      break;
    }
  }
}

while (invalidData.userAge){
  var userAge = prompt("Сколько тебе лет ?");

  if (userAge >= 18) invalidData.userAge = false
  console.log("Добро пожаловать!")
}
