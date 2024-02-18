import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-motocikle',
  templateUrl: './motocikle.component.html',
  styleUrl: './motocikle.component.scss',
})
export class MotocikleComponent implements OnInit {
  toggler: boolean = true;
  buyitem: boolean = false;

  timer$: Observable<number>;

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
    this.timer$ = interval(1000).pipe(
      take(60),
      map((x) => 60 - x)
    );

    this.timer$.subscribe((time) => {
      if (time <= 0) {
        this.toggler = false;
      }
    });
  }
}
