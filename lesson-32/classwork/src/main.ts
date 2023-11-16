import "./style.scss";

const addbtn = document.querySelector("#Add");
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

  appendElement(namemain, document.querySelector("#Name").value);
  appendElement(mainage, document.querySelector("#Age").value);
  appendElement(maingender, document.querySelector("#select").value);
  appendElement(checkboxredy, document.querySelector("#scales").checked);
});

// function addRow(tableID) {
//   const tableRef = document.getElementById(tableID);

//   var newRow = tableRef.insertRow(1);

//   var newCell = newRow.insertCell(0);

//   var newText = document.createTextNode("New  row");

//   newCell.appendChild(newText);
// }
// addRow("tablea");

const appendElement = (node, element) => {
  node.append(element);
};
