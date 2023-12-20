import "./style.css";
import { Component } from "./Component";
import { append } from "./append";

const app = document.querySelector("#app");

parametr();

async function parametr() {
  await setTimeout(() => {
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
          removemenu();
        }
      }, 1000);

      append(app, modal);

      setTimeout(() => {
        const nextime = document.getElementsByClassName("button-stay");
        nextime[0].addEventListener("click", (e) => {
          counter = 10;
        });
        const stoptime = document.querySelector(".button-leave");
        stoptime?.addEventListener("click", (e) => {
          removemenu();
        });
      }, 1000);

      function removemenu() {
        clearInterval(countdownInterval);
        modal.remove();
        timer.remove();
        main.remove();
      }
    }

    append(app, timer);
    append(app, main);
  }, 3000);
}
