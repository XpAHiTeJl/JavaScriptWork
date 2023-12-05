import "./style.css";
const doskasahmat = document.getElementById("board");

const bukvi = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let stroka = 0; stroka < 8; stroka++) {
  const bukvishahmat = document.createElement("div");
  bukvishahmat.innerHTML = `<span>${bukvi[stroka]}</span>`;
  doskasahmat.append(bukvishahmat);
}
