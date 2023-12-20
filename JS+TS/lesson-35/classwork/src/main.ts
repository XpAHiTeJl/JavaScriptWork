import "./style.css";

const textinput = document.querySelector(".textinput");

const mainmenu = document.querySelector(".mainmenu");

const textbutton = document.querySelector(".buttonsend");

const addItem = (value: string) => {
  sessionStorage.setItem(value, value);

  const item = document.createElement("div");
  item.className = "Item";

  const text = document.createElement("span");
  text.textContent = value;

  const deleteNewItem = document.createElement("button");
  deleteNewItem.textContent = "delete";

  deleteNewItem.addEventListener("click", () => {
    item.remove();
    sessionStorage.removeItem(value);
  });

  item.append(text, deleteNewItem);

  mainmenu?.append(item);
};
textbutton.addEventListener("click", () => {
  addItem(textinput.value);
});
