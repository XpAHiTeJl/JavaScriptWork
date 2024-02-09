import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  public vehicles: any;
  constructor(public http: HttpClient) {
    http.get('https://swapi.dev/api/vehicles/').subscribe((data) => {
      console.log(data);
      this.vehicles = data;
      this.vehicles = this.vehicles.results;
    });
  }
}
