import { Human } from "./Human";
import { salaries } from "../../interfaces";

export class Driver extends Human {
  constructor({ firstName, salary, gender, balance, job }) {
    super({ firstName, salary, gender, balance, job });
    this.setJob("driver");
  }
}
