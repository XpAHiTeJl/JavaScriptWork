"use strict";

const userName = prompt("Как тебя зовут?");
const userDamage = prompt("Сколько у тебя урона, введи от 1 до 99");
const userhp = prompt("Какова твоя защита, введи от 1 до 99");

const isValidDamage = validateData(userDamage);
const isValidhp = validateData(userhp);

function validateData(data) {
  let isStrValue = true;
  let isNumValue = true;

  for (let i = 0; i < data.length; i++) {
    const value = +data[i];

    if (isNaN(value)) {
      isStrValue = false;
      continue;
    }

    if (typeof value === "number") {
      isNumValue = true;
    }
  }

  if (isStrValue && isNumValue) {
  } else {
    console.log("В значениях должны быть только ЦИФРЫ!");
  }
  if (data.length <= 2) return true;
  alert("Введи цифры от 1 до 99");
  return false;
}

class Hero {
  constructor(name, damage, hp) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
  }

  attack(anotherHero) {
    anotherHero.hp = anotherHero.hp - this.damage;

    return anotherHero.hp;
  }
}

const hero = new Hero(userName, userDamage, userhp);
console.log(hero);
const hero2 = new Hero("Alan", randomInteger(1, 99), randomInteger(1, 99));
console.log(hero2);

const finishHP = hero.attack(hero2);
console.log("У противника осталось: ", finishHP, "хп");

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

class user {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    console.log(user);
  }

  returnFullData() {
    return this;
  }

  getPassword() {
    return this.password;
  }
  getEmail() {
    return this.email;
  }
  getName() {
    return this.name;
  }
}
