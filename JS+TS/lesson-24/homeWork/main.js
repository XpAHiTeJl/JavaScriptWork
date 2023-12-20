const DefaultURL = "https://swapi.dev/api/";

const buttons = document.getElementsByTagName("button");

const root = document.getElementById("root");

[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    const IDbuttons = e.target.id;

    getData(DefaultURL, IDbuttons, root);
  });
});

async function getData(url = DefaultURL, specific, node) {
  const data = await fetch(url + specific);
  const parseData = await data.json();

  const preparedData = await parseData.results.map((el) => {
    return `<h3>Name : ${el.name}</h3>`;
  });

  node.innerHTML = await preparedData;
}
