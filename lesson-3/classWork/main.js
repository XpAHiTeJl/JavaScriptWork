"use strict";

// Task
// 1) Validation for : name and age
// name - should contain : . as a first character in the string
// name - should contain : !  as a last character in the string

// if name is correct

// 2) age - user age should divide on 4 without part after divide operation

var validation = {
  isValidName: false,
  isValidAge: false,
};

while (!validation.isValidName) {
  var userName = prompt("Как тебя зовут?");
  // Kir
  // 0123
  if (userName[0] === "." && userName[userName.length - 1] === "!") {
    validation.isValidName = true;
    break;
  }
}
var userAge = promt("Возраст");
if (userAge % 4 === 0) {
}
console.log("Возраст четкий");
