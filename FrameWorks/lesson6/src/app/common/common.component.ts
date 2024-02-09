import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent {
  public people: any;
  constructor(public http: HttpClient) {
    http.get('https://swapi.dev/api/people').subscribe((data) => {
      console.log(data);
      this.people = data;
      this.people = this.people.results;
    });
  }
}
