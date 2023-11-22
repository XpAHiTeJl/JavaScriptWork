import "./style.css";
import { Component } from "./Component";
import { append } from "./append";

// const clsBtn = document.querySelector(".loader");
// const cont = document.querySelector(".content");

let isAwait = true;
new Promise((res, rej) => {
  setTimeout(() => {
    isAwait = true;

    res(isAwait);
  }, 3000);
}).then((val) => {
  console.log("test");
  const main = new Component({
    tagName: "div",
    className: "main-timer",
    children: [
      new Component({
        tagName: "button",
        className: "button-stay",
        textContent: "Я тут",
      }),
      new Component({
        tagName: "button",
        className: "button-leave",
        textContent: "Меня нет",
      }),
    ],
  });
  const timer = new Component({
    tagName: "div",
    className: "loader",
    children: addtimers(),
  });
  function addtimers() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    // Создаем элемент счетчика
    const countdown = document.createElement("div");
    countdown.classList.add("countdown");
    modal.appendChild(countdown);

    // Обратный отсчет
    let counter = 10;
    const countdownInterval = setInterval(() => {
      countdown.textContent = counter;
      counter -= 1;

      if (counter < 0) {
        clearInterval(countdownInterval);
        modal.style.display = "none";
        timer.style.display = "none";
        main.style.display = "none";
      }
    }, 1000);

    append(app, modal);
  }
  append(app, timer);
  append(app, main);
});

const app = document.querySelector("#app");
