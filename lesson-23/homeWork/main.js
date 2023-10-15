import "./style.css";
import {
  Human,
  Driver,
  Doctor,
  Developer,
  Admin,
  Clerk,
  Uneployed,
} from "./classes";
import { genders } from "./interfaces";

const john = new Human({
  name: "John",
  balance: 0,
  gender: genders.male,
});

const mike = new Driver({
  name: "Mike",
  balance: 0,
  gender: genders.male,
});

const alice = new Doctor({
  name: "Alice",
  balance: 0,
  gender: genders.famale,
});

const verden = new Developer({
  name: "Verden",
  balance: 0,
  gender: genders.male,
});

const margo = new Admin({
  name: "Margo",
  balance: 0,
  gender: genders.famale,
});

const ivan = new Clerk({
  name: "Ivan",
  balance: 0,
  gender: genders.male,
});

const bob = new Uneployed({
  name: "Bob",
  balance: 0,
  gender: genders.male,
});

console.log(john);
console.log(mike);
console.log(alice);
console.log(verden);
console.log(margo);
console.log(bob);
console.log(ivan);

console.log(john.getName());
