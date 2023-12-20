import { App as Application } from "./App/app";
import { Button, Input, Avatar } from "./components/index";

import { append, prepend } from "./utils/append";

import "./style.scss";

const buttons = [
  {
    textContent: "Change info",
  },
  {
    textContent: "Save",
  },
].map((btn) => {
  return new Button({
    tagName: "button",
    className: "btn",
    textContent: btn.textContent,
  });
});

const inputs = [
  {
    placeholder: "name",
    events: [
      {
        keydown: (e) => {
          const value = e.target.value;

          console.log(value);
        },
      },
    ],
  },
  {
    placeholder: "surname",
    events: [
      {
        keydown: (e) => {
          const value = e.target.value;

          console.log(value);
        },
      },
    ],
  },
].map((input) => {
  return new Input({
    tagName: "input",
    className: "input",
    placeholder: input.placeholder,
    events: input.events,
  });
});

const app = document.querySelector("body");

const App = new Application({
  tagName: "div",
  className: "app",
  children: [...buttons, ...inputs],
}).toHTML();

prepend(app, App);
