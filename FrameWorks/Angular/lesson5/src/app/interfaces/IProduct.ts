export interface IProduct {
  getLabel: () => string;
  getPrice: () => number;
  getImg: () => string;
  getId: () => number;
}