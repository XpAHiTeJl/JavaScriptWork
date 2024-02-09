import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public categories = [
    {
      title: 'People',
      path: 'people',
    },

    {
      title: 'Planets',
      path: 'planets',
    },

    {
      title: 'Films',
      path: 'films',
    },
    {
      title: 'Species',
      path: 'species',
    },
    {
      title: 'Vehicles',
      path: 'vehicles',
    },
    {
      title: 'Starships',
      path: 'starships',
    },
  ];
}
