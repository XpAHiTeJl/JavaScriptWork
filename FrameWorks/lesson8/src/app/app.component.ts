import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson8';
=======
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public categories = [
    {
      title: 'Car',
      path: 'vehicles/cars',
    },
    {
      title: 'Moto',
      path: 'vehicles/motocikle',
    },
  ];
>>>>>>> 6cb6f53 (lesson)
}
