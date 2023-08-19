"use strict";

const BUDGET_BY_DEFAULT = 0;
const INCOME_BY_DEFAULT = 2000;
const OUTCOME_BY_DEFAULT = 4100;

const extreactData = (people, prop) => {
  if (Array.isArray(people)) {
    let sum = 0;

    for (const perosn of people) {
      const value = perosn[prop];
      sum += value;
    }
    return sum;
  }
};

const IT_STEP = {
  budget: BUDGET_BY_DEFAULT,

  teachers: [
    {
      name: "John",
      surnam: "Doe",
      income: INCOME_BY_DEFAULT,
    },
    {
      name: "Mike",
      surnam: "Bibby",
      income: INCOME_BY_DEFAULT,
    },
  ],
  students: [
    {
      name: "Bob",
      surname: "Dylan",
      outcome: OUTCOME_BY_DEFAULT,
    },
    {
      name: "Jim",
      surname: "Root",
      outcome: OUTCOME_BY_DEFAULT,
    },
    {
      name: "Mick",
      surname: "Tompson",
      outcome: OUTCOME_BY_DEFAULT,
    },
  ],
};

for (const key in IT_STEP) {
  const value = IT_STEP[key];

  switch (key) {
    case "students":
      extreactData(value, "outcome");
      console.log(
        "Группа студентов - ",
        IT_STEP.students,
        "Суммы всего : ",
        extreactData(value, "outcome")
      );

      break;

    case "teachers":
      extreactData(value, "income");
      console.log(
        "Группа учителей - ",
        IT_STEP.teachers,
        "Суммы всего : ",
        extreactData(value, "income")
      );

      break;
    case "budget":
      const outcome = extreactData(IT_STEP.students, "outcome");
      const income = extreactData(IT_STEP.teachers, "income");

      IT_STEP.budget = outcome - income;

      console.log("Актуальный бюджет -", IT_STEP.budget);

      break;

    default:
      break;
  }
}
