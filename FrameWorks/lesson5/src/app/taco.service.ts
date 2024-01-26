import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/IProduct';

import { Product } from './classes';

@Injectable({
  providedIn: 'root',
})
export class TacoService {
  private tacos: IProduct[] = [
    new Product('UaTaco', 110, './../assets/uaTaco.jpg'),
    new Product('KingDonate', 95, './../assets/kingTaco.jpg'),
    new Product('LowTaco', 40, './../assets/lowTaco.jpg'),
  ];

  constructor() {}

  public getTacos(): IProduct[] {
    return this.tacos;
  }

  public addTaco(obj: IProduct) {
    this.tacos.push(obj);
  }

  public removeTaco(label: string) {
    this.tacos = this.tacos.filter((el) => el.getLabel() !== label);
  }
}
