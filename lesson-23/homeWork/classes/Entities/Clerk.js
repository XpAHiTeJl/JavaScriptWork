import { Human } from "./Human";
import { salaries } from "../../interfaces";

export class Clerk extends Human {
  constructor({ firstName, salary, gender, balance, job }) {
    super({ firstName, salary, gender, balance, job });
    this.setSalary(salaries.clerk);
  }
}
