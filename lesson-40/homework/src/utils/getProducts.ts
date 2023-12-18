import { Product } from "../schemas";

export const getProducts = () => {
  const products = [
    new Product(
      "product1",
      "Тетрадь смерти",
      "Цугуми Обы",
      "$ 111.07",
      "images/anime1.jpg"
    ),
    new Product(
      "product2",
      "Атака Титанов",
      "Хадзимэ Исаямой",
      "$ 151.22",
      "images/anime2.jpg"
    ),
    new Product(
      "product3",
      "Наруто",
      "Масаси Кисимото",
      "$ 23.15",
      "images/anime3.jpg"
    ),
    new Product(
      "product4",
      "Ванпачман",
      "Мангака: ONE",
      "$ 112.51",
      "images/anime4.jpg"
    ),
    new Product(
      "product5",
      "Человек — бензопила",
      "Тацуки Фудзимото",
      "$ 144.99",
      "images/anime5.jpg"
    ),
    new Product(
      "product6",
      "Истребитель демонов",
      "Коёхару Готогэ",
      "$ 125.48",
      "images/anime6.webp"
    ),
    new Product(
      "product7",
      "Стальной алхимик",
      "Хирому Аракавы",
      "$ 55.23",
      "images/anime7.webp"
    ),
    new Product(
      "product8",
      "Магическая битва",
      "Гэгэ Акутами",
      "$ 166.33",
      "images/anime8.jpg"
    ),
    new Product(
      "product9",
      "Берсерк",
      "Кэнтаро Миура",
      "$ 58.13",
      "images/anime9.jpg"
    ),
    new Product(
      "product10",
      "Блич",
      "Тайто Кубо",
      "$ 6.90",
      "images/anime10.webp"
    ),
    new Product(
      "product11",
      "Токийский гуль",
      "Суи Исиды",
      "$ 67.32",
      "images/anime11.jpg"
    ),
    new Product(
      "product12",
      "Hunter × Hunter",
      "Ёсихиро Тогаси",
      "$ 144.32",
      "images/anime12.jpg"
    ),
    new Product(
      "product13",
      "Бездомный бог",
      "Адатитока",
      "$ 44.30",
      "images/anime13.webp"
    ),
    new Product(
      "product14",
      "Евангелион",
      "Хидэаки Анно",
      "$ 14.37",
      "images/anime14.webp"
    ),
    new Product(
      "product15",
      "Ван-Пис",
      "Toei Animation",
      "$ 44.15",
      "images/anime15.webp"
    ),
    new Product(
      "product16",
      "Крутой учитель Онидзука",
      "Kodansha",
      "$ 55.25",
      "images/anime16.webp"
    ),
    new Product(
      "product17",
      "Мастера меча онлайн",
      "Рэки Кавахара",
      "$ 165.95",
      "images/anime17.webp"
    ),
    new Product(
      "product18",
      "Доктор Стоун",
      "Риитиро Инагаки",
      "$ 75.48",
      "images/anime18.jpg"
    ),
  ];

  return products;
};
