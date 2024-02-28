import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  public people: any;
  constructor(public http: HttpClient) {
    http.get('https://swapi.dev/api/people').subscribe((data) => {
      console.log(data);
      this.people = data;
      this.people = this.people.results;
    });
  }
}
