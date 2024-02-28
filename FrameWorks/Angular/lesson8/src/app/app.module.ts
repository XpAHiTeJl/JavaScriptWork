import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  ButtonModule,
  CarouselModule,
  ImgModule,
  ModalModule,
} from '@coreui/angular';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MotocikleComponent } from './motocikle/motocikle.component';
import { CarsComponent } from './cars/cars.component';
import { CdTimerModule } from 'angular-cd-timer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spiner/spinner.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MotocikleComponent,
    CarsComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ImgModule,
    ModalModule,
    ButtonModule,
    CdTimerModule,
    MatProgressSpinnerModule,
    ButtonModule,
    MatButtonModule,
  ],
  providers: [provideAnimationsAsync()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent],
})
export class AppModule {}
