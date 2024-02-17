import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public categories = [
    {
      title: 'Car',
      path: 'vehicles/cars',
    },
    {
      title: 'Moto',
      path: 'vehicles/motocikle',
    },
  ];
}
