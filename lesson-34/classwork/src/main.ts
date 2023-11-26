import "./style.css";

import { Component, append } from "../core";

const app = document.querySelector("#app");
const valutetext = document.querySelectorAll(".valutetext");
const resultmenu = document.querySelector(".result-menu");
const selectmenu1 = document.querySelector(".selectmenu1");
const selectmenu2 = document.querySelector(".selectmenu2");
const resultbtn = document.querySelector(".resultbtn");
const modalWindowBack = document.querySelector(".modalWindowBack");

removeselect();
function removeselect() {
  selectmenu1?.addEventListener("change", (e) => {
    const targetselect1 = e.target.value;
    console.log(targetselect1);
    for (let i = 0; i < selectmenu2.length; i++) {
      const element = selectmenu2[i];

      if (element.value === targetselect1) {
        element.classList.toggle("hidden");
      } else {
        element.classList.remove("hidden");
      }
    }
  });

  selectmenu2?.addEventListener("change", (e) => {
    const targetselect2 = e.target.value;
    console.log(targetselect2);
    for (let i = 0; i < selectmenu1.length; i++) {
      const element = selectmenu1[i];

      if (element.value === targetselect2) {
        element.classList.toggle("hidden");
      } else {
        element.classList.remove("hidden");
      }
    }
  });
}

resultbtn.addEventListener("click", (e) => {
  sum();
});

function sum() {
  let kurs = { USD: 36, EUR: 39, UAH: 1 };

  let s = 0;

  if (selectmenu1.value === selectmenu2.value) {
    resultmenu.value = valutetext.value;
  } else {
    if (selectmenu1.value != "UAH") {
      s = valutetext.value * kurs[selectmenu1.value];

      resultmenu.value = Math.ceil((s / kurs[selectmenu2.value]) * 100) / 100;
    } else {
      resultmenu.value =
        Math.ceil(valutetext.value * kurs[selectmenu2.value] * 100) / 100;
    }
  }

  valutetext.oninput = function () {
    sum();
  };
  selectmenu1.onchange = function () {
    sum();
  };

  selectmenu2.onchange = function () {
    sum();
  };
}
backgroundmodal();
function backgroundmodal() {
  let counter = 0;

  valutetext.forEach((input) => {
    input.addEventListener("blur", () => {
      counter++;
      console.log(`Количество потерянных фокусов: ${counter}`);

      if (counter > 2) {
        parametr();
        async function parametr() {
          await setTimeout(() => {
            modalWindowBack.classList.toggle("hidden");
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
                  modalWindowBack.classList.toggle("hidden");
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
          }, 1);
        }
      }
    });
  });
}
