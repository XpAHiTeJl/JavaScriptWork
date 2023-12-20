"use strict";

import { Component } from "./core/Component";
import { toHTML } from "./core/render";

import { Button } from "./component/Button";
import { Keyboard } from "./component/Keyboard";
import { Screen } from "./component/Screen";
import { Input } from "./component/Input";

import "./style.css";

const app = document.querySelector("#app");

const inputs = [
  toHTML(
    new Input({
      placeholder: "Type consumers name!",
      className: "additional-class",
      name: "consumer",
      events: {
        change: (e) => {
          console.log("There was change event!");
        },
      },
    })
  ),
  toHTML(
    new Input({
      placeholder: "Message",
      className: "msg",
      name: "msg",
      events: {
        change: (e) => {
          console.log("There was change event on 'msg' element!");
        },
      },
    })
  ),
];

const kayboard = new Keyboard({
  children: [
    new Button({ textContent: "a" }),
    new Button({ textContent: "b" }),
    new Button({ textContent: "c" }),
    new Button({ textContent: "d" }),
    new Button({ textContent: "e" }),
    new Button({ textContent: "f" }),
    new Button({ textContent: "g" }),
    new Button({ textContent: "h" }),
    new Button({ textContent: "i" }),
    new Button({ textContent: "j" }),
    new Button({ textContent: "l" }),
    new Button({ textContent: "m" }),
    new Button({ textContent: "n" }),
    new Button({ textContent: "o" }),
    new Button({ textContent: "p" }),
    new Button({ textContent: "q" }),
    new Button({ textContent: "r" }),
    new Button({ textContent: "s" }),
    new Button({ textContent: "t" }),
    new Button({ textContent: "u" }),
    new Button({ textContent: "v" }),
    new Button({ textContent: "w" }),
    new Button({ textContent: "x" }),
    new Button({ textContent: "y" }),
    new Button({ textContent: "z" }),
  ],
});

app.append(...inputs);
app.append(toHTML(kayboard));
app.append(
  toHTML(
    new Component({
      tagName: "footer",
      nestedHTML: {
        position: "afterbegin",
        elements: " <h3> All rights Reserved(c) 2023 </h3>",
      },
    })
  )
);
