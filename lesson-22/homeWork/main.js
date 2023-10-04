import "./style.css";
import { Component } from "./core/component";
import { render } from "./core/render";

const app = document.querySelector("#app");
app.addEventListener("click", (e) => {
  const currentElement = e.target;
  console.log(currentElement);
});

const history = [];

const MightBlock = new Component({
  tagName: "div",
  className: "MightBlock",
  id: "Block",
}).toHtml();

render(MightBlock, app);

const videotitle = new Component({
  tagName: "div",
  id: "video",
  textContent: "Videos",
}).toHtml();

render(videotitle, MightBlock);

const musictitle = new Component({
  tagName: "div",
  id: "music",
  textContent: "Musics",
}).toHtml();
render(musictitle, MightBlock);

const abouttitle = new Component({
  tagName: "div",
  id: "about",
  textContent: "About US",
}).toHtml();
render(abouttitle, MightBlock);

const titleHistory = new Component({
  tagName: "div",
  id: "history",
  textContent: "History",
}).toHtml();
render(titleHistory, MightBlock);

titleHistory.addEventListener("click", (e) => {
  console.log(...history);
});

for (const child of MightBlock.children) {
  if (child !== titleHistory) {
    child.addEventListener("click", (e) => {
      const currentDate = new Date();
      const fullDate =
        currentDate.getMonth() +
        1 +
        "." +
        currentDate.getDate() +
        " (" +
        currentDate.getHours() +
        ":" +
        currentDate.getMinutes() +
        ":" +
        currentDate.getSeconds() +
        ")" +
        " Next";
      const childsInfoAboutClick = [child.textContent, ", at", fullDate].join(
        " "
      );
      history.push(childsInfoAboutClick);
    });
  }
}
