"use strict";



const  persona = {
   age:"25",
   name:"Dima",
   isAdmin: true,
}


persona.age = parseInt(prompt("Каков твой возраст?" ));
persona.name = prompt("Каков твой имя?" );
persona.isAdmin = confirm("Ты главный?" );

const prop = prompt("Введите новый ключь ");

persona[prop] = prompt("Введите значение для нового ключа");

const personaNewKey = persona[prop];

const newKeyValue = parseInt(personaNewKey);

const isFiniteNewKey = isFinite(newKeyValue);

if(isFiniteNewKey){

  persona[prop] = newKeyValue;
  
  console.log(persona);
}

