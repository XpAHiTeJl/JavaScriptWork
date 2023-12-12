import "./style.css";
import { Component, append, render } from "../core/index";

const app = document.getElementById("app");

const modal = new Component({
  className: "block",
  textContent: "qwe",
});

append(app, modal);
