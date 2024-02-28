import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
})
export class SpeciesComponent {
  public species: any;
  constructor(public http: HttpClient) {
    http.get('https://swapi.dev/api/species/').subscribe((data) => {
      console.log(data);
      this.species = data;
      this.species = this.species.results;
    });
  }
}
