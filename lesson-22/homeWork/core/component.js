import { render } from "./render";

export class Component {
  constructor({ tagName, id, textContent, children }) {
    if (tagName) this.tagName = tagName;
    if (id) this.id = id;
    if (textContent) this.textContent = textContent;
    if (children) this.children = children;
  }

  toHtml() {
    this.element = document.createElement(this.tagName);
    if (this.id) this.element.id = this.id;
    if (this.textContent) this.element.textContent = this.textContent;
    if (this.children) {
      for (const child of this.children) {
        render(child, this.element);
      }
    }

    return this.element;
  }
}
