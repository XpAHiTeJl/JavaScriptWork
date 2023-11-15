import "./style.scss";

const addbtn = document.querySelector("#Add");
const formPerson = document.querySelector("#formPerson");
const addperson = document.querySelector("#addperson");
const name = document.querySelector("#Name");
const age = document.querySelector("#Age");
const select = document.querySelector("#select");
const checkbox = document.querySelector("#scales");
const namemain = document.querySelector(".main-name");

addperson.addEventListener("click", (e) => {
  console.log("Имя:", name.value);
  console.log("Возраст:", age.value);
  console.log("Пол:", select.value);
  console.log("Готовность:", checkbox.checked);

  namemain?.appendChild(
    document.createTextNode(document.querySelector("#Name").value)
  );
});

addbtn.addEventListener("click", (e) => {
  if (formPerson.className.includes("--active")) {
    formPerson.className = "formPerson";
  } else {
    formPerson.className = "formPersonl--active";
  }
});
