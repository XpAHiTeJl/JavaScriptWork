import { Human } from "./Human";
import { salaries } from "../../interfaces";

export class Developer extends Human {
  constructor({ firstName, salary, gender, balance, job }) {
    super({ firstName, salary, gender, balance, job });
    this.setSalary(salaries.developer);
  }
}
