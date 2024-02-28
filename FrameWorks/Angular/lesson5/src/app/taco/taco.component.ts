import { Component, OnInit } from '@angular/core';
import { TacoService } from '../taco.service';

@Component({
  selector: 'app-taco',
  templateUrl: './taco.component.html',
  styleUrls: ['./taco.component.css'],
})
export class TacoComponent {
  public tacos: any[];
  constructor(public tacoService: TacoService) {
    this.tacos = this.getTacos();
  }

  private getTacos() {
    return this.tacoService.getTacos();
  }
}
