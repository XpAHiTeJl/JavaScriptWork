import "./style.css";
import { Component } from "./core/component";
import { render } from "./core/render";

const app = document.querySelector("#app");

function counter(num) {
  num += 1;
  return num;
}

function childrenPlus(title) {
  title.addEventListener("click", (e) => {
    let cifra = title.children[0].textContent;
    const chil = parseInt(cifra);
    title.children[0].textContent = counter(chil);
  });
}

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
  children: [
    new Component({
      tagName: "div",
      textContent: "0",
    }).toHtml(),
  ],
}).toHtml();
childrenPlus(videotitle);
render(videotitle, MightBlock);

const musictitle = new Component({
  tagName: "div",
  id: "music",
  textContent: "Musics",
  children: [
    new Component({
      tagName: "div",
      textContent: "0",
    }).toHtml(),
  ],
}).toHtml();
childrenPlus(musictitle);
render(musictitle, MightBlock);

const abouttitle = new Component({
  tagName: "div",
  id: "about",
  textContent: "About US",
  children: [
    new Component({
      tagName: "div",
      textContent: "0",
    }).toHtml(),
  ],
}).toHtml();
childrenPlus(abouttitle);
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
        " ||";
      const childsInfoAboutClick = [child.textContent, "Data:", fullDate].join(
        " "
      );
      history.push(childsInfoAboutClick);
    });
  }
}
