import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private spinner: SpinnerService) {}
  public categories = [
    {
      title: 'Motocikle',
      path: 'vehicles/moto/',
    },

    {
      title: 'Cars',
      path: 'vehicles/cars/',
    },
  ];

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
        setTimeout(() => {
          this.spinner.hide();
        }, 3000);
      }
    });
  }

  ngOnDestroy(): void {}
}
