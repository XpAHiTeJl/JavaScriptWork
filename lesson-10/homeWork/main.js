"use strict";
console.log("----------------------------------------");

function calc() {

  const num1 = getNumber();
  const num2 = getNumber();

  const number = prompt("Какие символы ты хочешь ввести? ");
  console.log(number);


  switch (number) {
    case "+":
        alert(num1 + num2);
      break;
  
    case "-":
        alert(num1 - num2);
      break;
  
    case "/":
        alert(num1 / num2);
      break;
  
    case "*":
        alert(num1 * num2);
      break;
  
    default:
      alert("Введи корректное ЧИСЛО! ")
      break;
  }

  function isInvalid(num) {
    return isNaN(num)
}

  function getNumber() {
    let trueFunk = true;

    while (trueFunk) {
      const num = +prompt("Введи число : ");
      trueFunk = isInvalid(num);
      if (!toggler) return num;
            
            if(toggler) {
                alert("Ты должен ввести корректное ЧИСЛО! ");
            }
    }
  }
}
