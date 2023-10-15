import { AGE_BY_DEFAULT, REL_BY_DEFAULT } from "../../constants";
import { salaries } from "../../interfaces";

export class Human {
  #name;
  #surname;
  #age;
  #salary;
  #gender;
  #balance;
  #rel;
  #job;
  constructor({ name, surname, salary, gender, balance, job }) {
    this.#name = name;
    this.#surname = surname;
    this.#age = AGE_BY_DEFAULT;
    this.#salary = salary || 0;
    this.#gender = gender;
    this.#balance = balance;
    this.#rel = REL_BY_DEFAULT;
    this.#rel = job;
  }

  setSalary(salary) {
    this.#salary = salary;
  }

  setJob(job) {
    this.#job = job;
    this.setSalary(salaries.filter((el) => el.job === job)[0].salary);
  }

  getName() {
    return this.#name;
  }
  getSalary() {
    return this.#salary;
  }
}
