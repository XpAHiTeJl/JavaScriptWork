enum Driver {
  John = "John",
  Jim = "Jim",
  Mike = "Mike",
  Tyson = "Tyson",
}
enum Color {
  darkmagenta = "darkmagenta",
  blue = "blue",
  yellow = "yellow",
}

const trains = [
  {
    driver: Driver.John,
    carriages: [
      {
        color: Color.blue,
        id: "1",
      },
      {
        color: Color.yellow,
        id: "2",
      },
      {
        color: Color.blue,
        id: "3",
      },
    ],
  },
  {
    driver: Driver.Jim,
    carriages: [
      {
        color: Color.yellow,
        id: "4",
      },
      {
        color: Color.darkmagenta,
        id: "5",
      },
    ],
  },
  {
    driver: Driver.Mike,
    carriages: [
      {
        color: Color.darkmagenta,
        id: "6",
      },
    ],
  },
  {
    driver: Driver.Tyson,
    carriages: [
      {
        color: Color.darkmagenta,
        id: "7",
      },
      {
        color: Color.blue,
        id: "8",
      },
      {
        color: Color.yellow,
        id: "9",
      },
    ],
  },
];
// console.log(trains);

const findByColor = (trains, color) => {
  const found = [];

  trains.forEach((train) => {
    const carriages = train.carriages.filter(
      (carriages) => carriages.color === color
    );
    if (Array.isArray(carriages)) {
      carriages.forEach((carriage) => {
        found.push({
          name: train.driver,
          color: carriage.color,
          id: carriage.id,
        });
      });
    } else {
      found.push({
        name: train.driver,
        color: carriages.color,
        id: carriages.id,
      });
    }
  });

  return found;
};

const res = findByColor(trains, "darkmagenta");
console.log("Train", res);
