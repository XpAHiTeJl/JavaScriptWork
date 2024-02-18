import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motocikle',
  templateUrl: './motocikle.component.html',
  styleUrl: './motocikle.component.scss',
})
export class MotocikleComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    };
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    };
  }
}
