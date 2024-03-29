import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    private label: string,
    private price: number,
    private img: string,
    private id: number
  ) {
    this.label = label;
    this.price = price;
    this.img = img;
    this.id = id;
  }

  getLabel() {
    return this.label;
  }

  getPrice() {
    return this.price;
  }
  getImg() {
    return this.img;
  }
  getId() {
    return this.id;
  }
}
