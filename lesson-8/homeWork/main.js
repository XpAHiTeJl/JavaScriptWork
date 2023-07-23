"use strict";

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

const searchText = "HelloDimaWorldMishaNeRuslanDota?";
const dimaStr = 'Dima'

console.log('[searchText]',searchText);

const startIndex = searchText.indexOf(dimaStr);
const lastIndex = startIndex + dimaStr.length;


const startName = searchText.slice(0, startIndex )
const lastName = searchText.slice(lastIndex )

const mergStr = startName + lastName;
console.log('[mergStr]',mergStr);


console.log('[startIndex]',startIndex);
console.log('[lastIndex]',lastIndex);


const Dima = searchText.slice(startIndex, lastIndex );

console.log('[knifeDima]',Dima);
