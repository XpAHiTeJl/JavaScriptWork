import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

// Trains

// [driver = "John", carriages : [{ color: darkmagenta, id: 8 }]]
// [driver = "Jim", carriages : [{ color: blue, id: 4 }]]
// [driver = "Mike", carriages : [{ color: yellow, id: 8 }]]
// [driver = "Tyson", carriages : [{ color: darkmagenta, id: 2 }]]

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
    carriages: {
      color: Color.blue,
      id: "8",
    },
  },
  {
    driver: Driver.Jim,
    carriages: {
      color: Color.yellow,
      id: "3",
    },
  },
  {
    driver: Driver.Mike,
    carriages: {
      color: Color.darkmagenta,
      id: "5",
    },
  },
  {
    driver: Driver.Tyson,
    carriages: {
      color: Color.blue,
      id: "1",
    },
  },
];
console.log(trains);
