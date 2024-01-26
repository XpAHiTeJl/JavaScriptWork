import { Component, OnInit } from '@angular/core';
import { BugrersService } from '../bugrers.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css'],
})
export class BurgersComponent {
  public burgers: any[];
  constructor(public burgersService: BugrersService) {
    this.burgers = this.getAllBurgers();
  }

  getAllBurgers() {
    return this.burgersService.getBurgers();
  }
}
