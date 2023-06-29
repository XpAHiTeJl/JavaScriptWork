"use strict";

const lvl = "#";

const lastLvlDungeons = "######" .length;

let lvlDungeon = "";

const newLvlDungeon = "\n";

console.log('[lstLvl]', lastLvlDungeons );

// * добавление каждому этажу # * i + абзац ( \n )
for(let i = 1 ; i < lastLvlDungeons + 1 ; i++){
  
  lvlDungeon += lvl.repeat(i) + newLvlDungeon;
}
console.log(lvlDungeon)