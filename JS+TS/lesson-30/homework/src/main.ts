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
console.log("FullTrains", trains);

// !Color
const findByColor = (trains: any[], color: string) => {
  const found: { name: string; color: string; id: number }[] = [];
  trains.forEach((train: { carriages: any[]; driver: string }) => {
    const carriages = train.carriages.filter(
      (carriages: { color: any }) => carriages.color === color
    );
    if (Array.isArray(carriages)) {
      carriages.forEach((carriage) => {
        found.push({
          name: train.driver,
          color: carriage.color,
          id: carriage.id,
        });
      });
    }
  });

  return found;
};
const resId = findByColor(trains, "darkmagenta");
console.log("Train Color", resId);

// ! Id
const findById = (trains: any[], id: string) => {
  const found: { name: string; color: string; id: number }[] = [];
  trains.forEach((train: { carriages: any[]; driver: any }) => {
    const carriages = train.carriages.filter(
      (carriages: { id: any }) => carriages.id === id
    );
    carriages.forEach((carriage: { color: string; id: number }) => {
      found.push({
        name: train.driver,
        color: carriage.color,
        id: carriage.id,
      });
    });
  });

  return found;
};
const resid = findById(trains, "6");
console.log("Train ID", resid);

// !Colodr + ID
const findByIdColor = (trains: any[], color: string, id: string) => {
  const found: { name: string; color: string; id: any }[] = [];

  trains.forEach((train: { carriages: any[]; driver: any }) => {
    const carriages = train.carriages.filter(
      (carriages: { id: any; color: string }) =>
        carriages.id === id && carriages.color === color
    );

    carriages.forEach((carriage: { color: string; id: any }) => {
      found.push({
        name: train.driver,
        color: carriage.color,
        id: carriage.id,
      });
    });
  });

  return found;
};
const residcolor = findByIdColor(trains, "blue", "3");
console.log("TrainID+Color", residcolor);
