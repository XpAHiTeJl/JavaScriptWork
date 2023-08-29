"use strict";

console.log("----------------------------------------------------------------");
console.log("Element ID , Element TagName , ElementClassName , Selector!");
console.log("----------------------------------------------------------------");

const classNameForm = document.getElementsByClassName("form-input ");
console.log("[className]", classNameForm);

const getElement = document.getElementById("kek");
console.log("[getElement]", getElement);

const selector = document.querySelector("form")[0];
console.log("[selector]", selector);

const form = document.getElementsByTagName("form")[0];
console.log("[Tag Name]", form);

console.log("----------------------------------------------------------------");

const children = document.getElementsByTagName("form")[0].children;
console.log("[CHILDREN]", children);
const spreadChildren = [...children];

console.log("----------------------------------------------------------------");
console.log("Данные в масиве ");
// Жаба скрипт
console.log("[SPREAD_CHILDREN]", [...children]);
console.log("[spreadChildren]", spreadChildren);

//  Время появления  текста \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const certainInput = spreadChildren.filter(
//   (child) => child.id === "certain-input"
// )[0];

// setTimeout(() => {
//   certainInput.value = "Here we are!";
// }, 4000);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log("----------------------------------------------------------------");
console.log("Возврат элементов с их координатами ");
console.log("----------------------------------------------------------------");

for (let i = 0; i < children.length; i++) {
  const element = children[i];
  // console.log("[element.style]", element.style);

  console.log("[element.coordinates]", element.getBoundingClientRect());

  if (element.id === "certain-input") {
    // setTimeout(() => {
    //   element.style.background = "green";
    //   console.log("[Текст который был введен в First Name: ]", element.value);
    // }, 4000);
  }
}
console.log("----------------------------------------------------------------");
// Цвет серый
const side = document.getElementById("side");
side.style.background = "gray";
console.log("[side]", side);
// --------------------------------------

const forms = document.getElementById("form");
const FirstName = document.getElementById("certain-input");
const LastName = document.getElementById("kek");

forms.addEventListener("submit", function (e) {
  e.preventDefault();

  const FirstNameValue = FirstName.value.trim();
  const LastNameValue = LastName.value.trim();

  if (FirstNameValue.length > 4 && LastNameValue.length > 5) {
    FirstName.style.background = "blue";
    LastName.style.background = "blue";
  } else {
    if (FirstNameValue.length <= 4) {
      FirstName.style.background = "red";
      console.log("[failed]", "В имени должно быть больше 4");
      FirstName.focus();
    }
    if (LastNameValue.length <= 5) {
      LastName.style.background = "red";
      console.log("[failed]", "В фамилии должно быть больше 5");
      LastName.focus();
    }
  }
});
