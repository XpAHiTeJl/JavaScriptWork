import { Component } from "../../core/Component";

import "./Button.scss";

export class Button extends Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    super({
      tagName,
      className,
      textContent,
      html,
      children,
      events,
      ...attrs,
    });

    this.button = document.createElement("input");
    this.button.className = "button" + className;
    this.button.textContent = textContent ? textContent : "";

    return this.button;
  }
}
