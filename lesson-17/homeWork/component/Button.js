import { Component } from "../core/Component";

export class Button extends Component {
  constructor(option) {
    super(option);

    this.tagName = "button";
    this.className = ["button"];

    this.events = {
      click: this.getLetter,
    };
  }

  getLetter(e) {
    console.log("[e.target.value]", e.target.textContent);
  }
}
