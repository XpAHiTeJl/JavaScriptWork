import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent {
  public films: any;
  constructor(public http: HttpClient) {
    http.get('https://swapi.dev/api/films/').subscribe((data) => {
      console.log(data);
      this.films = data;
      this.films = this.films.results;
    });
  }
}
