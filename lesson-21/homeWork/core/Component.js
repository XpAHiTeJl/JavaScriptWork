import { isArray } from "../utils/isArray";
import { append } from "../utils/append";

export class Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    if (!tagName) return;
    this.tagName = tagName;
    this.className = className;
    this.textContent = textContent;
    this.html = html;
    this.children = children;
    this.events = events;
  }
}
