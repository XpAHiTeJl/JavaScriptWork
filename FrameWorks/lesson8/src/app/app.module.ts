<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 6cb6f53 (lesson)
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD

import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [AppComponent],
=======
import { MotocikleComponent } from './motocikle/motocikle.component';
import { CarsComponent } from './cars/cars.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, MotocikleComponent, CarsComponent],
>>>>>>> 6cb6f53 (lesson)
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    CarouselModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

=======
    NgbCarouselModule,
    NgbModule,
  ],
  providers: [],
>>>>>>> 6cb6f53 (lesson)
  bootstrap: [AppComponent],
})
export class AppModule {}
