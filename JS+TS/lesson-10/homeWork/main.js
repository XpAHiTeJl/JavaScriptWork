"use strict";
console.log("----------------------------------------");

function calc() {

  const num1 = getNumber1();
  console.log("Первое число :",num1);
  const num2 = getNumber2();
  console.log("Второе число :",num2);

  let isRunning = true ;
  while (isRunning) {
  const symbol = prompt("Какие символы ты хочешь ввести? ( + ) ( - ) ( / ) ( * ) ");

  switch (symbol) {
    case "+":
      isRunning = false ;
      console.log("Твой Символ : ",symbol);
      console.log("Ответ: ",num1 + num2 );
        alert(num1 + num2);

      break;
  
    case "-":
      isRunning = false ;
      console.log("Твой Символ : ",symbol);
      console.log("Ответ: ",num1 - num2 );
        alert(num1 - num2);
      
      break;
  
    case "/":
      isRunning = false ;
       console.log("Твой Символ : ",symbol);
      console.log("Ответ: ",num1 / num2 );
        alert(num1 / num2);
      
      break;
  
    case "*":
      isRunning = false ;
       console.log("Твой Символ : ",symbol);
      console.log("Ответ: ",num1 * num2 );
        alert(num1 * num2);
      
      break;
  
    default:
      break;
    }
  }
  


  function isInvalid(num) {
    return isNaN(num)
}

  function getNumber1() {
    let trueFunk = true;

    while (trueFunk) {
      const num = +prompt("Введи первое число : ");
      trueFunk = isInvalid(num);
      if (!trueFunk) return num;
            
            if(trueFunk) {
                alert("Ты должен ввести корректное ЧИСЛО! ");
            }
    }
  }
  function getNumber2() {
    let trueFunk = true;

    while (trueFunk) {
      const num = +prompt("Введи второе число : ");
      trueFunk = isInvalid(num);
      if (!trueFunk) return num;
            
            if(trueFunk) {
                alert("Ты должен ввести корректное ЧИСЛО! ");
            }
    }
  }
}
calc();
console.log("----------------------------------------");



