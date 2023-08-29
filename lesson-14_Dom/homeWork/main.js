"use strict";

const persone = {
  name: "Kiborg Vbivca",
};
console.log("Hello , " + persone.name);

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
const spreadChildren = [...children];

console.log("[CHILDREN]", children);

console.log("[SPREAD_CHILDREN]", [...children]);

console.log("[spreadChildren]", spreadChildren);

//  Врея появления  текста \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const certainInput = spreadChildren.filter(
  (child) => child.id === "certain-input"
)[0];

setTimeout(() => {
  certainInput.value = "Here we are!";
}, 3000);
console.log("[certainInput]", certainInput);
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
console.log("----------------------------------------------------------------");
console.log("Возврат элементов с их координатами ");
console.log("----------------------------------------------------------------");

for (let i = 0; i < children.length; i++) {
  const element = children[i];
  console.log("[element.style]", element.style);

  console.log("[element.coordinates]", element.getBoundingClientRect());
}
console.log("----------------------------------------------------------------");
