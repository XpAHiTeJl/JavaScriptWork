import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public categories = [
    {
      title: 'Motocikle',
      path: 'vehicles/moto/',
    },

    {
      title: 'Cars',
      path: 'vehicles/cars/',
    },
  ];
}
