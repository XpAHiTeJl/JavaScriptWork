import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/IProduct';
import { Product } from './classes';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizza: IProduct[] = [
    new Product('UaPizza', 150, './../assets/uaPizza.jpg'),
    new Product('KingDonate', 250, './../assets/kingPizza.jpg'),
    new Product('LowPizza', 120, './../assets/lowPizza.jpg'),
  ];

  constructor() {}

  public getPizza(): IProduct[] {
    return this.pizza;
  }

  public addPizza(obj: IProduct) {
    this.pizza.push(obj);
  }

  public removePizza(label: string) {
    this.pizza = this.pizza.filter((el) => el.getLabel() !== label);
  }
}
