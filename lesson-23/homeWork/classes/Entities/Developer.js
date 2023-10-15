import { Human } from "./Human";
import { salaries } from "../../interfaces";

export class Developer extends Human {
  constructor({ name, surname, salary, gender, balance, job }) {
    super({ name, surname, salary, gender, balance, job });
    this.setSalary(salaries.developer);
  }
}
