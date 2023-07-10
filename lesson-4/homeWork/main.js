"use strict";
//  дз номер 1 сделать пирамиду

// const lvl = "#";

// const lastLvlDungeons = "######" .length;

// let lvlDungeon = "";

// const newLvlDungeon = "\n";

// console.log('[lstLvl]', lastLvlDungeons );

// // * добавление каждому этажу # * i + абзац ( \n )
// for(let i = 1 ; i < lastLvlDungeons + 1 ; i++){

//   lvlDungeon += lvl.repeat(i) + newLvlDungeon;
// }
// console.log(lvlDungeon)


//  ДЗ номер 2 сделать мини елочку с пробелами


const rowSharp = 8;
const rowLength = 8;

const space = " ";
const symbol= "#";
const breaks = "\n";

let result = "";

for (let i = 0; i < rowSharp; i++) {
    let str = "";

    if ( i % 2 === 0) {
      str += space ;
}

    for( let j = 0 ; j < rowLength ; j++){

    if ( j % 2 === 0) {
          str += space ;
    } 
    else{
          str += symbol;
      }
    }

    result += str + breaks;
  
}
console.log(result)