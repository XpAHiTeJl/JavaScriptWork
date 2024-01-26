import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgersComponent } from './burgers/burgers.component';
import { TacoComponent } from './taco/taco.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FullitemComponent } from './fullitem/fullitem.component';

@NgModule({
  declarations: [AppComponent, PizzaComponent, BurgersComponent, TacoComponent, FullitemComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
