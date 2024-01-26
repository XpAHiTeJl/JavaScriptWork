import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public categories = [
    {
      title: 'Burgers',
      path: '/burgers',
    },
    {
      title: 'Pizza',
      path: '/pizza',
    },
    {
      title: 'Tacos',
      path: '/tacos',
    },
  ];
}
