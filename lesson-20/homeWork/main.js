"use strict";

const randombukvi = "aBcdefghijKlmNopqRstuvWxyz".split("");

function bukvipositionNumber(bukvi) {
  let str = "";
  const lowerbukvitext = bukvi.toLowerCase();

  for (let i = 0; i < lowerbukvitext.length; i++) {
    const element = lowerbukvitext[i];

    for (let j = 0; j < randombukvi.length; j++) {
      if (randombukvi[j] === element) {
        str += j + 1 + " ";
      }
    }
  }
  return str.trim();
}

const result = bukvipositionNumber("This text does not carry any meaning");
console.log(result);
