import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public categories = [
    {
      title: 'Get All',
      path: 'products',
    },

    {
      title: 'Burgers',
      path: 'products/burgers',
    },

    {
      title: 'Pizza',
      path: 'products/pizza',
    },
    {
      title: 'Tacos',
      path: 'products/tacos',
    },
  ];
}
