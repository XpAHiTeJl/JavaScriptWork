import "./style.css";

const valutetext = document.querySelector(".valutetext");
const resultmenu = document.querySelector(".result-menu");
const selectmenu1 = document.querySelector(".selectmenu1");
const selectmenu2 = document.querySelector(".selectmenu2");
const resultbtn = document.querySelector(".resultbtn");

removeselect();
function removeselect() {
  selectmenu1?.addEventListener("change", (e) => {
    const targetselect1 = e.target.value;
    console.log(targetselect1);
  });

  selectmenu2?.addEventListener("change", (e) => {
    const targetselect2 = e.target.value;
    console.log(targetselect2);
  });
}

let kurs = { USD: 36, EUR: 39, UAH: 1 };

resultbtn.addEventListener("click", (e) => {
  sum();
});
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
