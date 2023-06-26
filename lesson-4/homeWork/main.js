import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


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
