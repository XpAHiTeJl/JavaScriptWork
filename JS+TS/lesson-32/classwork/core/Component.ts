interface IComponent {
  tagName;
  className;
  children;
  events;
  textContent;
  html;
  attrs;
}

export class Component {
  tagName;
  className;
  textContent;
  events;
  children;
  attrs;
  html;

  constructor({
    tagName,
    className,
    children,
    events,
    textContent,
    html,
    ...attrs
  }) {
    this.tagName = tagName;
    this.className = className;
    this.textContent = textContent;
    this.events = events;
    this.children = children;
    this.attrs = attrs;
    this.html = html;
  }

  public gettagName() {
    return this.tagName;
  }
  public getclassName() {
    return this.className;
  }
  public gettextContent() {
    return this.textContent;
  }
  public getchildren() {
    return this.children;
  }
  public getevents() {
    return this.events;
  }
  public getattrs() {
    return this.attrs;
  }
  public gethtml() {
    return this.html;
  }
}
