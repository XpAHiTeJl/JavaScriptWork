import { Component } from "../core/Component";

export class Input extends Component {
  constructor(option) {
    super(option);

    this.tagName = "input";
    this.className = ["input", option.className].join(" ");

    this.events = {
      keydown: this.getInputValue,
    };
    for (const event in option.events) {
      const eventFunction = option.events[event];

      this.events[event] = eventFunction;
    }
  }

  getInputValue(e) {
    const inputsLength = e.target.value.length;
    console.log(e.target.value);

    if (inputsLength < 4) {
      e.target.style.background = "red";
    } else {
      e.target.style.background = "green";
    }
  }
}
