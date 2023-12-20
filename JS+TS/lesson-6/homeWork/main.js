"use strict";
function validate() {
  const userName = getCardDetials(` Введи имя`);
  console.log("Имя:", userName);

  const userEmail = getCardDetials("Введи почту");
  console.log("Почта:", userEmail);

  const Password = getCardDetials(`Введи пароль`);
  console.log("Пароль:", Password);

  // debugger;

  const isValidEmail = validateEmail(userEmail);
  const isValidPassword = validatePassword(Password);

  if (isValidEmail || isValidPassword) return;
  alert("Поздравляю все в порядке!");
}

function validatePassword(Password) {
  let isStrValue = false;
  let isNumValue = false;

  for (let i = 0; i < Password.length; i++) {
    const value = +Password[i];

    if (isNaN(value)) {
      isStrValue = true;
      continue;
    }

    if (typeof value === "number") {
      isNumValue = true;
    }
  }

  if (isStrValue && isNumValue) console.log("В пароле есть цифры и буквы!");

  if (Password.length >= 8) return false;
  alert("Пароль коротки!");
  return true;
}

function validateEmail(Email) {
  if (Email.includes("@") && Email.includes(".")) return false;
  alert("Не указан @ или . ");
  return true;
}

function getCardDetials(msg) {
  return prompt(msg);
}

validate();
