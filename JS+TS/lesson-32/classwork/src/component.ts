import { append, appendMany } from "./append";

import { isExisting } from "./isExisting";

interface IComponent {
  tagName: String;
  className: String;
  textContent: Boolean;
}

export class Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    type,
    ...attrs
  }: IComponent) {
    if (!tagName) return;
    this.tagName = tagName;
    this.className = className;
    if (textContent) this.textContent = textContent;
    this.html = html;
    this.children = children;
    if (events) this.events = events;
    if (type) this.type = type;
    this.attrs = attrs;

    const element = document.createElement(this.tagName);
    if (this.className) element.className = this.className;
    if (this.textContent) element.textContent = this.textContent;
    if (this.html) element.insertAdjacentHTML(html.position, html.htmlText);
    if (this.type) element.type = this.type;

    if (this.children) {
      for (const child of this.children) {
        append(element, child);
      }
    }
    if (this.attrs) {
      for (const attr in this.attrs) {
        const value = this.attrs[attr];

        element[attr] = value;
      }
    }

    if (isExisting(events)) {
      for (const event in events) {
        element.addEventListener(event, events[event]);
      }
    }

    return element;
  }
}
