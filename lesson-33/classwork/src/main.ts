import "./style.css";
import { Component } from "./Component";
import { append } from "./append";

// const clsBtn = document.querySelector(".loader");
// const cont = document.querySelector(".content");

// let isAwait = true;
// new Promise((res, rej) => {
//   setTimeout(() => {
//     isAwait = true;
//     // clsBtn.style.display = "none";
//     res(isAwait);
//   }, 5000);
// }).then((val) => {
//   console.log("test");

//   // if (val) cont.style.display = "flex";
// });

const app = document.querySelector("#app");

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

append(app, main);
