"use strict";
console.log("----------------------------------------");

const students = [
  "John",
  "Mike",
  "Bob",
  "Don",
];
console.log('[Все студенты]',students);
students.push('Ruslan');

console.log('[добавить в конец]',students);

students.unshift('Ruslan');
console.log('[добавить вверх]',students);

students.pop();
console.log('[удаление вниз]',students);

const pureFunction = upgradeStudents(students);
console.log('[pureFunction]',pureFunction);

function upgradeStudents(arr) {
  let nestedArr = [];

  if(!Array.isArray(arr)) return;

  for(let i = 0; i < arr.length; i++) {
    const entity = arr [i];

    nestedArr.push({
        name : entity,
        age : Math.random().toFixed(2).slice(2)
    })
  }
    
  return nestedArr
}
// Выризаем людей
console.log("----------------------------------------");

const searchText = "HelloDimaWorldMishaNeRuslanDota?";
console.log('[searchText]',searchText);


const dimaStr = 'Dima'

const startIndex = searchText.indexOf(dimaStr);
const lastIndex = startIndex + dimaStr.length;

console.log('[startIndex]',startIndex);
console.log('[lastIndex]',lastIndex);

// Отдельный текст с выризанным Дима

const startName = searchText.slice(0, startIndex );
const lastName = searchText.slice(lastIndex );
const mergStr = startName + lastName;

console.log('[mergStr]',mergStr);


const Dima = searchText.slice(startIndex, lastIndex );
console.log('[knifeDima]',Dima);
console.log("----------------------------------------");
// Валидность полезности ! 

hiMan('Kirill');
hiMan('Dota2');
hiMan('Студент');

function hiMan(name) {
    console.log("Привет," + name);
}

console.log("----------------------------------------");

const math = function ( x , y){
  return x - y
};
const result = math (250 ,175);
console.log("математика" , result);
console.log("----------------------------------------");
