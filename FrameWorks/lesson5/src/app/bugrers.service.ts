import { Injectable } from '@angular/core';
import { Product } from './classes';
import { IProduct } from './interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class BugrersService {
  private burgers: IProduct[] = [
    new Product('UaBurger', 100, './../assets/UuBurger.jpg'),
    new Product('KingDonate', 150, './../assets/kingBurger.png'),
    new Product('LowBurger', 70, './../assets/lowBurger.jpg'),
  ];

  constructor() {}

  public getBurgers(): IProduct[] {
    return this.burgers;
  }
  public addBurger(obj: IProduct) {
    this.burgers.push(obj);
  }

  public removeBurger(label: string) {
    this.burgers = this.burgers.filter((el) => el.getLabel() !== label);
  }
}
