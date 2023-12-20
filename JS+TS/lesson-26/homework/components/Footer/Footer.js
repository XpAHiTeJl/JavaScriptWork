import { AdvancedComponent, Component } from "../../core";

export class Footer {
  #component;

  constructor() {
    const license = new AdvancedComponent({
      tagName: "h4",
      textContent: " All rights reserved.",
    });

    this.#component = new Component({
      tagName: "footer",
      className: "footer",
      children: [license],
    });
  }

  get component() {
    return this.#component;
  }
}
