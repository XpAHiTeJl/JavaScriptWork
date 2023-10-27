import { Human } from "./classes";
import { getRandomNumber } from "./utils/getRandomNumber";
import { genders } from "./interfaces/gender";

export const PERSON_BY_DEFAULT = [
  new Human({
    firstName: "John",
    job: null,
    balance: 1000000,
    salary: 1500,
    age: 36,
    gender: genders.male,
    avatar: "./public/images/john.jpg",
  }),
  new Human({
    firstName: "Mike",
    job: null,
    balance: 100000,
    salary: 800,
    age: 17,
    gender: genders.male,
    avatar: "./public/images/mike.jpg",
  }),
  new Human({
    firstName: "Bob",
    job: null,
    balance: 10,
    salary: 2300,
    age: 22,
    gender: genders.male,
    avatar: "./public/images/bob.jpg",
  }),
  new Human({
    firstName: "Jim",
    job: null,
    balance: -2000,
    salary: 1700,
    age: 32,
    gender: genders.male,
    avatar: "./public/images/jim.jpg",
  }),
];
