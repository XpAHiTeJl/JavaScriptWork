import {
  Component,
  toHTML,
  appendElement,
  appendElements,
  render,
} from "./core";

import { Megapolice, BaseCity, Human } from "./classes";

import { App as Application, Header, Footer, Main } from "./component";

import { getElementByClassName, getRandomNumber } from "./utils";

import { PERSON_BY_DEFAULT } from "./default";

import "./style.css";

const root = document.querySelector("#app");

const app = new Application({});

app.addChildren([
  new Header({
    children: [
      new Component({
        tagName: "a",
        className: "header-link",
        textContent: "About us ",
        events: {
          click: (e) => {
            render(
              main,
              new Component({
                tagName: "div",
                html: `<h2>About US </h2>`,
              }).toHTML()
            );
          },
        },
      }),
      toHTML(),
      new Component({
        tagName: "a",
        className: "header-link",
        textContent: "Login",
        events: {
          click: (e) => {
            render(
              main,
              new Component({
                tagName: "div",
                html: `<h2>Login</h2>`,
              }).toHTML()
            );
          },
        },
      }),
      toHTML(),
    ],
  }),
  new Main({
    children: [],
  }),
  new Footer({}),
]);

const App = app.toHTML();

const [header, main, footer] = App.children;
const randomPersonIndex = getRandomNumber(PERSON_BY_DEFAULT.length);

const player = PERSON_BY_DEFAULT[randomPersonIndex];

appendElement(
  main,
  new Component({
    tagName: "div",
    className: "person",
    html: `
    <h2 class='person-data'>Name : ${player.getName()}</h2>
    <h3 class='person-data'>Age : ${player.getAge()}</h3>
    <h3 class='person-data'>Salary : ${player.getSalary()}</h3>
    <h3 class='person-data'>Balance : ${player.getBalance()}</h3>

    <h3 class='person-data'>Relations : ${
      player.getRel() ? player.getRel() : "Single"
    }</h3>

    <div class="person-img-wrapper">
        <img class='person-img' src="${player.getAvatar()}"/>
    </div>
    `,
  }).toHTML()
);

appendElement(root, App);
