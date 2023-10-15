import { Human } from "./Human";
import { salaries } from "../../interfaces";

export class Driver extends Human {
  constructor({ name, surname, salary, gender, balance, job }) {
    super({ name, surname, salary, gender, balance, job });
    this.setJob("driver");
  }
}
