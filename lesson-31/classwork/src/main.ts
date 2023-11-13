import "./style.css";

// !Constant
const BASE_URL = "https://jsonplaceholder.typicode.com";

// !Dom
const text = document.querySelector("#text");
const mainImg = document.querySelector("#main-img");

enum ButtonsFunction {
  GET = "Get",
  HIDE = "Hide",
}

enum ButtonsLinks {
  PHOTOS = "photos",
  POSTS = "posts",
}

const header = document.querySelector("header") as HTMLElement;

header.addEventListener("click", (e) => {
  const currentButton = e.target as HTMLElement;

  if (currentButton.tagName !== "BUTTON") return;

  const textContent = currentButton.textContent;

  const getPhotosCondition =
    textContent?.includes(ButtonsLinks.PHOTOS) &&
    textContent?.includes(ButtonsFunction.GET);

  const getPostsCondition =
    textContent?.includes(ButtonsLinks.POSTS) &&
    textContent?.includes(ButtonsFunction.GET);

  if (getPhotosCondition) {
    getDataByEnpoing(BASE_URL, ButtonsLinks.PHOTOS);
  } else if (getPostsCondition) {
    getDataByEnpoing(BASE_URL, ButtonsLinks.POSTS);
  } else {
    console.log("Erroe!");
  }
});

async function getDataByEnpoing(url: string, endpoint: string) {
  const data = fetch(`${url}/${endpoint}`);
  const parsedData = (await data).json();

  console.log(parsedData);
}
