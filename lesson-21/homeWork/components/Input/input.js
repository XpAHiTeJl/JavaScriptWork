import { Component } from "../../core/Component";

import "./Input.scss";

export class Input extends Component {
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

    this.input = document.createElement(tagName);
    this.input.className = "input" + className;
    this.input.textContent = textContent ? textContent : "";

    return this.input;
  }
}
