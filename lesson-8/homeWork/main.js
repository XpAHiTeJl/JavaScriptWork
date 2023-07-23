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

function showStudents() {
  
}
