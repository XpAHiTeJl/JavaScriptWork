import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent {
  public planets: any;
  constructor(public http: HttpClient) {
    http.get('https://swapi.dev/api/planets/').subscribe((data) => {
      console.log(data);
      this.planets = data;
      this.planets = this.planets.results;
    });
  }
}
