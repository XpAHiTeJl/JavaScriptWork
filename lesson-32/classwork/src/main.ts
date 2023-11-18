import "./style.scss";
import { Component } from "./component";
import { render } from "./render";
import { remove } from "./append";

const addbtn = document.querySelector("#Add");
const removebtn = document.querySelector("#Remove");
const formPerson = document.querySelector("#formPerson");
const addperson = document.querySelector("#addperson");
const name = document.querySelector("#Name");
const age = document.querySelector("#Age");
const select = document.querySelector("#select");
const checkbox = document.querySelector("#scales");
const checkboxredy = document.querySelector(".checkbox-redy");
const namemain = document.querySelector(".main-name");
const mainage = document.querySelector(".main-age");
const maingender = document.querySelector(".main-gender");
const tablea = document.querySelector("#tablea");

addbtn.addEventListener("click", (e) => {
  if (formPerson.className.includes("--active")) {
    formPerson.className = "formPerson";
  } else {
    formPerson.className = "formPersonl--active";
  }
});

addperson.addEventListener("click", (e) => {
  console.log("Имя:", name.value);
  console.log("Возраст:", age.value);
  console.log("Пол:", select.value);
  console.log("Готовность:", checkbox.checked);
  console.log("--------------------");

  const block = new Component({
    tagName: "tr",
    className: "main-profile",
    children: [
      new Component({
        tagName: "td",
        className: "td",
        textContent: document.getElementById("Name").value,
      }),
      new Component({
        tagName: "td",
        className: "td",
        textContent: document.getElementById("Age").value,
      }),
      new Component({
        tagName: "td",
        className: "td",
        textContent: document.getElementById("select").value,
      }),
      new Component({
        tagName: "td",
        className: "td",
        textContent: new Boolean(document.getElementById("scales").checked),
      }),
      new Component({
        tagName: "input",
        className: "checkplayer",
        type: "checkbox",
      }),
    ],
  });
  appendElement(tablea, block);
  clearValue();
});

removebtn.addEventListener("click", (e) => {
  let profpers = document.querySelectorAll(".main-profile");
  for (const fulmain of profpers) {
    let brovs = fulmain.children[4];

    if (brovs.checked === true) {
      console.log(brovs);
    }
  }
});

// function nameprofil() {
//   let value = document.getElementById("Name").value;
//   if (!value) return;
//   let container = document.createElement("td");
//   container.className = "td";
//   container.innerHTML = value;
//   document.querySelector(".main-profile").appendChild(container);
// }
// function ageprofil() {
//   let value = document.getElementById("Age").value;
//   if (!value) return;
//   let container = document.createElement("td");
//   container.className = "td";
//   container.innerHTML = value;
//   document.querySelector(".main-profile").appendChild(container);
// }
// function genderprofil() {
//   let value = document.getElementById("select").value;
//   if (!value) return;
//   let container = document.createElement("td");
//   container.className = "td";
//   container.innerHTML = value;
//   document.querySelector(".main-profile").appendChild(container);
// }
// function redyprofile() {
//   let value = document.getElementById("scales").checked;
//   if (!value) return;
//   let container = document.createElement("td");
//   container.className = "td";
//   container.innerHTML = value;
//   document.querySelector(".main-profile").appendChild(container);
// }

// namemain.appendChild(
//   document.createTextNode(document.querySelector("#Name").value)
// );
// mainage.appendChild(
//   document.createTextNode(document.querySelector("#Age").value)
// );
// maingender.appendChild(
//   document.createTextNode(document.querySelector("#select").value)
// );
// checkboxredy.appendChild(
//   document.createTextNode(document.querySelector("#scales").checked)
// );

const appendElement = (node, element) => {
  node.append(element);
};

function clearValue() {
  document.querySelector("#Name").value = "";

  document.querySelector("#Age").value = "";

  document.querySelector("#select").value = "";

  document.querySelector("#scales").checked = "";
}
