import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/Iproduct';
import { Product } from './classes';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizza: IProduct[] = [
    new Product('UaPizza', 150),
    new Product('KingDonate', 250),
    new Product('LowPizza', 120),
  ];

  constructor() {}

  public getPizza(): IProduct[] {
    return this.pizza;
  }

  public addPizza(obj: IProduct) {
    this.pizza.push(obj);
  }

  public updatePizza(obj: IProduct, label: string) {
    const searchedPizza = this.pizza.find((el) => el.getLabel() === label);

    for (const key in obj) {
      if (searchedPizza[key] !== obj[key]) {
        searchedPizza[key] = obj[key];
      }
    }
  }

  public removePizza(label: string) {
    this.pizza = this.pizza.filter((el) => el.getLabel() !== label);
  }
}
