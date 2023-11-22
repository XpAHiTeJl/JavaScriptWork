import "./style.css";

const valutetext = document.querySelector(".valutetext");
const resultmenu = document.querySelector(".result-menu");
const selectmenu1 = document.querySelector(".selectmenu1");
const selectmenu2 = document.querySelector(".selectmenu2");
const resultbtn = document.querySelector(".resultbtn");

let kurs = { USD: 36, EUR: 39, UAH: 1 };

resultbtn.addEventListener("click", (e) => {
  sum();
});
removeselect();
function removeselect() {
  if (selectmenu1.value === selectmenu2.value) {
  }
}

function sum() {
  let s = 0;

  if (selectmenu1.value === selectmenu2.value) {
    resultmenu.value = valutetext.value;
  } else {
    if (selectmenu1.value != "UAH") {
      s = valutetext.value * kurs[selectmenu1.value];

      resultmenu.value = Math.ceil((s / kurs[selectmenu2.value]) * 100) / 100;
    } else {
      resultmenu.value =
        Math.ceil(valutetext.value * kurs[selectmenu2.value] * 100) / 100;
    }
  }

  valutetext.oninput = function () {
    sum();
  };
  selectmenu1.onchange = function () {
    sum();
  };

  selectmenu2.onchange = function () {
    sum();
  };
}
